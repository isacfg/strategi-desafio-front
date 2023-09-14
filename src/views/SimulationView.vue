<template>
  <Navbar>
    <h1 class="text-black text-4xl font-bold mt-20 mb-8 px-4">Simulação de pagamento</h1>

    <div class="mx-auto flex gap-x-20 max-lg:flex-col">
      <div>
        <!-- search -->
        <div class="flex flex-wrap justify-between mb-4">
          <div class="form-control w-4/5 max-lg:w-full">
            <div class="input-group w-full">
              <input
                type="text"
                placeholder="Buscar Imóvel"
                class="busca input input-bordered w-full"
              />
            </div>
          </div>
          <button
            class="btn-busca btn bg-greenish text-white font-medium max-lg:w-full hover:bg-green-900"
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

        <div class="flex flex-col gap-y-4 max-lg:w-full">
          <img class="house-img rounded-2xl" src="../assets/login/login.jpg" alt="" srcset="" />
          <div class="flex items-center justify-between px-2">
            <p class="text-black text-xl font-medium">
              Praia Bella Casa quatro quatroquatro banh...
            </p>
            <div class="flex items-center gap-x-1">
              <img class="star" src="../assets/icons-cards/star-big.png" alt="" srcset="" />
              <p class="text-xl text-black">4.75</p>
            </div>
          </div>

          <!-- inputs -->
          <div class="px-2 flex flex-wrap items-center justify-between mt-4">
            <!-- VALOR IMOVEL -->
            <div class="w-1/3 max-lg:w-full">
              <label for="valor" class="block mb-2 text-sm font-medium text-gray-900 text-black"
                >Colocar outro valor</label
              >

              <div class="form-control w-full">
                <div class="input-group w-full">
                  <input
                    type="number"
                    id="valor"
                    placeholder="R$ 1.200.000,00"
                    class="base-input input input-bordered w-full max-lg:mb-2"
                  />
                </div>
              </div>
            </div>
            <!-- VALOR IMOVEL -->

            <div class="w-1/3 max-lg:w-full">
              <label for="parcelas" class="block mb-2 text-sm font-medium text-gray-900 text-black"
                >Quantidade de Parcelas</label
              >

              <div class="form-control w-full">
                <div class="input-group w-full">
                  <input
                    type="number"
                    id="parcelas"
                    placeholder="150"
                    class="base-input input input-bordered w-full max-lg:mb-2"
                    min="1"
                    max="180"
                  />
                </div>
              </div>
            </div>

            <!-- desconto -->
            <div class="w-1/5 max-lg:w-full">
              <label for="desconto" class="block mb-2 text-sm font-medium text-gray-900 text-black"
                >Desconto (%)</label
              >

              <div class="form-control w-full">
                <div class="input-group w-full">
                  <input
                    type="number"
                    id="desconto"
                    placeholder="0"
                    class="base-input input input-bordered w-full max-lg:mb-2"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </div>
            <button
              class="btn mt-8 w-1/3 max-lg:w-full bg-greenish rounded-lg text-white font-medium hover:bg-green-900 hover:scale-105"
            >
              Simular
            </button>
          </div>
        </div>
      </div>

      <div class="w-2/5 flex flex-col gap-y-2 max-lg:w-full max-lg:mt-12 max-lg:px-2">
        <h2 class="text-black text-2xl font-semibold mb-2">Detalhes</h2>
        <div class="flex items-center px-3 py-3 rounded-lg w-full justify-between bg-val">
          <p class="text-black">Valor total <span class="val-span">(R$)</span></p>
          <p class="text-black">R$ 1.200.000,00</p>
        </div>
        <div class="flex items-center px-3 py-3 rounded-lg w-full justify-between">
          <p class="text-black">Desconto aplicado <span class="val-span">(0%)</span></p>
          <p class="text-black">R$ 0</p>
        </div>
        <div class="flex items-center px-3 py-3 rounded-lg w-full justify-between">
          <p class="text-black">Comissão <span class="val-span">(5%)</span></p>
          <p class="text-black">R$ 1.200,00</p>
        </div>

        <!-- vif simulation is clicked -->
        <div class="bg-greenish p-8 rounded-3xl mt-8">
          <h2 class="text-white text-2xl mb-8 font-semibold">Pagamento Parcelado</h2>

          <!-- parcelas -->
          <div class="flex flex-col gap-y-2">
            <div class="flex items-center w-full justify-between">
              <p class="text-white text-lg"><span>150</span> vezes</p>
              <p class="text-white text-lg">R$ 1.200,00</p>
            </div>
            <div class="flex items-center w-full justify-between">
              <p class="text-white text-lg"><span>150</span> vezes</p>
              <p class="text-white text-lg">R$ 1.200,00</p>
            </div>
            <div class="flex items-center w-full justify-between">
              <p class="text-white text-lg"><span>150</span> vezes</p>
              <p class="text-white text-lg">R$ 1.200,00</p>
            </div>
            <div class="flex items-center w-full justify-between">
              <p class="text-white text-lg"><span>150</span> vezes</p>
              <p class="text-white text-lg">R$ 1.200,00</p>
            </div>
            <div class="flex items-center w-full justify-between">
              <p class="text-white text-lg"><span>150</span> vezes</p>
              <p class="text-white text-lg">R$ 1.200,00</p>
            </div>
            <div class="flex items-center w-full justify-between">
              <p class="text-white text-lg"><span>150</span> vezes</p>
              <p class="text-white text-lg">R$ 1.200,00</p>
            </div>
          </div>

          <button
            class="btn mt-8 w-full bg-white rounded-full text-black font-medium hover:bg-white hover:scale-105"
          >
            Prosseguir
          </button>
        </div>
      </div>
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
  },
  methods: {
    truncateTitle(title: string, maxLength: number): string {
      if (title.length > maxLength) {
        return title.slice(0, maxLength) + '...'
      } else {
        return title
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.house-img {
  width: 646px;
  height: 275px;
  object-fit: cover;
}

@media (max-width: 1024px) {
  .house-img {
    width: 100%;
    height: 275px;
  }
}

.base-input {
  border-radius: 8px !important;
}

.base-input:focus {
  outline: none !important;
}
.val-span {
  color: #777e90;
}

.bg-val {
  background: #f4f5f6;
}
.star {
  width: 20px;
  height: 20px;
}
</style>
