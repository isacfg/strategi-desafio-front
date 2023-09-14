<template>
  <Navbar>
    <h1 class="text-black text-4xl font-bold mt-20 mb-8">Gerenciar Clientes</h1>

    <!-- filtro + botao add -->
    <div></div>

    <div class="mt-24 mx-auto w-full px-4 flex flex-col table-col">
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
      <div v-for="index in 6" :key="index" class="flex tab-child items-center p-4">
        <div class="flex items-center w-1/3 text-black gap-x-2">
          <img src="../assets/placeholder-imgs.png" alt="" srcset="" />
          <p>Tony Stark</p>
        </div>

        <div class="w-1/3 text-black">
          <p>email@gmail.com</p>
        </div>

        <div class="w-1/3 text-black">
          <p>09/06/2003</p>
        </div>

        <div class="w-auto text-black">
          <img class="cursor-pointer" src="../assets/icons-cards/3 dots.svg" alt="" srcset="" />
        </div>
      </div>
    </div>
  </Navbar>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'
export default {
  name: 'ClienteView',
  components: {
    Navbar
  }
}
</script>

<style>
.gray {
  background: #efefef;
}

.row-header {
  border-radius: 30px 30px 0 0;
}

.tab-child:nth-child(odd) {
  background: #efefef;
}
</style>
