<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  tabs: string[]
  active?: string
}>()

const emit = defineEmits<{
  (e: 'update:active', value: string): void
}>()

const currentTab = ref(props.active || props.tabs[0] || '')

watch(() => props.active, (newVal) => {
  if (newVal) currentTab.value = newVal
})

function selectTab(tab: string) {
  currentTab.value = tab
  emit('update:active', tab)
}
</script>

<template>
  <div class="flex w-full border-t-[1px] border-gray-600">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="selectTab(tab)"
      class="flex-1 text-center py-3 relative"
      :class="tab === currentTab ? 'text-red-500 font-semibold border-b-2 border-red-vk' : 'font-medium border-b-[1px] border-gray-600'"
    >
      {{ tab }}
    </button>
  </div>
</template>
