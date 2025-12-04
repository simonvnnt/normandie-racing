import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/evenements',
      name: 'events',
      component: () => import('../views/EventsView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
    {
      path: '/devenir-adherent',
      name: 'become-member',
      component: () => import('../views/BecomeMemberView.vue'),
    },
    {
      path: '/mentions-legales',
      name: 'legal-info',
      component: () => import('../views/LegalInformationView.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 };
    }
  }
})

export default router
