<script setup lang="ts">
import { useUserStore } from '@/stores/user';
import { pocketBaseSymbol } from '@/symbols/injectionSymbols';
import { inject, ref } from 'vue';
import { useRouter, RouterLink } from 'vue-router';

// Inject the PocketBase client
const $pb = inject(pocketBaseSymbol);

// Init the store
const userStore = useUserStore();

// Router composable
const router = useRouter();

// Local reactive variables
const email = ref("");
const password = ref("");
let error = ref(null);


// Function to authenticate the user based on email and password
const authUser = async () => {
    try {
        // Authenticate the user via email and password
        const userData = await $pb?.collection("users").authWithPassword(email.value, password.value);

        if (userData) {
            userStore.userID = userData.record.id;
            userStore.username = userData.record.profile?.username;
            userStore.userProfileID = userData.record.profile?.id!;
            router.push({ path: "/" })
        }
    } catch (err) {
      error.value = err.message; // You can customize this based on your error handling
      console.error(err);
    }
}

const logout = () => {
  // Manual reset because Pinia using the composition API does not support the $reset function
  userStore.clear();
  // Remove the PocketBase token
  $pb?.authStore.clear();
  // Redirect to the login page
  router.push({ path: "/login" });
}

</script>

<template>
  <div class="flex flex-col w-5/12 max-md:w-full items-start px-12 py-12">
    <img class="logo" src="../assets/logo.svg" alt="" srcset="" />

    <h1 class="text-blackish font-semibold font-poppins text-xl mt-12 mb-4">Bem-vindo de volta!</h1>

    <!-- email e senha -->
    <div v-if="!userStore.userID" class="w-full">
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
          @click="authUser"
          class="btn mt-8 w-full bg-greenish rounded-lg text-white font-medium hover:bg-green-900 hover:scale-105"
      >
        Entrar
      </button>

<!--      não tem uma conta?-->

      <p class="mt-8 text-blackish font-semibold font-poppins text-sm">
        Não tem uma conta?
        <RouterLink to="/register" class="text-greenish font-semibold">
          Cadastre-se
        </RouterLink>
      </p>


      <p v-if="error" class="text-red-600">
        {{ error }}
      </p>

    </div>


    <div v-else-if="userStore.userID">
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


  </div>


</template>
