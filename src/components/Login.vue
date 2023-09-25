<template>
  <!-- texts -->
  <div class="flex flex-col w-5/12 max-md:w-full items-start px-12 py-12">
    <!-- logo -->
    <img class="logo" src="../assets/logo.svg" alt="" srcset="" />

    <h1 class="text-blackish font-semibold font-poppins text-xl mt-12 mb-4">Bem-vindo de volta!</h1>

    <!-- email e senha -->
    <div v-if="!isLogged" class="w-full">
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Login</span>
        </label>
        <input
          v-model="email"
          type="email"
          placeholder="Digite o email"
          class="input w-full bg-lightgray"
        />
      </div>

      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Senha</span>
        </label>
        <input
          v-model="password"
          type="password"
          placeholder="Digite a senha"
          class="input w-full bg-lightgray"
        />
      </div>

      <button
        @click="login"
        class="btn mt-8 w-full bg-greenish rounded-lg text-white font-medium hover:bg-green-900 hover:scale-105"
      >
        Entrar
      </button>

      <p v-if="error" class="text-red-600">
        {{ error }}
      </p>
    </div>

    <!-- ja esta logado -->
    <div v-if="isLogged">
      <p class="text-green-600">Você já está logado!</p>
      <RouterLink
        to="/"
        class="btn mt-8 w-full bg-greenish rounded-lg text-white font-medium hover:bg-green-900 hover:scale-105"
      >
        DASHBOARD
      </RouterLink>

      <button
        @click="logout"
        class="btn mt-8 w-full bg-greenish rounded-lg text-white font-medium hover:bg-green-900 hover:scale-105"
      >
        SAIR
      </button>
    </div>

    <div class="mt-20">
      <p>LOGIN PARA A DEMO</p>
      <p>Email: strategi@email.com</p>
      <p>Senha: 123456</p>
    </div>
  </div>
</template>

<script lang="ts">
// import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { RouterLink } from 'vue-router'
import { useRouter } from 'vue-router'

export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
      error: '',
      isLogged: false
    }
  },
  methods: {
    async login() {
      // const auth = getAuth()
      // try {
      //   const user = await signInWithEmailAndPassword(auth, this.email, this.password)
      //   this.isLogged = true
      //   console.log(user)
      //   this.$router.push('/')
      // } catch (error) {
      //   this.error = error.message
      // }
    },

    async logout() {
      // const auth = getAuth()
      // try {
      //   await auth.signOut()
      //   this.isLogged = false
      //   this.$router.push('/login')
      // } catch (error) {
      //   console.log(error)
      // }
    }
  },

  mounted() {
    // const auth = getAuth()
    // auth.onAuthStateChanged((user) => {
    //   if (user) {
    //     this.isLogged = true
    //   } else {
    //     this.isLogged = false
    //   }
    // })
  }
}
</script>

<style scoped>
.logo {
  height: 30px;
}
</style>
