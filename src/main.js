import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { motionPlugin } from '@oku-ui/motion'


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(motionPlugin)
app.mount('#app')
