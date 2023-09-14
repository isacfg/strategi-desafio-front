<template>
  <Navbar>
    <!-- category row -->
    <div
      class="mt-16 flex flex-row flex-wrap items-center justify-between gap-12 max-lg max-lg:gap-4 max-lg:justify-around"
    >
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
    <div
      class="mt-12 flex items-center justify-start gap-x-4 max-md:flex-col max-md:gap-y-4 max-md:w-full"
    >
      <!-- search -->
      <div class="form-control max-md:w-full">
        <div class="input-group max-md:w-full">
          <input
            type="text"
            placeholder="Buscar Imóvel"
            class="busca input input-bordered max-md:w-full"
          />
        </div>
      </div>
      <select
        class="select select-bordered focus:outline-none sort-by w-full max-md:w-full rounded-lg"
      >
        <option disabled selected>Ordenar por:</option>
        <option>Menor preço</option>
        <option>Maior preço</option>
      </select>

      <button
        class="btn-busca btn bg-greenish text-white font-medium max-md:w-full hover:bg-green-900"
      >
        <!-- <svg
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
        </svg> -->
        Buscar
      </button>
    </div>

    <!-- array cards -->
    <div class="custom-grid mx-auto mt-12 w-full gap-12">
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

<style lang="scss">
/* make responsive */
.custom-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 6rem;
}

@media (max-width: 1024px) {
  .custom-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .custom-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

.busca {
  border-radius: 8px !important;
}

.busca:focus {
  outline: none !important;
}

.btn-busca {
  border-radius: 8px !important;
  padding: 0.5rem 1rem;
}

.sort-by {
  max-width: 200px;
}

@media (max-width: 768px) {
  .sort-by {
    max-width: 100%;
  }
}
</style>
