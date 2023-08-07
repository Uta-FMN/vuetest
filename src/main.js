import './assets/main.css'

import { createApp } from 'vue'
import app from './App.vue'
import router from './router'

app.use(router)

app.mount('#app')
