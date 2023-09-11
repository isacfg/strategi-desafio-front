<template>
  <!-- texts -->
  <div class="flex flex-col w-5/12 max-md:w-full items-start px-12 py-12">
    <!-- logo -->
    <img class="logo" src="../assets/logo.svg" alt="" srcset="" />

    <h1 class="text-blackish font-semibold font-poppins text-xl mt-12 mb-4">Bem-vindo de volta!</h1>

    <!-- email e senha -->
    <div class="w-full">
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Login</span>
        </label>
        <input type="email" placeholder="Digite o email" class="input w-full bg-lightgray" />
      </div>

      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Senha</span>
        </label>
        <input type="password" placeholder="Digite a senha" class="input w-full bg-lightgray" />
      </div>

      <button
        class="btn mt-8 w-full bg-greenish rounded-lg text-white font-medium hover:bg-green-900 hover:scale-105"
      >
        Entrar
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Login'
}
</script>

<style scoped>
.logo {
  height: 30px;
}
</style>
