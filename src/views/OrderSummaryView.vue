<template>
  <Navbar>
    <h1 class="text-black text-4xl font-bold mt-20 mb-8 px-4">Resumo do pedido</h1>

    <div class="mt-12 mx-auto w-full px-4">
      <div class="receipt w-8/12 p-12 mx-auto flex flex-col gap-y-12">
        <div class="bottom-row flex flex-row gap-x-12 w-full">
          <div>
            <h2 class="text-xl font-semibold mb-2">Vendedor</h2>
            <p>Nome do vendedor</p>
            <p>Email do vendedor</p>
          </div>

          <div>
            <h2 class="text-xl font-semibold mb-2">Cliente</h2>
            <p>Nome do cliente</p>
            <p>Email do cliente</p>
          </div>
        </div>

        <div class="bottom-row flex flex-row gap-x-12 w-full">
          <div>
            <h2 class="text-xl font-semibold mb-2">Imóvel</h2>
            <p>ID: <span>#1233123</span></p>
            <p>Rua Praia Bella 123, Natal RN</p>
            <p>Valor de Venda: R$ <span>13.290.123</span></p>
            <p>Valor de Comissão: R$ <span>13.123</span></p>
          </div>

          <div>
            <img
              class="rounded-lg w-full object-cover"
              src="../assets/placeholder-resumo.png"
              alt=""
              srcset=""
            />
          </div>
        </div>

        <div class="bottom-row flex flex-row gap-x-12 w-full">
          <div>
            <h2 class="text-xl font-semibold mb-2">Forma de pagamento</h2>
            <p>À prazo</p>
            <p><span>180</span>x de R$ <span>3.123</span></p>
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
export default {
  name: 'OrderSumary',
  components: {
    Navbar
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
