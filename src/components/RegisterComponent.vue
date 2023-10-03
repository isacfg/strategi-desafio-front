<script setup lang="ts">
import { inject, ref } from 'vue';
import { pocketBaseSymbol } from "@/symbols/injectionSymbols";
import { useUserStore } from '@/stores/user';
import {RouterLink, useRouter} from 'vue-router';

// Inject the PocketBase client
const $pb = inject(pocketBaseSymbol);

// Init the store
const userStore = useUserStore();

// Router composable
const router = useRouter();

// Reactive variables
const email = ref("");
const username = ref("");
const password = ref("");
const passwordConfirm = ref("");
let error = ref(null);

// Function to create a new user
const createUser = async () => {
    try {
        if (validateInput()) {
            // Create new user
            const user = await $pb?.collection("users").create({
                username: username.value,
                email: email.value,
                password: password.value,
                passwordConfirm: passwordConfirm.value,
            });
            if (user) {
                // Authenticate the user in order to set the username
                await authUser();

                // After succesfull user registration, redirect to dashboard
                router.push({ path: "/" });
            } else {
                error.value = "Erro desconhecido"; // You can customize this based on your error handling

            }
        } else {
            alert("Senhas não são iguais")
        }
    } catch (err) {
        console.log(error)
        error.value = err.message; // You can customize this based on your error handling

    }
};

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
    } catch (error) {
        console.log(error)
    }
}

// Simple utility function to validate input. Easiliy extendable with additional checks if needed
const validateInput = () => {
    if (password.value !== passwordConfirm.value) {
        return false;
    } else {
        return true;
    }
};

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
<!--    <h2 class="text-2xl font-bold">Register</h2>-->
<!--    <form @submit.prevent="createUser">-->
<!--        <div class="grid grid-cols-1 gap-6">-->
<!--            <label class="block">-->
<!--                <span>Username</span>-->
<!--                <input type="text" class="mt-1 block w-full" v-model="username">-->
<!--            </label>-->
<!--            <label class="block">-->
<!--                <span>Email</span>-->
<!--                <input type="email" class="mt-1 block w-full" v-model="email">-->
<!--            </label>-->
<!--            <label class="block">-->
<!--                <span>Password</span>-->
<!--                <input type="password" class="mt-1 block w-full" v-model="password">-->
<!--            </label>-->
<!--            <label class="block">-->
<!--                <span>Repeat Password</span>-->
<!--                <input type="password" class="mt-1 block w-full" v-model="passwordConfirm">-->
<!--            </label>-->
<!--        </div>-->
<!--        <button type="submit"-->
<!--            class="mt-4 text-white desktop-xl:text-2xl bg-black px-4 py-2 border-2 rounded border-black hover:bg-white dark:hover:bg-main-dark-bg hover:text-black">Sign-->
<!--            Up</button>-->
<!--    </form>-->


  <div class="flex flex-col w-5/12 max-md:w-full items-start px-12 py-12">
    <img class="logo" src="../assets/logo.svg" alt="" srcset="" />

    <h1 class="text-blackish font-semibold font-poppins text-xl mt-12 mb-4">Faça seu cadastro!</h1>

    <div v-if="!userStore.userID" class="w-full">
      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <input
            v-model="username"
            type="text"
            placeholder="Digite o username"
            class="input w-full bg-lightgray"
        />
      </div>

      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Email</span>
        </label>
          <input
              v-model="email"
              type="email"
              placeholder="Digite o seu melhor email"
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
            placeholder="Digite uma senha forte"
            class="input w-full bg-lightgray"
        />
      </div>

      <div class="form-control w-full">
        <label class="label">
          <span class="label-text">Confirme sua senha</span>
        </label>
        <input
            v-model="passwordConfirm"
            type="password"
            placeholder="Digite a mesma senha"
            class="input w-full bg-lightgray"
        />
      </div>

      <button
          @click="createUser"
          class="btn mt-8 w-full bg-greenish rounded-lg text-white font-medium hover:bg-green-900 hover:scale-105"
      >
        Cadastrar
      </button>

      <!--      não tem uma conta?-->

      <p class="mt-8 text-blackish font-semibold font-poppins text-sm">
        Já tem uma conta?
        <RouterLink to="/login" class="text-greenish font-semibold">
          Faça login
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
        HOME
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
