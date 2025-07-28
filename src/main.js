import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import App from './App.vue'
import router from './router'
import { motionPlugin } from '@oku-ui/motion'



const app = createApp(App)
app.use(Toast);

app.use(createPinia())
app.use(router)
app.use(motionPlugin)
app.mount('#app')
