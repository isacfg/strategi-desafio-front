// stores/counter.js
import { defineStore } from 'pinia'

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
      },
      {
        id: 2,
        categoria: 'Casa',
        nome: 'Wayne Manor',
        adress: 'Gotham City',
        quartos: 10,
        banheiros: 6,
        garagem: 3,
        preco: 1500000,
        rating: 4.8,
        img: '/imoveis/2.jpg'
      },
      {
        id: 3,
        categoria: 'Casa',
        nome: 'Stark Mansion',
        adress: 'Malibu, California',
        quartos: 8,
        banheiros: 5,
        garagem: 4,
        preco: 2000000,
        rating: 4.7,
        img: '/imoveis/3.jpg'
      },
      {
        id: 4,
        categoria: 'Castelo',
        nome: 'Castle Black',
        adress: 'The Wall, Westeros',
        quartos: 15,
        banheiros: 10,
        garagem: 0,
        preco: 800000,
        rating: 4.2,
        img: '/imoveis/4.jpg'
      },
      {
        id: 5,
        categoria: 'Apartamento',
        nome: 'Stark Tower',
        adress: 'New York City',
        quartos: 20,
        banheiros: 15,
        garagem: 8,
        preco: 3000000,
        rating: 4.9,
        img: '/imoveis/5.jpg'
      },
      {
        id: 7,
        categoria: 'Rural',
        nome: 'Quinta do Hobbit',
        adress: 'Condado, Terra-média',
        quartos: 3,
        banheiros: 2,
        garagem: 1,
        preco: 500000,
        rating: 4.4,
        img: '/imoveis/6.jpg'
      },
      {
        id: 6,
        categoria: 'Apartamento',
        nome: 'Penthouse de Tony Stark',
        adress: 'Manhattan, New York City',
        quartos: 5,
        banheiros: 3,
        garagem: 2,
        preco: 2500000,
        rating: 4.6,
        img: '/imoveis/7.jpg'
      },
      {
        id: 8,
        categoria: 'Hotel',
        nome: 'Hotel Overlook',
        adress: 'Colorado, USA',
        quartos: 100,
        banheiros: 80,
        garagem: 20,
        preco: 4000000,
        rating: 4.3,
        img: '/imoveis/8.jpg'
      },
      {
        id: 9,
        categoria: 'Casa',
        nome: 'Vila dos Smurfs',
        adress: 'Floresta Encantada',
        quartos: 5,
        banheiros: 3,
        garagem: 1,
        preco: 750000,
        rating: 4.7,
        img: '/imoveis/9.jpg'
      },
      {
        id: 10,
        categoria: 'Trailers',
        nome: 'Spaceship RV',
        adress: 'Outer Space',
        quartos: 2,
        banheiros: 1,
        garagem: 0,
        preco: 300000,
        rating: 4.0,
        img: '/imoveis/10.jpg'
      },
      {
        id: 11,
        categoria: 'Ar Livre',
        nome: 'Treehouse Retreat',
        adress: 'Amazon Rainforest',
        quartos: 1,
        banheiros: 1,
        garagem: 0,
        preco: 200000,
        rating: 4.8,
        img: '/imoveis/11.jpg'
      },
      {
        id: 12,
        categoria: 'Kitnet',
        nome: 'Cozy Studio Apartment',
        adress: 'Downtown, New York City',
        quartos: 1,
        banheiros: 1,
        garagem: 0,
        preco: 500000,
        rating: 4.5,
        img: '/imoveis/12.jpg'
      },
      {
        id: 13,
        categoria: 'Apartamento',
        nome: 'Skyline View Condo',
        adress: 'Los Angeles, California',
        quartos: 3,
        banheiros: 2,
        garagem: 2,
        preco: 1200000,
        rating: 4.9,
        img: '/imoveis/13.jpg'
      },
      {
        id: 14,
        categoria: 'Hotel',
        nome: 'Bates Motel',
        adress: 'California, USA',
        quartos: 12,
        banheiros: 10,
        garagem: 1,
        preco: 800000,
        rating: 3.9,
        img: '/imoveis/14.jpg'
      },
      {
        id: 15,
        categoria: 'Casa',
        nome: 'Simpsons House',
        adress: 'Springfield, USA',
        quartos: 4,
        banheiros: 3,
        garagem: 2,
        preco: 600000,
        rating: 4.2,
        img: '/imoveis/15.jpg'
      },
      {
        id: 16,
        categoria: 'Casa',
        nome: "Xavier's School for Gifted Youngsters",
        adress: 'North Salem, New York',
        quartos: 20,
        banheiros: 10,
        garagem: 5,
        preco: 2500000,
        rating: 4.7,
        img: '/imoveis/16.jpg'
      },
      {
        id: 17,
        categoria: 'Hotel',
        nome: 'Grand Budapest Hotel',
        adress: 'Zubrowka, Eastern Europe',
        quartos: 50,
        banheiros: 40,
        garagem: 10,
        preco: 3500000,
        rating: 4.6,
        img: '/imoveis/17.jpg'
      },
      {
        id: 18,
        categoria: 'Rural',
        nome: 'Tatooine Homestead',
        adress: 'Tatooine, Outer Rim',
        quartos: 3,
        banheiros: 2,
        garagem: 1,
        preco: 500000,
        rating: 4.3,
        img: '/imoveis/18.jpg'
      },
      {
        id: 18,
        categoria: 'Rural',
        nome: 'Tatooine Homestead',
        adress: 'Tatooine, Outer Rim',
        quartos: 3,
        banheiros: 2,
        garagem: 1,
        preco: 500000,
        rating: 4.1,
        img: '/imoveis/18.jpg'
      },
      {
        id: 19,
        categoria: 'Trailers',
        nome: 'RV from Breaking Bad',
        adress: 'Albuquerque, New Mexico',
        quartos: 1,
        banheiros: 1,
        garagem: 0,
        preco: 300000,
        rating: 4.5,
        img: '/imoveis/19.jpg'
      },
      {
        id: 20,
        categoria: 'Hotel',
        nome: 'The Shining Hotel',
        adress: 'Colorado, USA',
        quartos: 40,
        banheiros: 35,
        garagem: 5,
        preco: 2000000,
        rating: 4.0,
        img: '/imoveis/20.jpg'
      },
      {
        id: 21,
        categoria: 'Apartamento',
        nome: 'Metropolis Luxury Apartment',
        adress: 'Metropolis',
        quartos: 4,
        banheiros: 3,
        garagem: 2,
        preco: 1800000,
        rating: 4.6,
        img: '/imoveis/21.jpg'
      },
      {
        id: 22,
        categoria: 'Ar Livre',
        nome: 'Underwater Atlantis Palace',
        adress: 'Atlantis',
        quartos: 6,
        banheiros: 4,
        garagem: 0,
        preco: 3500000,
        rating: 4.8,
        img: '/imoveis/22.jpg'
      },
      {
        id: 23,
        categoria: 'Kitnet',
        nome: 'Cozy Studio in Paris',
        adress: 'Paris, France',
        quartos: 1,
        banheiros: 1,
        garagem: 0,
        preco: 700000,
        rating: 4.7,
        img: '/imoveis/23.jpg'
      },
      {
        id: 24,
        categoria: 'Casa',
        nome: 'Sherlock Holmes Baker Street Residence',
        adress: 'London, UK',
        quartos: 2,
        banheiros: 1,
        garagem: 0,
        preco: 900000,
        rating: 4.3,
        img: '/imoveis/24.jpg'
      },
      {
        id: 25,
        categoria: 'Hotel',
        nome: 'The Mandalorian Inn',
        adress: 'Nevarro, Outer Rim',
        quartos: 25,
        banheiros: 20,
        garagem: 5,
        preco: 2800000,
        rating: 4.9,
        img: '/imoveis/25.jpg'
      }
    ]
  }),
  actions: {}
})
