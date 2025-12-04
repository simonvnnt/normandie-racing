<script setup lang="ts">
import Title from '@/components/Title.vue'
</script>

<template>
  <div class="flex flex-col justify-center items-center py-32 sm:py-40 max-w-7xl m-auto px-10">
    <Title>
      <template #title>
        Événements
      </template>
    </Title>


    <div class="flex flex-col mt-12 md:mt-20 gap-12 md:gap-20">
      <div class="flex flex-col items-center">
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  font-size: clamp(1rem, .8rem + .4vw, 1.2rem);
  line-height: 160%;
}
</style>
