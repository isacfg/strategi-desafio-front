<template>
  <Navbar>
    <h1 class="text-black text-4xl font-bold mt-20 mb-8 px-4">Gerenciar Clientes</h1>

    <!-- filtro + botao add -->
    <div class="flex justify-between px-4 max-lg:flex-col max-lg:gap-y-4">
      <div class="flex gap-x-4 max-lg:flex-col max-lg:gap-y-4">
        <!-- search -->
        <div class="form-control max-md:w-full">
          <div class="input-group max-md:w-full">
            <input
              v-model="cpfSearch"
              type="text"
              placeholder="Buscar cliente por CPF"
              class="busca input input-bordered max-md:w-full"
            />
          </div>
        </div>
        <!-- <select
          v-model="sortBy"
          class="select select-bordered focus:outline-none sort-by w-full max-md:w-full rounded-lg"
        >
          <option disabled selected>Ordenar por:</option>
          <option>Data Crescente</option>
          <option>Data Decrescente</option>
        </select> -->
        <button
          @click="handleSearch"
          class="btn-busca btn bg-greenish text-white font-medium max-md:w-full hover:bg-green-900"
        >
          Buscar
        </button>
      </div>
      <button
        onclick="addCliente.showModal()"
        class="btn-busca btn bg-greenish text-white font-medium max-md:w-full hover:bg-green-900"
      >
        Adicionar Cliente
      </button>
    </div>

    <div class="mt-12 mx-auto w-full px-4 flex flex-col table-col">
      <!-- row header -->
      <div class="flex items-center gray p-4 row-header">
        <div class="w-1/3 text-black font-semibold">
          <p>Cliente</p>
        </div>

        <div class="w-1/3 text-black font-semibold">
          <p>Contato</p>
        </div>
        <div class="w-1/3 text-black font-semibold">
          <p>Primeiro cadastro</p>
        </div>
      </div>

      <!-- row body -->
      <div
        v-for="cliente in clientes"
        :key="cliente.id"
        class="flex tab-child transition-custom items-center p-4 max-sm:gap-x-2 cursor-pointer"
      >
        <div class="flex items-center w-1/3 overflow-hidden text-black gap-x-2">
          <img src="../assets/placeholder-imgs.png" alt="" srcset="" />
          <p class="max-sm:text-sm">{{ cliente.nome }}</p>
        </div>

        <div class="w-1/3 overflow-hidden text-black">
          <p class="max-sm:text-sm">{{ cliente.email }}</p>
        </div>

        <div class="w-1/3 overflow-hidden text-black">
          <p class="max-sm:text-sm">{{ convertTimestampToDate(cliente.dataCadastro) }}</p>
        </div>

        <div class="w-auto text-black">
          <div class="dropdown px-4 dropdown-bottom dropdown-end">
            <label tabindex="0" class="">
              <img class="cursor-pointer" src="../assets/icons-cards/3dots.svg" alt="" srcset=""
            /></label>
            <ul
              tabindex="0"
              class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-2xl w-52"
            >
              <li
                @click="
                  selectCliente({
                    id: cliente.id,
                    nome: cliente.nome,
                    email: cliente.email,
                    cpf: cliente.cpf,
                    telefone: cliente.telefone
                  })
                "
                onclick="verCliente.showModal()"
                class="p-2 transition-custon rounded-lg mb-2"
              >
                Ver mais
              </li>
              <li
                @click="
                  selectCliente({
                    id: cliente.id,
                    nome: cliente.nome,
                    email: cliente.email,
                    cpf: cliente.cpf,
                    telefone: cliente.telefone
                  })
                "
                onclick="editCliente.showModal()"
                class="p-2 transition-custon rounded-lg mb-2"
              >
                Editar
              </li>
              <li
                @click="deleteCliente(cliente)"
                class="p-2 rounded-lg hover:bg-red-600 hover:text-white"
              >
                Remover
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- modal adicionar cliente -->
    <dialog id="addCliente" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box py-8 px-10">
        <h3 class="text-2xl font-bold text-black mb-8">Criar Cliente</h3>
        <div class="flex-col w-full items-center justify-end flex">
          <input
            v-model="clientName"
            type="text"
            placeholder="Nome do Cliente"
            class="busca input input-bordered w-full mb-4"
          />
          <input
            v-model="clientEmail"
            type="email"
            placeholder="Email do Cliente"
            class="busca input input-bordered w-full mb-4"
          />
          <input
            v-model="clientCPF"
            type="text"
            placeholder="CPF do Cliente"
            class="busca input input-bordered w-full mb-4"
            v-mask="'###.###.###-##'"
          />
          <input
            v-model="clientTelefone"
            type="tel"
            placeholder="Telefone do Cliente"
            class="busca input input-bordered w-full mb-4"
            v-mask="'(##) ####-####'"
          />
          <!-- data de cadatro -->
          <!-- <div class="form-control max-md:w-full">
            <div class="input-group max-md:w-full">
              <input
                v-model="clientDataCadastro"
                type="date"
                placeholder="Data de Cadastro"
                class="busca input input-bordered max-md:w-full"
              />
            </div>
          </div> -->

          <div class="w-full flex justify-between">
            <button
              id="closeModalAdd"
              onclick="addCliente.close()"
              class="btn-busca btn-modal btn bg-red-600 text-white font-medium hover:text-white hover:bg-red-900"
            >
              Cancelar
            </button>
            <button
              @click="addClient"
              class="btn-busca btn-modal btn bg-greenish text-white font-medium hover:bg-green-900"
            >
              Adicionar
            </button>
          </div>

          <p class="text-red-600">{{ error }}</p>
        </div>
      </div>
    </dialog>
    <!-- fim modal adicionar cliente -->

    <!-- modal editar cliente -->
    <dialog id="editCliente" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box py-8 px-10">
        <h3 class="text-2xl font-bold text-black mb-8">Editar Cliente</h3>
        <div class="flex-col w-full items-center justify-end flex">
          <input
            v-model="selectedCliente.nome"
            type="text"
            placeholder="Nome do Cliente"
            class="busca input input-bordered w-full mb-4"
          />
          <input
            v-model="selectedCliente.email"
            type="email"
            placeholder="Email do Cliente"
            class="busca input input-bordered w-full mb-4"
          />
          <input
            v-model="selectedCliente.cpf"
            type="text"
            placeholder="CPF do Cliente"
            class="busca input input-bordered w-full mb-4"
            v-mask="'###.###.###-##'"
          />
          <input
            v-model="selectedCliente.telefone"
            type="tel"
            placeholder="Telefone do Cliente"
            class="busca input input-bordered w-full mb-4"
            v-mask="'(##) ####-####'"
          />

          <div class="w-full flex justify-between">
            <button
              id="closeModalAdd"
              onclick="editCliente.close()"
              class="btn-busca btn-modal btn bg-red-600 text-white font-medium hover:text-white hover:bg-red-900"
            >
              Cancelar
            </button>
            <button
              @click="editarCliente"
              class="btn-busca btn-modal btn bg-greenish text-white font-medium hover:bg-green-900"
            >
              Editar
            </button>
          </div>

          <p class="text-red-600">{{ error }}</p>
        </div>
      </div>
    </dialog>
    <!-- modal ver mais cliente -->
    <dialog id="verCliente" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box py-8 px-10">
        <h3 class="text-2xl font-bold text-black mb-8">Detalhes Cliente</h3>
        <div class="flex-col w-full items-center justify-end flex">
          <input
            disabled
            v-model="selectedCliente.nome"
            type="text"
            placeholder="Nome do Cliente"
            class="busca input input-bordered w-full mb-4"
          />
          <input
            disabled
            v-model="selectedCliente.email"
            type="email"
            placeholder="Email do Cliente"
            class="busca input input-bordered w-full mb-4"
          />
          <input
            disabled
            v-model="selectedCliente.cpf"
            type="text"
            placeholder="CPF do Cliente"
            class="busca input input-bordered w-full mb-4"
          />
          <input
            disabled
            v-model="selectedCliente.telefone"
            type="tel"
            placeholder="Telefone do Cliente"
            class="busca input input-bordered w-full mb-4"
          />

          <div class="w-full flex justify-between">
            <button
              id="closeModalAdd"
              onclick="verCliente.close()"
              class="btn-busca btn-modal btn bg-red-600 text-white font-medium hover:text-white hover:bg-red-900"
            >
              Fechar
            </button>
          </div>

          <p class="text-red-600">{{ error }}</p>
        </div>
      </div>
    </dialog>
  </Navbar>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import { Timestamp } from 'firebase/firestore'
