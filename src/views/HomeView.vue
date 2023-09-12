<template>
  <Navbar>
    <!-- category row -->
    <div class="flex flex-row items-center justify-center gap-x-24 flex-wrap mt-16 gap-y-12">
      <CategoriaSelect type="apartment" name="Apartamento" />
      <CategoriaSelect type="Castle" name="Castelo" />
      <CategoriaSelect type="Farm" name="Rural" />
      <CategoriaSelect type="Campervan" name="Trailers" />
      <CategoriaSelect type="Hotel" name="Hotel" />
      <CategoriaSelect type="House" name="Casa" />
      <CategoriaSelect type="Tent" name="Ar livre" />
      <CategoriaSelect type="Tiny home" name="Kitnet" />
    </div>

    <!-- filter and serach -->
    <div></div>

    <!-- array cards -->
    <div class="mt-24 flex flex-wrap mx-auto w-full gap-12 justify-center">
      <ImovelCard v-for="index in 9" :key="index" />
    </div>
  </Navbar>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import CategoriaSelect from '@/components/CategoriaSelect.vue'
import ImovelCard from '@/components/ImovelCard.vue'
export default {
  name: 'HomeView',
  components: {
    Navbar,
    CategoriaSelect,
    ImovelCard
  }
}
</script>
