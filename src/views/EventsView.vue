<script setup lang="ts">
import Title from '@/components/Title.vue'
import { onMounted, ref } from 'vue'
import api from '@/plugins/axios'
import ImageModalable from '@/components/ImageModalable.vue'

type Event = { name: string; fromDate: string; toDate: string; imagePath: string };

const events = ref<Event[] | null>(null);

onMounted(() => {
  api
    .get('/events/current-year')
    .then((response) => {
      events.value = response.data.map((e: Event) => ({
        ...e,
        imagePath: e.imagePath ? import.meta.env.VITE_ADMIN_BASE_URL + '/' + e.imagePath : null
      }))
    })
    .catch((error) => {
      console.error(error)
    })
})
</script>

<template>
  <div class="flex flex-col justify-center items-center py-32 sm:py-40 max-w-7xl m-auto px-10">
    <Title>
      <template #title>
        Événements
      </template>
    </Title>


    <template v-if="events && events?.length > 0">
      <div class="grid grid-cols-4 gap-6 md:gap-10 w-full mt-10 md:mt-14 lg:mt-20">
        <template v-for="(event, index) in events" :key="index">
          <div
            data-aos="fade-up"
            class="col-span-2 lg:col-span-1 flex flex-col justify-center gap-4"
            v-if="event.name && event.imagePath">
            <h3 class="text-center">{{event.name}}</h3>

            <ImageModalable
              :img-class="'w-full max-w-120 max-w-120 rounded-md backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1'"
              :src="event.imagePath"
              :alt="event.name"
            />
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<style scoped>
li {
  font-size: clamp(1rem, .8rem + .4vw, 1.2rem);
  line-height: 160%;
}
</style>
