<template>
  <div @click="handleClick" class="flex flex-col items-center justify-center cursor-pointer">
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'apartment'"
      :src="isHover ? '/icons/white/apartment-white.svg' : '/icons/apartment.svg'"
      alt=""
      srcset=""
      @mouseover="isHover = true"
      @mouseout="isHover = false"
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'Castle'"
      :src="isHover ? '/icons/white/Castle-white.svg' : '/icons/Castle.svg'"
      alt=""
      srcset=""
      @mouseover="isHover = true"
      @mouseout="isHover = false"
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'Farm'"
      :src="isHover ? '/icons/white/Farm-white.svg' : '/icons/Farm.svg'"
      alt=""
      srcset=""
      @mouseover="isHover = true"
      @mouseout="isHover = false"
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'Campervan'"
      :src="isHover ? '/icons/white/Campervan-white.svg' : '/icons/Campervan.svg'"
      alt=""
      srcset=""
      @mouseover="isHover = true"
      @mouseout="isHover = false"
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'Hotel'"
      :src="isHover ? '/icons/white/Hotel-white.svg' : '/icons/Hotel.svg'"
      alt=""
      srcset=""
      @mouseover="isHover = true"
      @mouseout="isHover = false"
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'House'"
      :src="isHover ? '/icons/white/House-white.svg' : '/icons/House.svg'"
      alt=""
      srcset=""
      @mouseover="isHover = true"
      @mouseout="isHover = false"
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'Tent'"
      :src="isHover ? '/icons/white/Tent-white.svg' : '/icons/Tent.svg'"
      alt=""
      srcset=""
      @mouseover="isHover = true"
      @mouseout="isHover = false"
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'Tiny home'"
      :src="isHover ? '/icons/white/TinyHome-white.svg' : '/icons/TinyHome.svg'"
      alt=""
      srcset=""
      @mouseover="isHover = true"
      @mouseout="isHover = false"
    />
    <img
      class="hover:bg-greenish p-2 rounded-full transition-custom hover:scale-105"
      v-if="type == 'Yurt'"
      :src="isHover ? '/icons/white/Yurt-white.svg' : '/icons/Yurt.svg'"
      alt=""
      srcset=""
      @mouseover="isHover = true"
      @mouseout="isHover = false"
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
  },
  data() {
    return {
      isHover: false
    }
  },
  methods: {
    handleClick() {
      this.$emit('categoria-select', this.name)
      console.log(this.name)
    }
  }
  // computed: {
  //   imageSource() {
  //     if (this.isHover) {
  //       return '/icons/white/apartment-white.svg'
  //     } else {
  //       return '/icons/apartment.svg'
  //     }
  //   }
  // }
}
</script>

<style scoped>
.transition-custom {
  transition-property: all;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
