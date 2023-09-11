<template>
  <div class="drawer">
    <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <!-- Navbar -->
      <div class="w-full navbar bg-white">
        <div class="flex-none lg:hidden">
          <label for="my-drawer-3" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block w-6 h-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">
          <RouterLink to="/">
            <img class="logo" src="../assets/logo.svg" alt="" srcset="" />
          </RouterLink>
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal">
            <!-- Navbar menu content here -->
            <li>
              <RouterLink
                class="font-poppins menu-item-p text-lg text-black font-semibold capitalize hover:text-greenish hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent focus:text-greenish active:text-greenish"
                to="/"
                >Imóveis</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="font-poppins menu-item-p text-lg text-black font-semibold capitalize hover:text-greenish hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent focus:text-greenish active:text-greenish"
                to="/"
                >Simulação</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="font-poppins menu-item-p text-lg text-black font-semibold capitalize hover:text-greenish hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent focus:text-greenish active:text-greenish"
                to="/"
                >Clientes</RouterLink
              >
            </li>
            <li>
              <RouterLink
                class="font-poppins menu-item-p text-lg text-black font-semibold capitalize hover:text-greenish hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent focus:text-greenish active:text-greenish"
                to="/"
                >Vendas</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
      <!-- Page content here -->
      <div class="mx-auto container">
        <slot> </slot>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-3" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 min-h-full bg-greenish">
        <!-- Sidebar content here -->
        <li>
          <RouterLink
            class="font-poppins text-lg text-white font-semibold capitalize hover:text-white hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent menu-item-p focus:text-white active:text-white"
            to="/"
            >Imóveis</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="font-poppins text-lg text-white font-semibold capitalize hover:text-white hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent menu-item-p focus:text-white active:text-white"
            to="/"
            >Simulação</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="font-poppins text-lg text-white font-semibold capitalize hover:text-white hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent menu-item-p focus:text-white active:text-white"
            to="/"
            >Clientes</RouterLink
          >
        </li>
        <li>
          <RouterLink
            class="font-poppins text-lg text-white font-semibold capitalize hover:text-white hover:border-none hover:bg-transparent focus:bg-transparent active:bg-transparent menu-item-p focus:text-white active:text-white"
            to="/"
            >Vendas</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  name: 'Navbar',
  components: {
    RouterLink
  }
}
</script>

<style scoped>
.logo {
  height: 30px;
}

.menu-item-p:active {
  color: #00ad45;
  background-color: transparent;
  border: none;
  outline: none;
}

.menu-item-p:focus {
  color: #00ad45 !important;
  background-color: transparent !important;
  border: none !important;
  outline: none !important;
}

.menu-item-p:hover {
  color: #00ad45;
  background-color: transparent;
  border: none;
  outline: none;
}
</style>
