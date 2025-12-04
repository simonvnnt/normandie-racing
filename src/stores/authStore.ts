import { defineStore } from 'pinia'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null as string | null,
    isRefreshing: false,
    refreshPromise: null as null | Promise<string | null>,
  }),

  actions: {
    async login() {
      const response = await axios.post(import.meta.env.VITE_ADMIN_BASE_URL + '/api/login', {
        username: import.meta.env.VITE_USERNAME_API,
        password: import.meta.env.VITE_PASSWORD_API
      })
      this.token = response.data.token
      return this.token
    },

    async getValidToken(): Promise<string | null> {
      if (this.token) return this.token
      return await this.login()
    },

    async refreshToken() {
      if (this.isRefreshing) {
        // Si un refresh est déjà en cours, on attend qu’il se termine
        return this.refreshPromise!
      }

      this.isRefreshing = true
      this.refreshPromise = this.login().finally(() => {
        this.isRefreshing = false
        this.refreshPromise = null
      })

      return this.refreshPromise
    }
  }
})
