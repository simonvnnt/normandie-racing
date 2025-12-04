import { defineStore } from 'pinia'

export const useDateStore = defineStore('date', () => {
  const formatDate = (targetDate: string|Date) => {
    if (typeof targetDate === 'string') {
      targetDate = new Date(targetDate);
    }

    return targetDate.toLocaleDateString('fr-FR', { day: '2-digit', month: 'long', year: 'numeric' });
  }

  return { formatDate }
});
