<template>
  <Navbar>
    <h1 class="text-black text-4xl font-bold mt-20 mb-8 px-4">Resumo do pedido</h1>

    <div class="mt-12 mx-auto w-full px-4">
      <div class="receipt w-8/12 p-12 mx-auto flex flex-col gap-y-12">
        <div class="bottom-row flex flex-row gap-x-12 w-full">
          <div>
            <h2 class="text-xl font-semibold mb-2">Vendedor</h2>
            <p>{{ transformEmailToName(email) }}</p>
            <p>{{ email }}</p>
          </div>

          <div>
            <h2 class="text-xl font-semibold mb-2">Cliente</h2>
            <p>{{ pedido.clienteName }}</p>
            <p>{{ pedido.clienteEmail }}</p>
          </div>
        </div>

        <div class="bottom-row flex flex-row gap-x-12 w-full">
          <div>
            <h2 class="text-xl font-semibold mb-2">Imóvel</h2>
            <p>
              ID: <span>{{ pedido.imovelID }}</span>
            </p>
            <p>{{ pedido.imovelName }}</p>
            <p>{{ pedido.imovelAdress }}</p>
            <p>
              Valor de Venda: <span>{{ formatPrice(pedido.valorFinal) }}</span>
            </p>
            <p>
              <span>{{ pedido.comissao }}</span>
            </p>
          </div>

          <div>
            <img
              class="rounded-lg w-full object-cover"
              :src="`/imoveis/${pedido.imovelID}.jpg`"
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div class="bottom-row flex flex-row gap-x-12 w-full">
          <div>
            <h2 class="text-xl font-semibold mb-2">Forma de pagamento</h2>
            <p v-if="pedido.parcela > 1">À prazo</p>
            <p v-if="pedido.parcela == 1">À vista</p>
            <p>
              <span>{{ pedido.parcela }}</span
              >x de <span>{{ pedido.valorParcela }}</span>
            </p>
          </div>

          <div>
            <button
              class="btn w-full bg-greenish rounded-lg text-white font-medium hover:bg-green-900 hover:scale-105"
            >
              Finalizar Venda
            </button>
          </div>
        </div>
      </div>
    </div>
  </Navbar>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import { usePedidoStore } from '@/stores/pedido'
import { getAuth } from 'firebase/auth'

export default {
  name: 'OrderSumary',
  components: {
    Navbar
  },
  data() {
    return {
      pedido: {
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
        clientePhone: 'clientePhone'
      },
      email: ''
    }
  },
  methods: {
    async fetchPedido() {
      const pedido = await usePedidoStore().getLocalVenda()
      this.pedido = pedido
      console.log(this.pedido)
    },
    formatPrice(price) {
      return price.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })
    },

    getUserEmail() {
      const auth = getAuth()
      const user = auth.currentUser
      if (user) {
        this.email = user.email
        return user.email
      }
    },

    transformEmailToName(email) {
      const name = email.split('@')[0]
      return name
    }
  },
  mounted() {
    this.fetchPedido()
    this.getUserEmail()
  }
}
</script>

<style lang="scss">
.receipt {
  border: 2px solid #e0e7eb;
  border-radius: 15px;
}

.bottom-row {
  div {
    width: 50%;
  }
}
</style>
