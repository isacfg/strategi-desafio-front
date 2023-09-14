<template>
  <div class="card card-w card-compact bg-white">
    <figure class="">
      <!-- <img
        class="card-img rounded-2xl "
        :src="hovering ? '../assets/login/login2.jpg' : '../assets/login/login.jpg'"
        @mouseover="hovering = true"
        @mouseout="hovering = false"
      /> -->
      <img class="card-img rounded-2xl" src="../assets/login/login.jpg" alt="" srcset="" />
    </figure>
    <div class="card-body cursor-pointer">
      <div class="badge badge-ghost p-3 rounded-full">Castelo</div>
      <div class="flex items-center justify-between">
        <h2 class="card-title mb-0 truncate-p text-base font-semibold text-black">
          {{ truncateTitle(cardTitle, 25) }}
        </h2>
        <div class="rating-p flex items-center pl-4">
          <img class="star" src="../assets/icons-cards/star.png" alt="" />
          <p class="font-poppins text-sm font-medium text-black">4.73</p>
        </div>
      </div>

      <p class="text-sm sub-card">{{ truncateTitle(cardAdress, 35) }}</p>

      <div class="bottom-card flex items-center mt-4 justify-between">
        <div class="badge py-4 p-3 rounded-full items-center flex gap-x-4">
          <div class="flex gap-x-2 items-center">
            <img class="icon-card" src="../assets/icons-cards/bed.png" alt="" srcset="" />
            <p>1</p>
          </div>
          <div class="flex gap-x-2 items-center">
            <img class="icon-card" src="../assets/icons-cards/bath.png" alt="" srcset="" />
            <p>1</p>
          </div>
          <div class="flex gap-x-2 items-center">
            <img class="icon-card-car" src="../assets/icons-cards/car.png" alt="" srcset="" />
            <p>1</p>
          </div>
        </div>
        <div class="price-right">
          <p class="font-poppins text-base font-semibold text-black text-end">R$ 1.200.000,00</p>
          <!-- comissao -->
          <p class="font-poppins text-sm font-medium dark-grey text-end">Comissão - R$ 1.200,00</p>
        </div>
      </div>

      <div class="card-actions">
        <button
          class="btn btn-primary btn-block mt-4 bg-greenish rounded-lg text-white border-greenish font-medium hover:bg-green-900 hover:border-green-900 hover:scale-105"
        >
          Simular
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ImovelCard',
  props: {
    cardTitle: {
      type: String,
      default: 'Praia Bella Casa quatro banh'
    },
    cardAdress: {
      type: String,
      default: 'Rua Santa Praia 1920, Natal'
    }
  },
  data() {
    return {
      hovering: false
    }
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
.card-w {
  max-width: 500px;
  width: 100%;
  // width: 30%;
  // max-width: 400px;
}

.truncate-p {
  margin-bottom: 0 !important;
}

.icon-card {
  width: 16px;
  height: 16px;
}

.icon-card-car {
  width: 18px;
  height: 13px;
}

.dark-grey {
  color: #686868;
}
.sub-card {
  color: #686868;
  margin-top: -0.5rem;
}

.card-img {
  // width: 325px;
  width: 100%;
  height: 180px;
  object-fit: cover;
}

// .card:hover {
//   .card-img {
//     content: url('../assets/login/login2.jpg');
//   }
// }

.transition-custom {
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.star {
  width: 16px;
  height: 16px;
}
</style>
