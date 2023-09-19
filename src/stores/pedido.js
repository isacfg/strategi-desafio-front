// stores/counter.js
import { defineStore } from 'pinia'
import {
  collection, getFirestore, getDocs, query, limit, where, orderBy, addDoc,
  deleteDoc,
} from 'firebase/firestore'
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


export const usePedidoStore = defineStore('pedido', {
  state: () => ({
    venda: [
      {
        imovelID: 'imovelID',
        imovelName: 'imovelName',
        imovelAdress: 'imovelAdress',
        valorFinal: 'valorFinal',
        comissao: 'comissao',
        parcela: 'parcela',
        valorParcela: 'valorParcela',
        data: 'data',
        clienteID: 'clienteID',
        clienteName: 'clienteName',
        clienteEmail: 'clienteEmail',
        clienteCPF: 'clienteCPF',
        clientePhone: 'clientePhone',
      }
    ],
    vendasList: [],
    user: []
  }),
  actions: {
    getLocalVenda() {
      return this.venda[0]
    },
    async getUserFromDB() {
      const q = query(collection(db, 'users'))
      const querySnapshot = await getDocs(q)
      const usersList = []
      querySnapshot.forEach((doc) => {
        // clientesList.push(doc.data())
        usersList.push({ id: doc.id, ...doc.data() })
      }
      )
      this.user = usersList
      return this.user

    },
    setLocalVenda(
      imovelid,
      imovelname,
      adress,
      valorFinal,
      valorComissao,
      numeroParcelas,
      valorParcela,
      dataVenda,
    ) {
      this.venda[0].imovelID = imovelid
      this.venda[0].imovelName = imovelname
      this.venda[0].imovelAdress = adress
      this.venda[0].valorFinal = valorFinal
      this.venda[0].comissao = valorComissao
      this.venda[0].parcela = numeroParcelas
      this.venda[0].valorParcela = valorParcela
      this.venda[0].data = dataVenda
      console.log(this.venda[0])
    },
    setLocalCliente(
      clienteID,
      clienteName,
      clienteEmail,
      clienteCPF,
      clientePhone,
    ) {
      console.log('setLocalCliente')
      this.venda[0].clienteID = clienteID
      this.venda[0].clienteName = clienteName
      this.venda[0].clienteEmail = clienteEmail
      this.venda[0].clienteCPF = clienteCPF
      this.venda[0].clientePhone = clientePhone

      if (this.venda[0].clienteID != '') {
        return true
      } else {
        return false
      }
    },

    async addVendaToDB(vendedorEmail) {
      const docRef = await addDoc(collection(db, 'vendas'), {
        imovelID: this.venda[0].imovelID,
        imovelName: this.venda[0].imovelName,
        imovelAdress: this.venda[0].imovelAdress,
        valorFinal: this.venda[0].valorFinal,
        comissao: this.venda[0].comissao,
        parcela: this.venda[0].parcela,
        valorParcela: this.venda[0].valorParcela,
        data: this.venda[0].data,
        clienteID: this.venda[0].clienteID,
        clienteName: this.venda[0].clienteName,
        clienteEmail: this.venda[0].clienteEmail,
        clienteCPF: this.venda[0].clienteCPF,
        clientePhone: this.venda[0].clientePhone,
        vendedorEmail: vendedorEmail,
      })
      console.log('Document written with ID: ', docRef.id)
    },

    async getVendas() {
      try {
        const q = query(collection(db, 'vendas'))
        const querySnapshot = await getDocs(q)
        const vendasList = []
        querySnapshot.forEach((doc) => {
          // clientesList.push(doc.data())
          vendasList.push({ id: doc.id, ...doc.data() })
        })
        this.vendasList = vendasList
        return this.vendasList
      } catch (e) {
        console.error(e)
      }
    },

    clearLocalVenda() {
      this.venda[0].imovelID = ''
      this.venda[0].imovelName = ''
      this.venda[0].imovelAdress = ''
      this.venda[0].valorFinal = ''
      this.venda[0].comissao = ''
      this.venda[0].parcela = ''
      this.venda[0].valorParcela = ''
      this.venda[0].data = ''
      this.venda[0].clienteID = ''
      this.venda[0].clienteName = ''
      this.venda[0].clienteEmail = ''
      this.venda[0].clienteCPF = ''
      this.venda[0].clientePhone = ''
    },
  },
})
