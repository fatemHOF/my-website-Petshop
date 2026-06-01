import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// import './assets/css/template.css'
import './assets/css/template.css'

import 'swiper/css'; // Swiper CSS
import 'aos/dist/aos.css'; // AOS CSS

// import '@/vendor/jquery-3.6.0.min.js';
// import '@/jquery.odometer.min';

import AOS from 'aos';


const app = createApp(App)

AOS.init({
  duration: 800,
  once: true,
});

app.use(createPinia())
app.use(router)

app.mount('#app')
