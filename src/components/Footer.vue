<template>
  <div class="flex items-center justify-center footer-p">
    <a class="bob-on-hover" href="https://www.isaacf.me/" target="_blank"
      >made with <span class="heart">❤️</span> <span class="isaac">by Isaac F.</span></a
    >
  </div>
</template>

<script lang="ts">
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
.bob-on-hover:hover {
  .isaac {
    color: #6d2ded;
    font-weight: 500;
  }
}

/*===================*/
/* BOB
/*===================*/

@-webkit-keyframes bob-on-hover {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@keyframes bob-on-hover {
  0% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
  50% {
    -webkit-transform: translateY(-4px);
    transform: translateY(-4px);
  }
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@-webkit-keyframes bob-on-hover-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
@keyframes bob-on-hover-float {
  100% {
    -webkit-transform: translateY(-8px);
    transform: translateY(-8px);
  }
}
.bob-on-hover {
  display: inline-block;
  vertical-align: middle;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  box-shadow: 0 0 1px rgba(0, 0, 0, 0);
}
.bob-on-hover:hover,
.bob-on-hover:focus,
.bob-on-hover:active {
  -webkit-animation-name: bob-on-hover-float, bob-on-hover;
  animation-name: bob-on-hover-float, bob-on-hover;
  -webkit-animation-duration: 0.3s, 1.5s;
  animation-duration: 0.3s, 1.5s;
  -webkit-animation-delay: 0s, 0.3s;
  animation-delay: 0s, 0.3s;
  -webkit-animation-timing-function: ease-out, ease-in-out;
  animation-timing-function: ease-out, ease-in-out;
  -webkit-animation-iteration-count: 1, infinite;
  animation-iteration-count: 1, infinite;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
  -webkit-animation-direction: normal, alternate;
  animation-direction: normal, alternate;
}
</style>
