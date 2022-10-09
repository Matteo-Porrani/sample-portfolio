<template>
  <transition name="content">
    <section v-if="contentIsVisible" class="content">
      <div class="container">
        <slot></slot>
      </div>
    </section>
  </transition>
</template>

<script setup>
import {ref} from 'vue';

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