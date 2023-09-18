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
    ]
  }),
  actions: {
    getLocalVenda() {
      return this.venda[0]
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
  },
})
