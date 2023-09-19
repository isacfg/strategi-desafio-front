<template>
  <Navbar>
    <div class="mt-20 mb-8">
      <h1 class="text-black text-4xl font-bold px-4">Gerenciar Vendas</h1>
      <p class="text-black px-4">Clique em uma venda para ver detalhes</p>
    </div>

    <!-- filtro + botao add -->
    <div class="flex justify-between px-4 max-lg:flex-col max-lg:gap-y-4">
      <div class="flex gap-x-4 max-lg:flex-col max-lg:gap-y-4">
        <!-- search -->
        <!-- <div class="form-control max-md:w-full">
          <div class="input-group max-md:w-full">
            <input
              type="text"
              placeholder="Buscar Pedido"
              class="busca input input-bordered max-md:w-full"
            />
          </div>
        </div> -->
        <!-- <select
          class="select select-bordered focus:outline-none sort-by w-full max-md:w-full rounded-lg"
        >
          <option disabled selected>Ordenar por:</option>
          <option>Data Crescente</option>
          <option>Data Decrescente</option>
        </select>
        <button
          class="btn-busca btn bg-greenish text-white font-medium max-md:w-full hover:bg-green-900"
        >
          Buscar
        </button> -->
      </div>
    </div>

    <div class="mt-12 mx-auto w-full px-4 flex flex-col table-col">
      <!-- row header -->
      <div class="flex items-center gray p-4 row-header justify-between max-md:p-2">
        <div class="w-1/4 text-black font-semibold">
          <!-- client name e cpf -->
          <p>Cliente</p>
        </div>
        <div class="w-1/4 text-black font-semibold">
          <!-- imovel name + id -->
          <p>Imóvel</p>
        </div>
        <div class="w-1/4 text-black font-semibold">
          <p>Data da venda</p>
        </div>
        <div class="w-1/4 text-black font-semibold">
          <p>Comissão</p>
        </div>
      </div>

      <!-- row body -->
      <div
        v-if="pedidos.length > 0"
        v-for="pedido in pedidos"
        :key="pedido.id"
        @click="selectPedido(pedido)"
        onclick="verMaisModal.showModal()"
        class="flex tab-child transition-custom items-center p-4 max-sm:gap-x-2 justify-between cursor-pointer"
      >
        <div class="flex items-center w-1/4 overflow-hidden text-black gap-x-2">
          <p class="max-sm:text-sm">{{ pedido.clienteName }}</p>
        </div>

        <div class="w-1/4 overflow-hidden text-black">
          <p class="max-sm:text-sm">{{ pedido.imovelName }}</p>
        </div>

        <div class="w-1/4 overflow-hidden text-black">
          <p class="max-sm:text-sm">{{ convertTimestampToDate(pedido.data) }}</p>
        </div>

        <div class="w-1/4 overflow-hidden text-black">
          <p class="max-sm:text-sm">{{ removeComissaoWord(pedido.comissao) }}</p>
        </div>
      </div>
    </div>

    <!-- modal ver detalhes -->
    <!-- Open the modal using ID.showModal() method -->
    <dialog v-if="pedidos.length > 0" id="verMaisModal" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box py-8 px-10">
        <h3 class="text-2xl font-bold text-black mb-4">Detalhes Venda</h3>

        <div class="py-4">
          <p class="">Nome do Cliente: {{ selectedPedido.clienteName }}</p>
          <p class="">Email do Cliente: {{ selectedPedido.clienteEmail }}</p>
          <p class="">Tel do Cliente: {{ selectedPedido.clientePhone }}</p>
        </div>

        <div class="py-4">
          <p class="">Nome do Imóvel: {{ selectedPedido.imovelName }}</p>
          <p class="">Endereço do Imóvel: {{ selectedPedido.imovelAddress }}</p>
          <p class="">Valor do Imóvel: {{ selectedPedido.valorFinal }}</p>
          <p class="">{{ selectedPedido.parcela }}x de {{ selectedPedido.valorParcela }}</p>
        </div>

        <div class="py-4">
          <!-- <p class="">Data da Venda: {{ convertTimestampToDate(selectedPedido.data) }}</p> -->
          <!-- <p class="">{{ selectedPedido.comissao }}</p> -->
        </div>

        <div class="py-4">
          <button @click="closeModal">Fechar Modal</button>
        </div>
      </div>
    </dialog>
  </Navbar>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import { usePedidoStore } from '../stores/pedido'
import { Timestamp } from 'firebase/firestore'

export default {
  name: 'OrderList',
  components: {
    Navbar
  },
  data() {
    return {
      pedidos: [],
      selectedPedido: {}
    }
  },
  methods: {
    async fetchPedidos() {
      const pedidoStore = usePedidoStore()
      let res = await pedidoStore.getVendas()
      this.pedidos = res
    },

    // convert timestamp do firebase to date
    convertTimestampToDate(timestamp: any) {
      return timestamp.toDate().toLocaleDateString()
    },

    closeModal() {
      verMaisModal.close()
    },

    // select pedido to show details
    selectPedido(pedido) {
      this.selectedPedido = pedido
    },

    // remove word "Comissão:" from string
    removeComissaoWord(comissao: string) {
      return comissao.replace('Comissão: ', '')
    }
  },
  mounted() {
    this.selectedPedido = {}
    this.fetchPedidos()
  }
}
</script>

<style lang="scss">
.gray {
  background: #efefef;
}

.row-header {
  border-radius: 30px 30px 0 0;
}

.tab-child:nth-child(odd) {
  background: #efefef;
}

.modal-box {
  border-radius: 20px;
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
