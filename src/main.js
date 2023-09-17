import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
import { collection, getFirestore, getDocs, query, limit } from 'firebase/firestore'

const db = getFirestore()

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
