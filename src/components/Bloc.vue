<script setup lang="ts">
// Props
defineProps({
  src: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <div data-aos="fade-up">
    <a :href="src" target="_blank" class="btn-sweep bg-red-vk before:bg-white text-white hover:text-black flex items-center justify-center h-32 py-3 px-3 text-xl transition-all duration-200 hover:saturate-150 text-center font-finder">
      <span><slot name="label"></slot></span>
    </a>
  </div>
</template>
