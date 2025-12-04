<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

type MediaData = { filePath: string; alt: string; author: string; about: string };

const props = defineProps<{
  images: MediaData[];
  selectedIndex: number;
}>();

const emit = defineEmits(["close", "navigate"]);

const currentImage = computed(() => props.images[props.selectedIndex]);

const hasPrev = computed(() => props.selectedIndex > 0);
const hasNext = computed(() => props.selectedIndex < props.images.length - 1);

const prevImage = () => hasPrev.value && emit("navigate", props.selectedIndex - 1);
const nextImage = () => hasNext.value && emit("navigate", props.selectedIndex + 1);

// Gestion du swipe mobile
const touchStartX = ref(0);
const touchEndX = ref(0);

const handleTouchStart = (event: TouchEvent) => {
  touchStartX.value = event.touches[0].clientX;
};

const handleTouchEnd = (event: TouchEvent) => {
  touchEndX.value = event.changedTouches[0].clientX;
  const deltaX = touchEndX.value - touchStartX.value;

  if (deltaX > 50 && hasPrev.value) prevImage();
  if (deltaX < -50 && hasNext.value) nextImage();
};

// Gestion des touches du clavier
const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === "ArrowLeft") prevImage();
  if (event.key === "ArrowRight") nextImage();
  if (event.key === "Escape") emit("close");
};

onMounted(() => {
  document.body.classList.add('overflow-hidden');
  document.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden');
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <div
    class="px-6 sm:p-0 fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-40"
    @click.self="emit('close')"
    @touchstart="handleTouchStart"
    @touchend="handleTouchEnd"
  >
    <!-- Bouton de fermeture -->
    <button
      @click="emit('close')"
      title="Fermer"
      class="absolute p-2 top-5 right-5 text-white hover:scale-110 transition-transform cursor-pointer z-50">
      <font-awesome-icon :icon="['fa', 'x']" size="xl" />
    </button>

    <!-- Flèche gauche -->
    <button
      v-if="hasPrev"
      class="hidden sm:block absolute left-0 pl-5 cursor-pointer h-full w-1/6 text-left outline-0"
      @click="prevImage">
      <font-awesome-icon :icon="['fa', 'arrow-left']" size="xl" />
    </button>

    <!-- Image -->
    <div class="m-auto flex justify-center items-center rounded-md" @click="emit('close')">
      <img :src="currentImage.filePath" :alt="currentImage.alt" class="w-full rounded-md object-contain sm:max-w-[80vw] sm:max-h-[80vh]" />
    </div>

    <!-- Flèche droite -->
    <button
      v-if="hasNext"
      class="hidden sm:block absolute right-0 pr-5 cursor-pointer h-full w-1/6 text-right outline-0"
      @click="nextImage">
      <font-awesome-icon :icon="['fa', 'arrow-right']" size="xl" />
    </button>
  </div>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
