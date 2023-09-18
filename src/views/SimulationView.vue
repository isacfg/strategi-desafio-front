<template>
  <Navbar>
    <h1 class="text-black text-4xl font-bold mt-20 mb-8">Simulação de pagamento</h1>

    <div class="mx-auto flex gap-x-20 max-lg:flex-col">
      <div>
        <!-- search -->
        <!-- <div class="flex flex-wrap justify-between mb-4">
          <div class="form-control w-4/5 max-lg:w-full">
            <div class="input-group w-full">
              <input
                type="text"
                placeholder="Buscar Imóvel"
                class="busca input input-bordered w-full mb-4"
              />
            </div>
          </div>
          <button
            class="btn-busca btn bg-greenish text-white font-medium max-lg:w-full hover:bg-green-900"
          >
         
            Buscar
          </button>
        </div> -->

        <div class="flex flex-col gap-y-4 max-lg:w-full">
          <img class="house-img rounded-2xl" :src="`/imoveis/${imovel.id}.jpg`" alt="" srcset="" />
          <div class="flex items-center justify-between px-2">
            <div>
              <p class="text-black text-xl font-medium">
                {{ truncateTitle(imovel.nome, 40) }}
              </p>
              <p class="val-span font-medium">
                {{ imovel.adress }}
              </p>
            </div>
            <div class="flex items-center gap-x-1">
              <img class="star" src="../assets/icons-cards/star-big.png" alt="" srcset="" />
              <p class="text-xl text-black">{{ imovel.rating }}</p>
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
                    v-model="novoValor"
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
                    v-model.number="parcelas"
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
                    v-model.number="desconto"
                    placeholder="0"
                    class="base-input input input-bordered w-full max-lg:mb-2"
                    min="0"
                    max="100"
                  />
                </div>
              </div>
            </div>

            <div class="w-full block">
              <button
                @click.prevent="simularPedido"
                class="btn mt-8 w-1/3 max-lg:w-full bg-greenish rounded-lg text-white font-medium hover:bg-green-900 hover:scale-105"
              >
                Simular
              </button>
              <p class="text-red-500 text-sm">{{ error }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-2/5 flex flex-col gap-y-2 max-lg:w-full max-lg:mt-12 max-lg:px-2">
        <h2 class="text-black text-2xl font-semibold mb-2">Detalhes</h2>
        <div class="flex items-center px-3 py-3 rounded-lg w-full justify-between bg-val">
          <p class="text-black">Valor original <span class="val-span">(R$)</span></p>
          <p class="text-black">{{ formatPrice(novoValor) }}</p>
        </div>
        <div class="flex items-center px-3 py-3 rounded-lg w-full justify-between">
          <p class="text-black">
            Desconto aplicado
            <span class="val-span">({{ desconto == null ? 0 : desconto }}%)</span>
          </p>
          <p class="text-black">{{ calculateDesconto(novoValor, desconto) }}</p>
        </div>
        <div
          v-if="desconto != null && desconto != 0"
          class="flex items-center px-3 py-3 rounded-lg w-full justify-between"
        >
          <p class="text-black">
            Valor após desconto
            <span class="val-span">(R$)</span>
          </p>
          <p class="text-black">{{ formatPrice(novoValor - (novoValor * desconto) / 100) }}</p>
        </div>
        <div class="flex items-center px-3 py-3 rounded-lg w-full justify-between">
          <p class="text-black">Comissão <span class="val-span">(5%)</span></p>
          <p class="text-black">
            {{ formatPrice((novoValor - (novoValor * desconto) / 100) * 0.05) }}
          </p>
        </div>

        <div v-if="isCalc" class="bg-greenish p-8 rounded-3xl mt-8">
          <h2 class="text-white text-2xl mb-8 font-semibold">Pagamento Parcelado</h2>

          <!-- parcelas -->
          <div class="flex flex-col gap-y-2">
            <div v-if="parcelas > 4" class="flex items-center w-full justify-between">
              <p class="text-white text-lg">
                <span>{{ parcelas - 3 }}</span> vezes
              </p>
              <p class="text-white text-lg">
                {{ calculateParcelas(novoValor, desconto, parcelas - 3) }}
              </p>
            </div>
            <div v-if="parcelas > 4" class="flex items-center w-full justify-between">
              <p class="text-white text-lg">
                <span>{{ parcelas - 2 }}</span> vezes
              </p>
              <p class="text-white text-lg">
                {{ calculateParcelas(novoValor, desconto, parcelas - 2) }}
              </p>
            </div>
            <div v-if="parcelas > 4" class="flex items-center w-full justify-between">
              <p class="text-white text-lg">
                <span>{{ parcelas - 1 }}</span> vezes
              </p>
              <p class="text-white text-lg">
                {{ calculateParcelas(novoValor, desconto, parcelas - 1) }}
              </p>
            </div>
            <div class="flex items-center w-full justify-between">
              <p class="text-white text-lg">
                <span>{{ parcelas }}</span> vezes
              </p>
              <p class="text-white text-lg">
                {{ calculateParcelas(novoValor, desconto, parcelas) }}
              </p>
            </div>
            <div v-if="parcelas < 180" class="flex items-center w-full justify-between">
              <p class="text-white text-lg">
                <span>{{ parcelas + 1 }}</span> vezes
              </p>
              <p class="text-white text-lg">
                {{ calculateParcelas(novoValor, desconto, parcelas + 1) }}
              </p>
            </div>
            <div v-if="parcelas < 180" class="flex items-center w-full justify-between">
              <p class="text-white text-lg">
                <span>{{ parcelas + 2 }}</span> vezes
              </p>
              <p class="text-white text-lg">
                {{ calculateParcelas(novoValor, desconto, parcelas + 2) }}
              </p>
            </div>
            <div v-if="parcelas < 180" class="flex items-center w-full justify-between">
              <p class="text-white text-lg">
                <span>{{ parcelas + 3 }}</span> vezes
              </p>
              <p class="text-white text-lg">
                {{ calculateParcelas(novoValor, desconto, parcelas + 3) }}
              </p>
            </div>
          </div>

          <RouterLink
            @click="simularPedido"
            to="/select-client"
            class="btn mt-8 w-full bg-white rounded-full text-black font-medium hover:bg-white hover:scale-105"
          >
            Prosseguir
          </RouterLink>
        </div>
      </div>
    </div>
  </Navbar>
</template>

<script lang="ts">
import Navbar from '@/components/Navbar.vue'
import CategoriaSelect from '@/components/CategoriaSelect.vue'
import ImovelCard from '@/components/ImovelCard.vue'
import { useImoveisStore } from '@/stores/imoveis'
import { usePedidoStore } from '@/stores/pedido'

import { Timestamp } from 'firebase/firestore'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    CategoriaSelect,
    ImovelCard
  },
  data() {
    return {
      imovel: {
        id: 1,
        categoria: 'Castelo',
        nome: 'Castelo de Hogwarts',
        adress: 'Hogwarts 1920, Escócia',
        quartos: 7,
        banheiros: 4,
        garagem: 2,
        preco: 1000000,
        rating: 4.5,
        img: '/imoveis/1.jpg'
      },
      isCalc: false,
      desconto: null,
      parcelas: null,
      comissao: 0,
      novoValor: 0,
      error: ''
    }
  },
  watch: {
    desconto(value) {
      this.desconto = Math.min(Math.max(value, 0), 100)
    },
    parcelas(value) {
      this.parcelas = Math.min(Math.max(value, 1), 180)
    }
  },
  methods: {
    truncateTitle(title: string, maxLength: number): string {
      if (title.length > maxLength) {
        return title.slice(0, maxLength) + '...'
      } else {
        return title
      }
    },
    async getImovel(idp) {
      let res = await useImoveisStore().getImovelById(idp)
      return res
    },

    formatPrice(price: number): string {
      return price.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
      })
    },

    calculateDesconto(price: number, desconto: number): string {
      return `${this.formatPrice(price * (desconto / 100))}`
    },

    calculateParcelas(price: number, desconto: number, parcelas: number): string {
      if (desconto == null) desconto = 0
      const precoComDesconto = price - price * (desconto / 100)
      return `${this.formatPrice(precoComDesconto / parcelas)}`
    },

    calculateComissao(price: number, desconto: number): string {
      if (desconto == null) desconto = 0
      const precoComDesconto = price - price * (desconto / 100)
      return `Comissão: ${this.formatPrice(precoComDesconto * 0.05)}`
    },

    simularPedido() {
      if (this.parcelas > 0) {
        this.isCalc = true
        this.error = ''

        usePedidoStore().setLocalVenda(
          this.imovel.id,
          this.imovel.nome,
          this.imovel.adress,
          this.novoValor,
          this.calculateComissao(this.novoValor, this.desconto),
          this.parcelas,
          this.calculateParcelas(this.novoValor, this.desconto, this.parcelas),
          Timestamp.now()
        )
      } else {
        this.error = 'Insira um valor para parcelas'
      }
    }
  },

  mounted() {
    // get rout params id and put in imovel.id
    this.imovel.id = this.$route.params.id

    // let r = this.getImovel(this.$route.params.id)
    this.getImovel(Number(this.$route.params.id)).then((res) => {
      this.imovel = res
      this.novoValor = this.imovel.preco
    })
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
