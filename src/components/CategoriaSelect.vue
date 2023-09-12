<template>
  <div class="flex flex-col items-center justify-center">
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'apartment'"
      src="../assets/home/apartment.svg"
      alt=""
      srcset=""
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'Castle'"
      src="../assets/home/Castle.svg"
      alt=""
      srcset=""
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'Farm'"
      src="../assets/home/Farm.svg"
      alt=""
      srcset=""
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'Campervan'"
      src="../assets/home/Campervan.svg"
      alt=""
      srcset=""
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'Hotel'"
      src="../assets/home/Hotel.svg"
      alt=""
      srcset=""
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'House'"
      src="../assets/home/House.svg"
      alt=""
      srcset=""
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'Tent'"
      src="../assets/home/Tent.svg"
      alt=""
      srcset=""
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'Tiny home'"
      src="../assets/home/Tiny home.svg"
      alt=""
      srcset=""
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'Yurt'"
      src="../assets/home/Yurt.svg"
      alt=""
      srcset=""
    />
    <p class="text-base text-black capitalize">{{ name }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'CategoriaSelect',
  props: {
    type: {
      type: String,
      required: true,
      default: 'apartment'
    },
    name: {
      type: String,
      required: true,
      default: 'Apartamento'
    }
  }
}
</script>

<style scoped>
.transition-custom {
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
