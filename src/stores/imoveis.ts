// stores/counter.js
import { defineStore } from 'pinia'
import { collection, getFirestore, getDocs, query, limit, where, orderBy } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyB4HVwIEFuOUi-mCZclwYot5Jy54vJFL-Q',
  authDomain: 'strategi-4cefe.firebaseapp.com',
  projectId: 'strategi-4cefe',
  storageBucket: 'strategi-4cefe.appspot.com',
  messagingSenderId: '84245658044',
  appId: '1:84245658044:web:8738d4b05fec7f140a93b9',
  measurementId: 'G-2GSWYL8VP4'
}

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebaseApp)

const db = getFirestore()

interface Imovel {
  id: number
  categoria: string
  nome: string
  adress: string
  quartos: number
  banheiros: number
  garagem: number
  preco: number
  rating: number
  img: string
}

interface ImoveisState {
  imoveisList: Imovel[]
}

export const useImoveisStore = defineStore('imoveis', {
  state: (): ImoveisState => ({
    imoveisList: [
      {
        id: 1,
        categoria: 'Castelo',
        nome: 'Castelo de Hogwarts',
        adress: 'Hogwarts 1920, Escócia',
        quartos: 7,
        banheiros: 4,
        garagem: 2,
        preco: 1000000,
        rating: 4.5,
        img: '/imoveis/1.jpg'
      }
    ]
  }),
  actions: {
    // get state ok
    // atualizar state ok

    // get db

    returnImovies() {
      return this.imoveisList
    },

    setStateImoveis(imoveisList: Imovel[]) {
      this.imoveisList = imoveisList
    },

    async getImoveisFromDB(count: number) {
      try {
        const q = query(collection(db, 'imoveis'), limit(count))
        const querySnapshot = await getDocs(q)
        let localImoveisList = []
        querySnapshot.forEach((doc) => {
          localImoveisList.push(doc.data())
        })
        this.imoveisList = localImoveisList
        return this.imoveisList
      } catch (error) {
        console.log(error)
      }
    },

    async getImoveisByCategory(category: string) {
      try {
        const q = query(collection(db, 'imoveis'), where('categoria', '==', category))
        const querySnapshot = await getDocs(q)
        let localImoveisList = []
        querySnapshot.forEach((doc) => {
          localImoveisList.push(doc.data())
        })
        this.imoveisList = localImoveisList
        return this.imoveisList
      } catch (error) {
        console.log(error)
      }
    },

    async sortImoveisByPrice(order: string) {
      try {
        const q = query(collection(db, 'imoveis'), orderBy('preco', order))
        const querySnapshot = await getDocs(q)
        let localImoveisList = []
        querySnapshot.forEach((doc) => {
          localImoveisList.push(doc.data())
        })
        this.imoveisList = localImoveisList
        return this.imoveisList
      } catch (error) {
        console.log(error)
      }
    },

    // tentando fazer include funcionar
    // async getImoveisByName(name: string) {
    //   try {
    //     const q = query(collection(db, 'imoveis'), where('nome', 'array-contains', [name]))
    //     const querySnapshot = await getDocs(q)
    //     let localImoveisList = []
    //     querySnapshot.forEach((doc) => {
    //       localImoveisList.push(doc.data())
    //     })
    //     this.imoveisList = localImoveisList
    //     return this.imoveisList
    //   } catch (error) {
    //     console.log(error)
    //   }
    // }

    async getImoveisByName(name: string) {
      try {
        const q = query(collection(db, 'imoveis'), where('nome', '==', name))
        const querySnapshot = await getDocs(q)
        let localImoveisList = []
        querySnapshot.forEach((doc) => {
          localImoveisList.push(doc.data())
        })
        this.imoveisList = localImoveisList
        return this.imoveisList
      } catch (error) {
        console.log(error)
      }
    }
  }
})
