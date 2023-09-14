<template>
  <Navbar>
    <h1 class="text-black text-4xl font-bold mt-20 mb-8">Resumo do pedido</h1>

    <div class="mt-24 mx-auto w-full px-4">
      <div class="receipt">
        <div class="left flex flex-col">
          <div>
            <h2>Vendedor</h2>
            <p>Nome do vendedor</p>
            <p>Email do vendedor</p>
          </div>

          <div>
            <h2>Imóvel</h2>
            <p>ID: <span>#1233123</span></p>
            <p>Rua Praia Bella 123, Natal RN</p>
            <p>Valor de Venda: R$ <span>13.290.123</span></p>
            <p>Valor de Comissão: R$ <span>13.123</span></p>
          </div>

          <div>
            <h2>Forma de pagamento</h2>
            <p>À prazo</p>
            <p><span>180</span>x de R$ <span>3.123</span></p>
          </div>
        </div>
        <div class="right flex flex-col">
          <div>
            <h2>Cliente</h2>
            <p>Nome do cliente</p>
            <p>Email do cliente</p>
          </div>

          <div>
            <img src="../assets/placeholder-resumo.png" alt="" srcset="" />
          </div>

          <div>
            <a href="" class="btn">botao</a>
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

<style>
.receipt {
  border: 2px solid #f1f1f1;
}
</style>