import { useClientesStore } from '@/stores/clientes'
import { mask } from 'vue-the-mask'

export default {
  name: 'ClienteView',
  components: {
    Navbar
  },
  directives: {
    mask
  },
  data() {
    return {
      clientes: [],
      shown: 9,
      cpfSearch: '',
      sortBy: '',
      loading: false,

      clientName: '',
      clientEmail: '',
      clientCPF: '',
      clientDataCadastro: '',
      clientTelefone: '',

      error: '',
      topAviso: false,

      selectedCliente: {
        id: '',
        nome: '',
        email: '',
        cpf: '',
        telefone: ''
      }
    }
  },

  methods: {
    verMais() {
      this.shown += 9
    },

    handleSearch() {
      this.getClientesByCpf().then((res) => {
        this.clientes = res
      })
    },

    // convert timestamp do firebase to date
    convertTimestampToDate(timestamp: any) {
      return timestamp.toDate().toLocaleDateString()
    },

    selectCliente(cliente: any) {
      this.selectedCliente = cliente
    },

    async editarCliente() {
      if (
        this.selectedCliente.nome == '' ||
        this.selectedCliente.email == '' ||
        this.selectedCliente.cpf == ''
      ) {
        this.error = 'Preencha todos os campos'
        return
      }

      try {
        // let res = await useClientesStore().editCliente(this.selectedCliente)
        // this.getClientes().then((res) => {
        //   this.clientes = res
        // })

        this.selectedCliente.cpf = this.selectedCliente.cpf.replace(/\D/g, '')
        // convert to number
        this.selectedCliente.cpf = Number(this.selectedCliente.cpf)
        await useClientesStore().editCliente(this.selectedCliente)
        this.getClientes().then((res) => {
          this.clientes = res
        })

        editCliente.close()

        return 'Cliente editado com sucesso'
      } catch (error) {
        console.log(error)
        this.error = error
      }
    },

    async getClientes() {
      let res = await useClientesStore().getClientesFromDB(this.shown)
      return res
    },

    async getClientesByCpf() {
      // remover pontuacao e espaços do cpf
      this.cpfSearch = this.cpfSearch.replace(/\D/g, '')
      let res = await useClientesStore().getClienteByCPF(this.cpfSearch)
      return res
    },

    async deleteCliente(cliente) {
      try {
        await useClientesStore().deleteClientFromDB(cliente.id)
        this.getClientes().then((res) => {
          this.clientes = res
        })
        return 'Cliente deletado com sucesso'
      } catch (error) {
        console.log(error)
      }
    },

    async addClient() {
      if (this.clientName == '' || this.clientEmail == '' || this.clientCPF == '') {
        this.error = 'Preencha todos os campos'
        return
      }

      let date = Timestamp.now()
      this.clientDataCadastro = date

      try {
        let res = await useClientesStore().addClienteToDB({
          nome: this.clientName,
          email: this.clientEmail,
          cpf: this.clientCPF,
          dataCadastro: this.clientDataCadastro,
          telefone: this.clientTelefone
        })

        if (res == false) {
          this.error = 'CPF já cadastrado'
          return
        }

        this.getClientes().then((res) => {
          this.clientes = res
        })
        this.clientName = ''
        this.clientEmail = ''
        this.clientCPF = ''
        this.clientDataCadastro = ''
        this.clientTelefone = ''

        addCliente.close()

        return res
      } catch (error) {
        console.log(error)
        this.error = error
      }
    }
  },

  mounted() {
    this.getClientes().then((res) => {
      this.clientes = res
    })
  }
}
</script>

<style lang="scss">
.gray {
  background: #efefef;
}

.transition-custom {
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.modal-box {
  border-radius: 20px;
}

.btn-modal {
  width: 48%;
}

@media (max-width: 650px) {
  .modal-box {
    border-radius: 0;
  }
}

.row-header {
  border-radius: 30px 30px 0 0;
}

.tab-child:nth-child(odd) {
  background: #efefef;
}
.tab-child:hover {
  background-color: #00ad45;
  border-radius: 15px;

  p {
    color: white;
  }
}

.transition-custom {
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
