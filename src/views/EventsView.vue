<script setup lang="ts">
import Title from '@/components/Title.vue'
import { onMounted, ref } from 'vue'
import api from '@/plugins/axios'

type Event = { name: string; link: string; fromDate: string; toDate: string; imagePath: string }

const events = ref<Event[] | null>(null)

const formatDate = (date: string) => {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date))
}

onMounted(() => {
  api
    .get('/events/current-year')
    .then((response) => {
      events.value = response.data.map((e: Event) => ({
        ...e,
        imagePath: e.imagePath ? import.meta.env.VITE_ADMIN_BASE_URL + '/' + e.imagePath : null,
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
      <template #title> Événements </template>
    </Title>

    <template v-if="events">
      <template v-if="events?.length > 0">
        <div class="grid grid-cols-4 gap-6 md:gap-10 w-full mt-10 md:mt-14 lg:mt-20">
          <template v-for="(event, index) in events" :key="index">
            <div
              data-aos="fade-up"
              class="col-span-4 lg:col-span-2 2xl:col-span-1 flex flex-col justify-center gap-4"
              v-if="event.name && event.imagePath"
            >
              <!-- Title -->
              <div class="flex flex-col items-center justify-center">
                <!-- Title -->
                <h3 class="text-center">{{ event.name }}</h3>

                <!-- Date -->
                <div
                  v-if="event.fromDate && event.toDate"
                  class="w-fit flex items-center justify-center backdrop-blur-sm px-1.5 md:px-3"
                >
                  <span class="text-xs lg:text-sm font-bold"
                    >{{ formatDate(event.fromDate) }} au {{ formatDate(event.toDate) }}</span
                  >
                </div>
              </div>

              <template v-if="event.link">
                <a :href="event.link" target="_blank" class="w-full">
                  <img
                    class="w-full rounded-md backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1"
                    :src="event.imagePath"
                    :alt="event.name"
                  />
                </a>
              </template>
              <template v-else>
                <img
                  class="w-full rounded-md backdrop-blur-md transition-all duration-300 ease-in-out hover:-translate-y-1"
                  :src="event.imagePath"
                  :alt="event.name"
                />
              </template>
            </div>
          </template>
        </div>
      </template>
      <template v-else>
        <h3 data-aos="fade-up" class="pt-12 text-center">
          Aucun événement prévu pour le moment. Restez connectés !
        </h3>
      </template>
    </template>
  </div>
</template>

<style scoped>
li {
  font-size: clamp(1rem, 0.8rem + 0.4vw, 1.2rem);
  line-height: 160%;
}
</style>
