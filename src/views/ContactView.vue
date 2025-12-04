<script setup lang="ts">
import Title from '@/components/Title.vue'
import { computed, ref } from 'vue'
import axios, { type AxiosError } from 'axios'
import { useChallengeV3 } from 'vue-recaptcha/head'
import {useToast} from 'vue-toast-notification';

const $toast = useToast();
const { execute } = useChallengeV3('submit');

const loading = ref(false);
const msgForm = ref({
  name: '',
  email: '',
  message: ''
});

const isFormValid = computed(() => msgForm.value.name !== '' && msgForm.value.email !== '' && msgForm.value.message !== '');

const sendEmail = async () => {
  loading.value = true;

  const grecaptchaToken = await execute();

  const msgBody = {
    fromName: msgForm.value.name,
    fromEmail: msgForm.value.email,
    to: 'normandieracing.drift.grip@gmail.com',
    subject: 'Nouveau message de ' + msgForm.value.name,
    message: msgForm.value.message,
    captchaToken: grecaptchaToken,
  }

  if (grecaptchaToken) {
    axios.post(import.meta.env.VITE_MAIL_API_BASE_URL + '/email/send/2', msgBody)
      .then(() => {
        $toast.success('Message envoyé !');
        msgForm.value = { name: '', email: '', message: '' };
        loading.value = false;
      })
      .catch((error: AxiosError) => {
        $toast.error('Erreur, message non envoyé');
        console.log(error.message);
        msgForm.value = { name: '', email: '', message: '' };
        loading.value = false;
      });
  }
};
</script>

<template>
  <div class="flex flex-col justify-center items-center py-32 sm:py-40 max-w-7xl m-auto px-10 gap-12 md:gap-20">
    <Title>
      <template #title>Contact</template>
    </Title>

    <div class="w-full flex justify-center max-w-3xl">
      <form id="contactForm" class="w-full flex flex-col items-center" @submit.prevent="sendEmail">
        <div data-aos="fade-up" class="mb-5 w-full">
          <input v-model="msgForm.name" type="text" name="name" class="rounded-md w-full p-2.5 bg-primary-light outline-none" placeholder="Nom" required>
        </div>
        <div data-aos="fade-up" class="mb-5 w-full">
          <input v-model="msgForm.email" type="email" name="email" class="rounded-md w-full p-2.5 bg-primary-light outline-none" placeholder="Email" required>
        </div>
        <div data-aos="fade-up" class="mb-5 w-full">
          <textarea v-model="msgForm.message" name="message" rows="6" class="rounded-md w-full p-2.5 bg-primary-light outline-none" placeholder="Description" required></textarea>
        </div>

        <div data-aos="fade-up">
          <button
            :disabled="!isFormValid || loading"
            :class="!isFormValid || loading ? 'opacity-40' : 'before:bg-white hover:text-black'"
            class="btn-sweep bg-red-vk text-white font-finder text-sm px-3 py-2 text-md transition-all duration-200 hover:saturate-150">
            <span>Envoyer</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
