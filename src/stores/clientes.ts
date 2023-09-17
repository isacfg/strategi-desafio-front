// stores/counter.js
import { defineStore } from 'pinia'
import {
  collection,
  getFirestore,
  getDocs,
  query,
  limit,
  where,
  orderBy,
  addDoc,
  deleteDoc,
  doc,
  updateDoc
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
const clientsCollection = collection(db, 'clientes')

interface Cliente {
  id?: number
  nome: string
  cpf: string
  email: string
  dataCadastro: any
  foto?: any
}

interface ClientesState {
  clientesList: Cliente[]
}

export const useClientesStore = defineStore('clientes', {
  // nome cpf email telefone
  // não podem haver dois clientes com o mesmo cpf ou com o mesmo email, e clique em cadastrar.

  state: (): ClientesState => ({
    clientesList: [
      {
        id: 1,
        nome: 'João',
        cpf: '12345678910',
        email: 'email@email.com',
        dataCadastro: '',
        foto: ''
      },
      {
        id: 2,
        nome: 'João 2',
        cpf: '12345678910',
        email: 'email2@email.com',
        dataCadastro: '',
        foto: ''
      }
    ]
  }),
  actions: {
    // pegar clientes do db 9 a cada vez
    // buscar por cpf
    // ordenar por data de cadastro
    // adicionar cliente (cpf e email não podem ser iguais)
    // remover cliente
    // editar cliente

    returnClientes() {
      return this.clientesList
    },

    async getClientesFromDB(count: number) {
      try {
        const q = query(collection(db, 'clientes'), orderBy('dataCadastro', 'desc'), limit(count))
        const querySnapshot = await getDocs(q)
        const clientesList: Cliente[] = []
        querySnapshot.forEach((doc) => {
          clientesList.push(doc.data() as Cliente)
        })
        this.clientesList = clientesList
        return this.clientesList
      } catch (e) {
        console.error(e)
      }
    },

    async getClienteByCPF(cpf: string) {
      try {
        const q = query(collection(db, 'clientes'), where('cpf', '==', cpf))
        const querySnapshot = await getDocs(q)
        const clientesList: Cliente[] = []
        querySnapshot.forEach((doc) => {
          clientesList.push(doc.data() as Cliente)
        })
        this.clientesList = clientesList
        return this.clientesList
      } catch (e) {
        console.error(e)
      }
    },

    async addClienteToDB(cliente: Cliente) {
      try {
        const q = query(collection(db, 'clientes'), where('cpf', '==', cliente.cpf))
        const querySnapshot = await getDocs(q)
        const clientesList: Cliente[] = []
        querySnapshot.forEach((doc) => {
          clientesList.push(doc.data() as Cliente)
        })
        if (clientesList.length > 0) {
          return false
        } else {
          await addDoc(collection(db, 'clientes'), cliente)
          return true
        }
      } catch (e) {
        console.error(e)
        return false
      }
    },

    // deletar cliente
    //  async deleteUser() {
    //   console.log('deleteUser')
    //   try {
    //     if (this.isModalOpen) {
    //       await deleteDoc(doc(projectsCollection, this.id))
    //       this.isModalOpen = !this.isModalOpen

    //       // Updating the store
    //       getDocs(projectsCollection)
    //         .then((snapshot) => {
    //           let projects = []
    //           snapshot.forEach((doc) => {
    //             projects.push({ ...doc.data(), id: doc.id })
    //           })
    //           // Push data to store
    //           useProjectsStore().setProjects(projects)
    //           // console.log(projects)
    //         })
    //         .catch((err) => {
    //           console.log('Erro ao ler docs firebase in main.js', err)
    //         })
    //     }
    //   } catch (e) {
    //     console.error('Error removing document: ', e)
    //   }
    // },

    // delete using only the id
    async deleteTask(cliente: Cliente) {
      try {
        await deleteDoc(doc(db, 'clientes', cliente.cpf))
      } catch (e) {
        console.error('Erro: ', e)
      }
      // cant have two clients with the same cpf
    },

    // editar cliente
    async editCliente(cliente: Cliente) {
      // try {
      //   await updateDoc(doc(db, 'clientes', cliente.id), {
      //     nome: cliente.nome,
      //     cpf: cliente.cpf,
      //     email: cliente.email,
      //     dataCadastro: cliente.dataCadastro,
      //     foto: cliente.foto
      //   })
      //   console.log('Editado com sucesso: ', cliente.id)
      // } catch (e) {
      //   console.error('Erro: ', e)
      // }
      // cant have two clients with the same cpf

      try {
        const q = query(collection(db, 'clientes'), where('cpf', '==', cliente.cpf))
        const querySnapshot = await getDocs(q)
        const clientesList: Cliente[] = []
        querySnapshot.forEach((doc) => {
          clientesList.push(doc.data() as Cliente)
        })
        if (clientesList.length > 0) {
          return false
        } else {
          // await updateDoc(doc(db, 'clientes', cliente.cpf), {
          //   nome: cliente.nome,
          //   cpf: cliente.cpf,
          //   email: cliente.email,
          //   dataCadastro: cliente.dataCadastro,
          //   foto: cliente.foto
          // })
          // return true
        }
      } catch (e) {
        console.error(e)
        return false
      }
    }
  }
})
