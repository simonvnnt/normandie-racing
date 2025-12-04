<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import ImageModalable from '@/components/ImageModalable.vue'

type Round = { id: number; name: string; fromDate: string; toDate: string; circuit: Circuit }
type Circuit = { id: number; name: string; place: string; placeImagePath: string; placeLink: string; text: string; imagePath: string }

defineProps<{
  round: Round
  isActive: boolean
}>()
</script>

<template>
  <div class="relative w-full max-w-[700px] md:w-[700px] px-6 md:px-0">
    <!-- Card -->
    <div class="relative h-full bg-gradient-to-br bg-primary-lighter/90 backdrop-blur-xl overflow-hidden shadow-2xl">
      <!-- Gradient Overlay -->
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#3E3E3E]/90 z-10" />

      <div class="relative flex justify-between items-center z-20 px-4 py-2">
        <!-- Round -->
        <h2 data-aos="fade-up">{{ round.name }}</h2>

        <!-- Date -->
        <div
          data-aos="fade-up"
          v-if="round.fromDate && round.toDate"
          class="flex items-center justify-center text-red-50 bg-red-500 backdrop-blur-sm px-1.5 md:px-3 py-1 md:py-1.5">
          <span class="text-xs lg:text-sm font-bold">{{ (new Date(round.fromDate)).toLocaleDateString() }} au {{ (new Date(round.toDate)).toLocaleDateString() }}</span>
        </div>
      </div>

      <!-- Content -->
      <div class="relative z-20 p-6 space-y-4">
        <!-- Image -->
        <div class="relative" v-if="round.circuit?.imagePath">
          <ImageModalable :src="round.circuit?.imagePath" :alt="round.circuit?.name + ' piste'" :img-class="'h-full w-full rounded-md object-contain transition-transform duration-700'" :draggable="false" />
        </div>

        <p data-aos="fade-up" v-html="round.circuit?.text" class="small"></p>

        <div class="flex flex-col md:flex-row gap-4">
          <div class="w-full md:w-2/3" v-if="round.circuit?.placeImagePath">
            <ImageModalable :src="round.circuit?.placeImagePath" :alt="round.circuit?.name + ' map'" :img-class="'rounded-md'" :draggable="false" />
          </div>

          <div class="w-full md:w-1/3 flex justify-center items-center" v-if="round.circuit?.placeLink">
            <a
              data-aos="fade-up"
              :href="round.circuit?.placeLink"
              target="_blank"
              class="btn-sweep bg-red-vk before:bg-white text-white hover:text-black items-center text-center font-finder py-2 px-3 sm:text-lg transition-all duration-200 hover:saturate-150">
              <font-awesome-icon :icon="['fa', 'map-pin']" />
              <span class="ml-2.5">M'y rendre</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Glow -->
      <div
        v-if="isActive"
        class="absolute -inset-0.5 -z-10 bg-primary-light"
      />
    </div>
  </div>
</template>
