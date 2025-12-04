import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBars,
  faX,
  faPhone,
  faEnvelope,
  faDownload,
  faArrowUp,
  faLink,
  faTicket,
  faDiamond,
  faChevronDown, faChevronUp,
  faMagnifyingGlass,
  faCamera,
  faArrowLeft, faArrowRight,
  faCheck,
  faSpinner,
  faMapPin,
  faCircle,
  faChevronLeft, faChevronRight
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faSquareFacebook,
  faInstagram,
  faSquareInstagram,
  faSquareYoutube,
  faTiktok,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { OiGift, OiTrophy, HiUsers, MdChevronrightSharp } from 'oh-vue-icons/icons'
import ToastPlugin from 'vue-toast-notification';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { VueRecaptchaPlugin } from 'vue-recaptcha/head';
import './plugins/axios';
import { MotionPlugin } from '@vueuse/motion'

library.add(faBars, faX, faPhone, faEnvelope, faDownload, faArrowUp, faLink, faTicket, faDiamond, faChevronUp, faChevronDown,
  faMagnifyingGlass, faCamera, faArrowLeft, faArrowRight, faCheck, faSpinner, faMapPin, faCircle, faChevronLeft, faChevronRight,
  faFacebookF, faSquareFacebook, faInstagram, faSquareInstagram, faYoutube, faSquareYoutube, faTiktok);

addIcons(MdChevronrightSharp, HiUsers, OiTrophy, OiGift);

const app = createApp(App)

AOS.init({
  offset: 80,
  duration: 800,
  easing: 'ease-in-out',
  once: true,
});

app.use(VueRecaptchaPlugin, {
  v3SiteKey: '6LexXCAsAAAAALdHOiAScyz-1pYA3bl2J6Y3bEwb',
})

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('v-icon', OhVueIcon);

app.use(ToastPlugin);

app.use(createPinia())
app.use(router)

app.use(MotionPlugin)

app.mount('#app')
