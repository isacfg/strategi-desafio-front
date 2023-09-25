// stores/counter.js
import { defineStore } from 'pinia'


export const useImoveisStore = defineStore('imoveis', {
  state: () => ({
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

    returnImovies() {
      return this.imoveisList
    },

    setStateImoveis(imoveisList) {
      this.imoveisList = imoveisList
    },

  }
})
