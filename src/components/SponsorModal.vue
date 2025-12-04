<script setup lang="ts">
import { onUnmounted, watch } from 'vue'

type Sponsor = {
  id: number;
  name: string;
  description: string;
  filePath: string;
  alt: string;
  links: Link[];
}
type Link = { id: number; url: string; linkType: LinkType }
type LinkType = { id: number; name: string; icon: string }

const props = defineProps<{
  isModalOpen: boolean
  sponsor: Sponsor|null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

function closeModal() {
  emit('close')
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

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeModal()
    document.removeEventListener('keydown', handleEscape);
  }
}

onUnmounted(() => {
  document.body.classList.remove('overflow-hidden');
  document.removeEventListener('keydown', handleEscape);
})
</script>

<template>
  <transition name="fade">
    <div
      v-if="isModalOpen && sponsor"
      class="fixed inset-0 bg-black flex justify-center items-center bg-opacity-70 z-50"
      @click="closeModal">
      <div class="relative m-auto bg-primary-light rounded-md flex justify-center items-center p-6 md:p-10 max-w-[90%]" @click.stop>
        <div class="flex flex-col gap-6">
          <div class="flex flex-col sm:flex-row sm:gap-6 md:gap-20">
            <img
              :src="sponsor.filePath"
              :alt="sponsor.alt"
              class="rounded-md w-40 h-40" />

            <div class="">
              <h2>{{sponsor.name}}</h2>
              <p class="text-sm" v-html="sponsor.description"></p>
            </div>
          </div>

          <div class="w-fit mx-auto">
              <div class="flex gap-2.5">
                <a
                  v-for="(link, index) in sponsor.links"
                  :key="index"
                  :href="link.url"
                  target="_blank"
                  class="bg-white rounded-md w-12 h-12 flex justify-center items-center text-primary hover:text-red-500 transition-all duration-300 ease-in-out">
                  <font-awesome-icon :icon="link.linkType.icon" size="xl" />
                </a>
              </div>
          </div>
        </div>

        <button
          @click="closeModal"
          title="Fermer"
          class="absolute top-2 right-3 text-white rounded-md p-2">
          <font-awesome-icon :icon="['fa', 'x']" />
        </button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* Animation de l'apparition et disparition de l'overlay */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animation de l'apparition et disparition de la modal */
.modal-enter-active,
.modal-leave-active {
  transition: transform 0.3s ease;
}
.modal-enter-from {
  transform: scale(0.95);
  opacity: 0;
}
.modal-enter-to {
  transform: scale(1);
  opacity: 1;
}
.modal-leave-from {
  transform: scale(1);
  opacity: 1;
}
.modal-leave-to {
  transform: scale(0.95);
  opacity: 0;
}
</style>
