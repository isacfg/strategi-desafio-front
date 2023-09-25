<template>
  <Navbar>
    <!-- category row -->
    <div
      class="mt-16 flex flex-row flex-wrap items-center justify-between gap-12 max-lg max-lg:gap-4 max-lg:justify-around"
    >
      <CategoriaSelect
        type="apartment"
        name="Apartamento"
        @categoria-select=""
      />
      <CategoriaSelect type="Castle" name="Castelo" @categoria-select="" />
      <CategoriaSelect type="Farm" name="Rural" @categoria-select="" />
      <CategoriaSelect type="Campervan" name="Trailers" @categoria-select="" />
      <CategoriaSelect type="Hotel" name="Hotel" @categoria-select="" />
      <CategoriaSelect type="House" name="Casa" @categoria-select="" />
      <CategoriaSelect type="Tent" name="Ar livre" @categoria-select="" />
      <CategoriaSelect type="Tiny home" name="Kitnet" @categoria-select="" />
    </div>

    <!-- filter and serach -->
    <div
      class="mt-12 flex items-center justify-start gap-x-4 max-md:flex-col max-md:gap-y-4 max-md:w-full"
    >
      <!-- search -->
      <div class="form-control max-md:w-full">
        <div class="input-group max-md:w-full">
          <input
            v-model="search"
            type="text"
            placeholder="Buscar Imóvel"
            class="busca input input-bordered max-md:w-full"
          />
        </div>
      </div>
      <select
        v-model="priceOrder"
        class="select select-bordered focus:outline-none sort-by w-full max-md:w-full rounded-lg"
      >
        <option value="null" disabled selected>Ordenar por:</option>
        <option value="asc">Menor preço</option>
        <option value="desc">Maior preço</option>
      </select>

      <button
        @click=""
        class="btn-busca btn bg-greenish text-white font-medium max-md:w-full hover:bg-green-900"
      >
        Buscar
      </button>
    </div>

    <div v-if="loading == true" class="h-screen flex items-center justify-center">
      <span class="loading loading-spinner loading-lg text-success -mt-24"></span>
    </div>
    <!-- array cards -->
    <div v-if="loading == false" class="custom-grid mx-auto mt-12 w-full gap-12">
      <ImovelCard v-for="imovel in imoveis" :key="imovel.id" :imovel="imovel" />
    </div>

    <!-- ver mais imoveis -->
    <div class="flex items-center justify-center mt-12">
      <button @click="" class="btn rounded-lg bg-greenish text-white hover:bg-emerald-700">
        Ver mais imóveis
      </button>
    </div>
  </Navbar>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import CategoriaSelect from '@/components/CategoriaSelect.vue'
import ImovelCard from '@/components/ImovelCard.vue'

// import { useImoveisStore } from '@/stores/imoveis'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    CategoriaSelect,
    ImovelCard
  },
  data() {
    return {
      imoveis: [],
      shown: 9,
      priceOrder: null,
      search: null,
      loading: true
    }
  },

  // methods: {
  //   verMais() {
  //     this.shown += 9
  //     this.getImoveis().then((res) => {
  //       this.imoveis = res
  //     })
  //   },
  //   handleCategoriaSelect(category: string) {
  //     console.log(`Categoria selecionada: ${category}`)
  //     this.getImoveisByCategory(category).then((res) => {
  //       this.imoveis = res
  //     })
  //   },

  //   // gerenciador de busca (quando aperta o botao)
  //   handleSearch() {
  //     console.log('price order' + this.priceOrder)
  //     console.log('search' + this.search)
  //     this.shown = 9
  //     if (this.search === '' && this.priceOrder === '') {
  //       console.log('campos vazios')
  //       this.getImoveis().then((res) => {
  //         this.imoveis = res
  //       })
  //     } else if (this.search !== '' && this.priceOrder === '') {
  //       console.log('buscar por nome')
  //       this.getImoveisBySearch(this.search).then((res) => {
  //         this.imoveis = res
  //       })
  //     } else if (this.search === '' && this.priceOrder !== '') {
  //       console.log('ordenar por preço')
  //       this.sortImoveisByPrice(this.priceOrder).then((res) => {
  //         this.imoveis = res
  //       })
  //     } else if (this.search !== '' && this.priceOrder !== '') {
  //       console.log('buscar por nome e ordenar por preço')
  //       this.getImoveisBySearchAndPrice(this.search, this.priceOrder).then((res) => {
  //         this.imoveis = res
  //       })
  //     }

  //     this.search = ''
  //     this.priceOrder = ''
  //   },

  //   async getImoveis() {
  //     let c = await useImoveisStore().getImoveisFromDB(this.shown)
  //     return c
  //   },
  //   async getImoveisByCategory(category: string) {
  //     let c = await useImoveisStore().getImoveisByCategory(category)
  //     return c
  //   },
  //   async sortImoveisByPrice(order: string) {
  //     let c = await useImoveisStore().sortImoveisByPrice(order)
  //     return c
  //   },
  //   async getImoveisBySearch(search: string) {
  //     let c = await useImoveisStore().getImoveisByName(search)
  //     return c
  //   },
  //   async getImoveisBySearchAndPrice(search: string, order: string) {
  //     let c = await useImoveisStore().getImoveisByName(search)
  //     return c
  //   }
  // },

  mounted() {
    // this.getImoveis().then((res) => {
    //   this.imoveis = res
    //   console.log(this.imoveis)
    //   this.loading = false
    // })
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
