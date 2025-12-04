import axios from 'axios'
import { useAuthStore } from '@/stores/authStore'

const api = axios.create({
  baseURL: import.meta.env.VITE_ADMIN_BASE_URL + '/api'
})

// api.interceptors.request.use(async (config) => {
//   const authStore = useAuthStore()
//
//   const token = await authStore.getValidToken()
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`
//   }
//   return config
// })
//
// api.interceptors.response.use(
//   response => response,
//   async error => {
//     const originalRequest = error.config
//     const authStore = useAuthStore()
//
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true
//       try {
//         const newToken = await authStore.refreshToken()
//         originalRequest.headers.Authorization = `Bearer ${newToken}`
//         return api(originalRequest)
//       } catch (err) {
//         console.error('Erreur lors du refresh token', err)
//       }
//     }
//
//     return Promise.reject(error)
//   }
// )

export default api
