<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

watch(
  () => isMobileMenuOpen.value,
  (newVal) => {
    if (newVal) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  },
)

watch(
  () => router.currentRoute.value,
  () => isMobileMenuOpen.value = false,
)
</script>

<template>
  <header class="fixed w-screen top-0 right-0 left-0 inset-0 z-30 bg-secondary shadow-md h-16 sm:h-20">
    <nav class="px-3 lg:px-6 h-full">
      <div class="flex justify-between items-center h-full">
        <!-- Logo -->
        <div class="z-40">
          <RouterLink to="/"><img alt="Viking Cup" src="/img/nr-light.webp" class="w-14 sm:w-20" width="80" height="80" /></RouterLink>
        </div>

        <!-- NavBar | Desktop -->
        <ul class="hidden sm:flex flex-row items-center text-center p-2.5 gap-2 md:gap-3 font-finder">
          <li>
            <RouterLink to="/" activeClass="text-red-500" data-link="Accueil" class="text-sweep after:text-red-500 after:content-[attr(data-link)] mx-1 md:mx-1.5 lg:mx-4 my-1.5">
              Accueil
            </RouterLink>
          </li>
          <li class="hidden">
            <RouterLink to="/evenements" activeClass="text-red-500" data-link="Événements" class="text-sweep after:text-red-500 after:content-[attr(data-link)] mx-1 md:mx-1.5 lg:mx-4 my-1.5">
              Événements
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contact" activeClass="text-red-500" data-link="Contact" class="text-sweep after:text-red-500 after:content-[attr(data-link)] mx-1 md:mx-1.5 lg:mx-4 my-1.5">
              Contact
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/devenir-adherent" active-class="brightness-100" class="btn-sweep bg-black before:bg-white text-white hover:text-black px-1 md:px-1.5 lg:px-4 py-1.5 transition-all duration-200">
              <span>Devenir adhérent</span>
            </RouterLink>
          </li>
        </ul>
      </div>

      <!-- Mobile menu button -->
      <div @click="toggleMobileMenu" class="absolute top-0 end-0 flex sm:hidden m-3 w-10 h-10 justify-center items-center z-50">
        <transition name="icon-fade" mode="out-in">
          <font-awesome-icon :key="isMobileMenuOpen" :icon="isMobileMenuOpen ? ['fas', 'x'] : ['fas', 'bars']" size="xl" />
        </transition>
      </div>

      <!-- NavBar | Mobile -->
      <transition name="slide-down">
        <ul v-if="isMobileMenuOpen" class="fixed inset-0 overflow-y-auto w-screen h-screen bg-secondary flex flex-col p-12 pt-16 gap-4 font-finder text-xl z-40">
          <li class="delay-[200ms]">
            <RouterLink to="/" activeClass="text-red-500" data-link="Accueil" class="mx-5 my-1.5 text-sweep after:text-red-500 after:content-[attr(data-link)]">
              Accueil
            </RouterLink>
          </li>
          <li class="delay-[220ms] hidden">
            <RouterLink to="/evenements" activeClass="text-red-500" data-link="Événements" class="mx-5 my-1.5 text-sweep after:text-red-500 after:content-[attr(data-link)]">
              Événements
            </RouterLink>
          </li>
          <li class="delay-[220ms]">
            <RouterLink to="/contact" activeClass="text-red-500" data-link="Contact" class="mx-5 my-1.5 text-sweep after:text-red-500 after:content-[attr(data-link)]">
              Contact
            </RouterLink>
          </li>
          <li class="delay-[340ms]">
            <RouterLink to="/devenir-adherent" class="font-bold bg-black px-5 pt-2 pb-1.5 transition-all duration-200">
              Devenir adhérent
            </RouterLink>
          </li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<style scoped>
.icon-fade-enter-active, .icon-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.icon-fade-enter, .icon-fade-leave-to {
  opacity: 0;
}


.slide-down-enter-active, .slide-down-leave-active {
  transition: transform 0.5s ease-in-out;
}

.slide-down-enter-from, .slide-down-leave-to {
  transform: translateY(-100%);
}

.slide-down-enter-to, .slide-down-leave-from {
  transform: translateY(0);
}


.slide-down-enter-active li, .slide-down-leave-active li {
  transition: opacity 1s ease-in-out;
}

.slide-down-enter-from li, .slide-down-leave-to li {
  opacity: 0;
}

.slide-down-enter-to li, .slide-down-leave-from li {
  opacity: 1;
}
</style>
