<template>
  <Navbar>
    <h1 class="text-black text-4xl font-bold mt-20 mb-8">Simulação de pagamento</h1>

    <div class="mx-auto flex gap-x-20">
      <div>
        <!-- filter -->
        <div></div>

        <div class="flex flex-col gap-y-4">
          <img class="house-img rounded-2xl" src="../assets/login/login.jpg" alt="" srcset="" />
          <div class="flex items-center justify-between px-2">
            <p class="text-black text-xl">Praia Bella Casa quatro quatroquatro banh...</p>
            <div class="flex items-center gap-x-1">
              <img class="star" src="../assets/icons-cards/star-big.png" alt="" srcset="" />
              <p class="text-xl text-black">4.75</p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-2/5 flex flex-col gap-y-2">
        <h2 class="text-black text-2xl font-semibold mb-2">Detalhes</h2>
        <div class="flex items-center px-3 py-3 rounded-lg w-full justify-between bg-val">
          <p class="text-black">Valor total <span class="val-span">(R$)</span></p>
          <p class="text-black">R$ 1.200.000,00</p>
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
