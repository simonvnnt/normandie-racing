<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const showScrollButton = ref(false);

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <transition name="fade">
    <div v-if="showScrollButton">
      <button
        @click="scrollToTop"
        class="fixed w-8 h-8 md:w-10 md:h-10 opacity-60 hover:opacity-100 bottom-14 right-4 md:bottom-14 md:right-14 rounded-md bg-primary-light text-black transition-all duration-300 ease-in-out hover:text-red-500">
        <font-awesome-icon :icon="['fa', 'arrow-up']" size="xl" />
      </button>
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
