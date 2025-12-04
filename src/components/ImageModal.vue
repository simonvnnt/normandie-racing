<script setup lang="ts">
import { onUnmounted, watch } from 'vue'

// Props
const props = defineProps({
  isModalOpen: {
    type: Boolean,
    required: true,
  },
  src: {
    type: String,
    required: true,
  },
});

// Events
const emit = defineEmits(['close']);

// Methods
const closeModal = () => {
  emit('close');
};

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeModal()
    document.removeEventListener('keydown', handleEscape);
  }
}

watch(() => props.isModalOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('overflow-hidden');
    document.addEventListener('keydown', handleEscape);
  } else {
    document.body.classList.remove('overflow-hidden');
    document.removeEventListener('keydown', handleEscape);
  }
});

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden');
  document.removeEventListener('keydown', handleEscape);
});
</script>

<template>
  <transition name="fade">
    <div
      v-if="isModalOpen"
      class="px-6 sm:p-0 fixed inset-0 bg-black flex justify-center items-center bg-opacity-70 z-50"
      @click="closeModal">
      <div class="w-fit m-auto bg-primary-light rounded-md flex justify-center items-center">
        <img
          :src="src"
          alt="Large view"
          class="w-full rounded-md object-contain sm:max-w-[80vw] sm:max-h-[80vh]" />

        <button
          @click="closeModal"
          title="Fermer"
          class="absolute top-5 right-5 text-white rounded-md p-2 hover:scale-110 ">
          <font-awesome-icon :icon="['fa', 'x']" />
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
