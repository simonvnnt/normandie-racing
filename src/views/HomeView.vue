<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import DriftCarousel from '@/components/round-carousel/DriftCarousel.vue'
import TitleSecondary from '@/components/TitleSecondary.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import SponsorModal from '@/components/SponsorModal.vue'
import sponsorsData from '../data/sponsors.json'

type Sponsor = {
  id: number;
  name: string;
  description: string;
  filePath: string;
  alt: string;
  links: Link[];
  displayWebsite: boolean;
}
type Link = { id: number; url: string; linkType: LinkType }
type LinkType = { id: number; name: string; icon: string }

const sponsors = ref<Sponsor[] | null>(null)
const showModal = ref<boolean>(false)
const selectedSponsor = ref<Sponsor | null>(null)

onMounted(() => {
  // Fetch sponsors data from sponsors.json
  sponsors.value = sponsorsData as Sponsor[]
})

function openModal(sponsor: Sponsor) {
  selectedSponsor.value = sponsor
  showModal.value = true
}

function closeModal() {
  showModal.value = false
}
</script>

<template>
  <div class="relative overflow-hidden h-screen">
    <video autoplay muted loop playsinline
           class="shadow-md absolute z-20 object-cover object-bottom w-full h-full" >
      <source :src="'/img/bg.webm'" type="video/webm" />
      <source :src="'/img/bg.mp4'" type="video/mp4" />
    </video>

    <div class="relative z-20 pt-[15vh] sm:pt-[25vh] px-1 lg:px-4 xl:px-12">
      <!-- Title -->
      <div class="relative inline-block px-2 xl:px-4">
        <h1 class="w-fit uppercase pt-5 pb-3 pl-4 pr-7 leading-none bg-red-vk italic">
          Normandie Racing
        </h1>

        <h2 class="w-fit float-right translate-x-1/4 -translate-y-4 text-2xl md:text-3xl xl:text-5xl text-black bg-white px-3 md:px-4 pt-2 md:pt-3 pb-1 md:pb-2 rush-flow">
          La bonne trajectoire
        </h2>
      </div>
    </div>
  </div>

  <div class="max-w-7xl mx-auto pb-10">
    <div class="w-full py-12 flex flex-col gap-6 md:gap-20">
<!--      <div class="w-full mx-auto"-->
<!--        v-if="currentSeasonRounds && currentSeasonRounds.length > 0">-->
<!--        <DriftCarousel :rounds="currentSeasonRounds" />-->
<!--      </div>-->

      <section id="format" class="w-full mx-auto px-8 flex flex-col items-center">
        <TitleSecondary>
          <template #title>
            Nos partenaires
          </template>
        </TitleSecondary>

        <template v-if="sponsors && sponsors?.length > 0">
          <div class="grid grid-cols-4 gap-6 md:gap-10 w-full mt-10 md:mt-14 lg:mt-20" data-aos="fade-up">
            <div
              @click="openModal(sponsor)"
              v-for="(sponsor, index) in sponsors"
              :key="index"
              :title="sponsor.name"
              class="col-span-2 lg:col-span-1 bg-primary-light hover:bg-white rounded-md backdrop-blur-md cursor-pointer transition-all duration-300 ease-in-out saturate-120 hover:saturate-150 hover:-translate-y-1"
            >
              <div class="flex justify-center items-center p-2">
                <img :src="sponsor.filePath" :alt="sponsor.alt" class="w-full max-w-40 max-h-40" />
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <h3 data-aos="fade-up">Nous contacter via <a data-link="normandieracing.drift.grip@gmail.com" class="hover:text-red-500" href="mailto:normandieracing.drift.grip@gmail.com">normandieracing.drift.grip@gmail.com</a></h3>
        </template>

        <!-- Modal -->
        <SponsorModal @close="closeModal" :is-modal-open="showModal" :sponsor="selectedSponsor" />
      </section>
    </div>

  </div>
</template>

<style scoped>
h1 {
  font-size: clamp(1.5rem, 1.5rem + 4.5vw, 5rem) !important;
}

h3 {
  font-size: clamp(1.1rem, 0.8rem + 1.7vw, 2.3rem) !important;
}

h4 {
  font-size: clamp(1rem, 0.5rem + 1.5vw, 1.8rem) !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
