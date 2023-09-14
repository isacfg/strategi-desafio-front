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
              type="text"
              placeholder="Buscar Cliente"
              class="busca input input-bordered max-md:w-full"
            />
          </div>
        </div>
        <select
          class="select select-bordered focus:outline-none sort-by w-full max-md:w-full rounded-lg"
        >
          <option disabled selected>Ordenar por:</option>
          <option>Nome</option>
          <option>Data Crescente</option>
          <option>Data Decrescente</option>
        </select>
        <button
          class="btn-busca btn bg-greenish text-white font-medium max-md:w-full hover:bg-green-900"
        >
          Buscar
        </button>
      </div>
      <button
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
        v-for="index in 6"
        :key="index"
        class="flex tab-child transition-custom items-center p-4 max-sm:gap-x-2 cursor-pointer"
      >
        <div class="flex items-center w-1/3 overflow-hidden text-black gap-x-2">
          <img src="../assets/placeholder-imgs.png" alt="" srcset="" />
          <p class="max-sm:text-sm">Tony Stark</p>
        </div>

        <div class="w-1/3 overflow-hidden text-black">
          <p class="max-sm:text-sm">email@gmail.com</p>
        </div>

        <div class="w-1/3 overflow-hidden text-black">
          <p class="max-sm:text-sm">09/06/2003</p>
        </div>

        <div class="w-auto text-black">
          <img class="cursor-pointer" src="../assets/icons-cards/3dots.svg" alt="" srcset="" />
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
