<script setup lang="ts">
import RegisterComponent from "@/components/RegisterComponent.vue";


</script>

<template>
  <div class="flex w-screen h-screen max-md:flex-col">
    <RegisterComponent />

    <div class="h-full w-full max-md:hidden">
      <img class="w-full h-full object-cover" src="../assets/login/login.jpg" alt="" srcset="" />
    </div>
  </div>
</template>
