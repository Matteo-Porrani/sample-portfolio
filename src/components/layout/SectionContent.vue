<template>
  <transition name="content">
    <div v-if="contentIsVisible">

      <slot></slot>

      <TheFooter/>

    </div>
  </transition>
</template>

<script setup>
import {ref} from 'vue';

import TheFooter from "@/components/layout/TheFooter";

const contentIsVisible = ref(false);
setTimeout(() => {
  contentIsVisible.value = true;
}, 350);

</script>

<style lang="scss" scoped>

.content-enter-from {
  opacity: 0;
  transform: translateY(6px);
}

.content-enter-active {
  transition: all .5s ease-in-out;
}

.content-enter-to {
  opacity: 1;
}
</style>