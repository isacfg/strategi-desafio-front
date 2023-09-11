<template>
  <div class="flex w-screen h-screen max-md:flex-col">
    <Login />

    <div class="h-full w-full max-md:hidden">
      <img class="w-full h-full object-cover" src="../assets/login/login.jpg" alt="" srcset="" />
    </div>
  </div>
</template>

<script lang="ts">
import Login from '@/components/Login.vue'

export default {
  name: 'LoginView',
  components: {
    Login
  }
}
</script>

<style scoped></style>
