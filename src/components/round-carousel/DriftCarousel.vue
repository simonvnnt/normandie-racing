<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import RoundCard from './RoundCard.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

type Round = { id: number; name: string; fromDate: string; toDate: string; circuit: Circuit }
type Circuit = {
  id: number
  name: string
  place: string
  placeImagePath: string
  placeLink: string
  text: string
  imagePath: string
}

const props = defineProps<{
  rounds: Round[]
}>()

const currentIndex = ref(0)
const isDragging = ref(false)
const dragGuardActive = ref(false)
const startX = ref<number | null>(null)
const lastX = ref<number | null>(null)
let moved = false
const CLICK_DRAG_THRESHOLD = 6
const SWIPE_THRESHOLD = 50
const len = computed(() => props.rounds?.length ?? 0)

onMounted(() => {
  const roundCurrentIndex = props.rounds.findIndex((round) => {
    const now = new Date()
    const toDate = new Date(round.toDate)
    return now <= toDate
  })

  if (roundCurrentIndex !== -1) {
    currentIndex.value = roundCurrentIndex
  } else {
    currentIndex.value = len.value - 1
  }

  updateIsMobile()
  window.addEventListener('resize', updateIsMobile)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateIsMobile)
})

function handlePrevious() {
  if (!len.value) return
  currentIndex.value = currentIndex.value === 0 ? len.value - 1 : currentIndex.value - 1
}
function handleNext() {
  if (!len.value) return
  currentIndex.value = currentIndex.value === len.value - 1 ? 0 : currentIndex.value + 1
}

function setCurrentIndex(e: MouseEvent, index: number) {
  if (currentIndex.value === index) return

  e.stopPropagation()
  e.preventDefault()

  if (moved) {
    return
  }

  if (!len.value || index < 0 || index >= len.value) return
  currentIndex.value = index
}

const isMobile = ref(false)
const updateIsMobile = () => {
  isMobile.value = typeof window !== 'undefined' && window.innerWidth < 480
}

type Pos = 'center' | 'left' | 'right' | 'hidden'
function getCardPosition(index: number): Pos {
  const diff = index - currentIndex.value
  if (diff === 0) return 'center'
  if (diff === 1 || diff === -(len.value - 1)) return 'right'
  if (diff === -1 || diff === len.value - 1) return 'left'
  if (diff > 1 || diff < -1) return 'hidden'
  return 'hidden'
}

const rootGestureStyle = computed<Record<string, string>>(() => ({
  touchAction: isMobile.value ? 'pan-y' : 'none',
  WebkitTouchCallout: 'none',
  WebkitTapHighlightColor: 'transparent',
  overscrollBehavior: 'contain',
}))

/* z-index sur le wrapper centré (pas de transform ici) */
function outerStyleForIndex(index: number) {
  const pos = getCardPosition(index)
  switch (pos) {
    case 'center':
      return { zIndex: 3 }
    case 'left':
    case 'right':
      return { zIndex: 2 }
    default:
      return { zIndex: 1 }
  }
}

/* transform + opacity sur l'enfant animé */
function innerStyleForIndex(index: number) {
  const position = getCardPosition(index)

  if (isMobile.value) {
    switch (position) {
      case 'center':
        return { transform: 'translateX(0px) scale(1)' }
      case 'left':
        return { transform: 'translateX(-100px) scale(0.85)' }
      case 'right':
        return { transform: 'translateX(100px) scale(0.85)' }
      default:
        return { transform: 'translateX(0px) scale(0.7)' }
    }
  } else {
    switch (position) {
      case 'center':
        return { transform: 'translateX(0px) translateZ(0px) scale(1) rotateY(0deg)' }
      case 'left':
        return { transform: 'translateX(-280px) translateZ(-200px) scale(0.75) rotateY(25deg)' }
      case 'right':
        return {
          transform:
            'translateX(280px) translateZ(-200px) scale(0.75) rotateY(-25deg) translateZ(0)',
        }
      default:
        return {
          transform: 'translateX(0px) translateZ(-400px) scale(0.5) rotateY(0deg) translateZ(0)',
        }
    }
  }
}

