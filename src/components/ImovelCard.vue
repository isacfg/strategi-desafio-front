<template>
  <div class="card card-w card-compact w-96 bg-white">
    <figure><img src="../assets/login/login.jpg" alt="Shoes" /></figure>
    <div class="card-body">
      <div class="badge badge-ghost rounded-full">Castelo</div>
      <div class="flex items-center justify-between">
        <div>
          <h2 class="card-title truncate-p text-black">{{ truncateTitle(cardTitle, 20) }}</h2>
        </div>
        <div class="rating-p flex items-center pl-4">
          <img class="star" src="../assets/icons-cards/star.png" alt="" />
          <p class="font-poppins text-sm font-medium text-black">4.73</p>
        </div>
      </div>

      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
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

<style scoped>
.card-w {
  max-width: 325px;
}

.truncate-p {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.star {
  width: 16px;
  height: 16px;
}
</style>
