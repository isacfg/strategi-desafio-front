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
    <div class="flex items-center justify-between mt-12">
      <div class="form-control">
        <div class="input-group">
          <input type="text" placeholder="Search…" class="input input-bordered" />
          <button class="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <select class="select select-bordered w-full max-w-xs">
        <option disabled selected>Who shot first?</option>
        <option>Han Solo</option>
        <option>Greedo</option>
      </select>
    </div>

    <!-- array cards -->
    <div class="mt-12 custom-grid mx-auto w-full gap-12">
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

<style>
/* make responsive */
.custom-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6rem;
}
</style>
