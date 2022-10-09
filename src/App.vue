<template>
  <TheHeader/>

  <router-view v-slot="slotProps">
    <transition name="route" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>

</template>

<script setup>
import TheHeader from '@/components/layout/TheHeader';

</script>

<style lang="scss">
@import './assets/main.scss';

#app {
  //display: flex;
  //flex-direction: column;
  //min-height: 100vh;
}



.route-enter-from,
.route-leave-to {
  opacity: 0;
  transform: translateY(12px);
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0px);
}

.route-enter-active,
.route-leave-active {
  transition: all .4s ease-in-out;
}

</style>
