<script setup lang="ts">
import { ref } from 'vue';
import ImageModal from '@/components/ImageModal.vue'

// Props
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Image',
  },
  imgClass: {
    type: String,
  },
  width: {
    type: String,
    default: 'auto',
  },
  height: {
    type: String,
    default: 'auto',
  },
  draggable: {
    type: Boolean,
    default: true,
  },
})

// Variables réactives
const isModalOpen = ref(false)
let isDragging = false

function startDrag() {
  isDragging = false
}

function onDrag() {
  isDragging = true
}

function endDrag() {
  // On ne fait rien ici — on laisse le click décider
}

// Méthodes
const openModal = () => {
  if (!isDragging) {
    isModalOpen.value = true
  }
}
</script>

<template>
  <div>
    <!-- Image cliquable -->
    <img
      data-aos="fade-up"
      @mousedown="startDrag"
      @mousemove="onDrag"
      @mouseup="endDrag"
      @touchstart="startDrag"
      @touchmove="onDrag"
      @touchend="endDrag"
      @click="openModal"
      :src="src"
      :alt="alt"
      class="cursor-pointer"
      :class="imgClass"
      loading="lazy"
      :width="width"
      :height="height"
      :draggable="draggable"
    />

    <!-- Modal -->
    <teleport to="body">
      <ImageModal :src="src" :is-modal-open="isModalOpen" @close="isModalOpen = false" />
    </teleport>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