/* Swipe / drag logic via Pointer Events */
function onPointerDown(e: PointerEvent) {
  isDragging.value = true
  dragGuardActive.value = false
  moved = false
  startX.value = e.clientX
  lastX.value = e.clientX
  ;(e.target as HTMLElement)?.setPointerCapture?.(e.pointerId)
}
function onPointerMove(e: PointerEvent) {
  if (!isDragging.value || startX.value == null) return
  const dx = e.clientX - startX.value
  if (Math.abs(dx) > CLICK_DRAG_THRESHOLD) {
    moved = true
    dragGuardActive.value = true
  }
}
function onPointerUp(e: PointerEvent) {
  if (!isDragging.value || startX.value == null) {
    return onPointerCancel(e)
  }

  const dx = e.clientX - startX.value
  if (Math.abs(dx) > SWIPE_THRESHOLD) {
    if (dx > 0) handlePrevious()
    else handleNext()
  }

  isDragging.value = false
  setTimeout(() => (dragGuardActive.value = false), 100)
}
function onPointerCancel(_e: PointerEvent) {
  isDragging.value = false
  dragGuardActive.value = false
  startX.value = null
  lastX.value = null
}
</script>

<template>
  <div
    class="relative"
    @pointerdown="onPointerDown"
    @pointermove="onPointerMove"
    @pointerup="onPointerUp"
    @pointercancel="onPointerCancel"
    :style="rootGestureStyle"
  >
    <!-- Dots -->
    <div class="flex justify-center gap-2 mb-6" v-if="len">
      <button
        v-for="(_, index) in rounds"
        :key="index"
        @click="currentIndex = index"
        :class="[
          'h-2 rounded-full transition-all duration-300',
          index === currentIndex
            ? 'w-8 bg-red-vk'
            : 'w-2 bg-primary-lighter hover:bg-primary-light',
        ]"
        :aria-label="`Aller au round ${index + 1}`"
      />
    </div>

    <!-- Carousel -->
    <div class="relative h-[770px] md:h-[820px] overflow-hidden md:overflow-visible">
      <div
        class="absolute inset-0 flex justify-center md:block"
        style="perspective: 2000px">
        <div
          v-for="(round, index) in rounds"
          :key="round.id"
          class="absolute left-1/2 -translate-x-1/2"
          :class="{ 'w-full': isMobile }"
          :style="outerStyleForIndex(index)"
        >
          <div
            @click.capture="setCurrentIndex($event, index)"
            class="relative h-[700px] md:h-[800px] [backface-visibility:hidden] [transform-style:preserve-3d] isolate transition-transform duration-700 ease-[cubic-bezier(0.32, 0.72, 0, 1)] [will-change:transform]"
            :class="getCardPosition(index) === 'center' ? 'opacity-100' : 'opacity-30'"
            :style="innerStyleForIndex(index)"
            draggable="false"
          >
            <RoundCard :round="round" :isActive="getCardPosition(index) === 'center'" />
          </div>
        </div>
      </div>
    </div>

    <!-- Navigation Buttons - Hidden on mobile -->
    <div class="hidden md:flex justify-center gap-4" v-if="len && len > 1">
      <button
        @click="handlePrevious"
        class="group relative h-12 w-12 bg-primary-lighter backdrop-blur-sm transition-all duration-300 hover:border-red hover:bg-primary-lighter"
        aria-label="Round précédent"
      >
        <font-awesome-icon :icon="['fas', 'chevron-left']" class="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-gray-400 transition-colors group-hover:text-red-vk" />
      </button>
      <button
        @click="handleNext"
        class="group relative h-12 w-12 bg-primary-lighter backdrop-blur-sm transition-all duration-300 hover:border-red hover:bg-primary-lighter"
        aria-label="Round suivant"
      >
        <font-awesome-icon :icon="['fas', 'chevron-right']" class="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 text-gray-400 transition-colors group-hover:text-red-vk" />
      </button>
    </div>
  </div>
</template>
