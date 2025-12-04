<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ScrollTopButton from '@/components/ScrollTopButton.vue'
import { useRecaptchaProvider } from 'vue-recaptcha/head'

// useRecaptchaProvider()
</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>

  <Footer />

  <ScrollTopButton />
</template>

<style scoped>
</style>
