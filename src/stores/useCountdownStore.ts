import { ref } from 'vue'
import { defineStore } from 'pinia'

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const useCountdownStore = defineStore('countdown', () => {
  const countdown = ref<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateCountdown = (targetDate: Date) => {
    const now = new Date();
    const timeDiff = targetDate.valueOf() - now.valueOf();

    if (timeDiff > 0) {
      countdown.value.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
      countdown.value.hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      countdown.value.minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      countdown.value.seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    } else {
      countdown.value = { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  }

  let intervalId: ReturnType<typeof setInterval> | null = null;

  const startCountdown = (targetDate: string|Date) => {
    if (typeof targetDate === 'string') {
      targetDate = new Date(targetDate);
    }
    if (intervalId === null) {
      updateCountdown(targetDate);
      intervalId = setInterval(() => updateCountdown(targetDate), 1000);
    }
  }

  const stopCountdown = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }

  return {
    countdown,
    startCountdown,
    stopCountdown,
  };
});
