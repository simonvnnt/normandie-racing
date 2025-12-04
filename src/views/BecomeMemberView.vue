<script setup lang="ts">
import Title from '@/components/Title.vue'

const benefits = [
  {
    icon: 'hi-users',
    title: 'Membre à part entière',
    description: "Devenez pleinement membre de l'association Normandie Racing",
  },
  {
    icon: 'oi-trophy',
    title: 'Événements exclusifs',
    description: 'Participez aux événements de pilotage à nos côtés',
  },
  {
    icon: 'oi-gift',
    title: 'Remises partenaires',
    description: 'Bénéficiez de multiples remises auprès de nos partenaires',
  },
]
</script>

<template>
  <div class="flex flex-col justify-center items-center py-32 sm:py-40 max-w-7xl m-auto px-10">
    <Title>
      <template #title>
        <span class="whitespace-nowrap">Devenir adhérent</span>
      </template>
    </Title>

    <div class="flex flex-col mt-12 md:mt-20 gap-12 md:gap-20">
      <!-- Bloc details -->
      <section class="flex justify-center">
        <div
          data-aos="fade-up"
          class="w-full sm:w-1/2 bg-primary-lighter p-6 xl:p-8 flex flex-col justify-between"
        >
          <div class="mb-6">
            <h3 class="leading-none mb-1.5">Adhésion active</h3>
            <div class="h-1 w-16 bg-red-vk"></div>
          </div>

          <p class="mb-6 text-base leading-relaxed">
            En étant adhérent actif, vous devenez pleinement membre de l'association Normandie Racing
            ! Vous prenez une place capitale, vous pourrez participer aux événements de pilotage à nos
            côtés et bénéficier à de multiple remises.
          </p>

          <div class="mb-8">
            <p class="text-sm text-slate-300 mb-2 italic">Alors préparez vos machines !</p>
            <div class="h-px bg-slate-200"></div>
          </div>

          <div class="bg-red-600/20 border border-red-600/30 p-4 mb-6">
            <p class="text-center">
              <span class="block text-sm text-slate-300 mb-1">Attention, Adhésion active</span>
              <span class="text-xl">= Pilotage Garantie !</span>
            </p>
          </div>

          <a
            href="https://www.helloasso.com/associations/normandie-racing/adhesions/adhesion"
            target="_blank"
            class="btn-sweep bg-red-vk before:bg-white text-white hover:text-black font-finder flex justify-center px-1 md:px-1.5 lg:px-4 py-3 transition-all duration-200"
          >
            <span>Devenir Membre !</span>
          </a>
        </div>
      </section>

      <!-- Benefits Section -->
      <section>
        <h3 data-aos="fade-up" class="mb-8 text-center">Les avantages de l'adhésion</h3>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            data-aos="fade-up"
            v-for="(benefit, index) in benefits"
            :key="index"
            class="bg-primary-lighter p-6 xl:p-8 text-center flex flex-col items-center"
          >
            <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <v-icon :name="benefit.icon" scale="1.8" class="w-6 h-6 text-red-600" />
            </div>

            <h4 class="leading-none mb-2">{{ benefit.title }}</h4>
            <p class="text-sm">{{ benefit.description }}</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
li {
  font-size: clamp(1rem, 0.8rem + 0.4vw, 1.2rem);
  line-height: 160%;
}
</style>
