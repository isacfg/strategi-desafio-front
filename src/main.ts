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

// pegar imoveis do firebase
// const imoveisRef = collection(db, 'imoveis')
// const imoveisQuery = query(imoveisRef, limit(9))

// import { useImoveisStore } from '@/stores/imoveis'

// getDocs(imoveisQuery).then((querySnapshot) => {
//   let localImoveisList = []
//   querySnapshot.forEach((doc) => {
//     localImoveisList.push(doc.data())
//   })
//   useImoveisStore().setStateImoveis(localImoveisList)
//   console.log('Imoveis list loaded from firebase')
//   console.log(localImoveisList)
// })

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
