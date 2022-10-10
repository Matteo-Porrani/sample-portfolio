<template>
  <header class="position-relative bg-dark py-3"
          :class="{
            'header-home': route.path === '/',
            'header-about': route.path === '/about',
            'header-project': route.path.includes('/project'),
          }"
  >
    <div class="container">

      <nav class="d-flex align-items-center justify-content-between gap-5">
        <router-link to="/" class="text-decoration-none">
          <img height="46" src="../../assets/fake-logo.svg" alt="home-logo">
          <span class="logo-text res-fs-10 fw-bold text-light d-inline-block">MP</span>
        </router-link>

        <router-link class="res-fs-4 res-fs-md-5 link-light text-decoration-none" to="/#showcase">Projets</router-link>
        <router-link class="res-fs-4 res-fs-md-5 link-light text-decoration-none" to="/#contact">Contact</router-link>
        <router-link class="res-fs-4 res-fs-md-5 link-light text-decoration-none" to="/about">À propos</router-link>
      </nav>

    </div>
  </header>
</template>

<script setup>

import { useRoute } from 'vue-router';
const route = useRoute();

// import { watch } from 'vue';

// watch(
//   route,
//   (newValue) => console.log(newValue.fullPath)
// );

</script>

<style lang="scss" scoped>
@import '../../assets/variables.scss';

header {

  &:after {
    transition: all 1s ease-in-out;
    position: absolute;
    top: 100%;
    content: '';
    clip-path: polygon(0 0, 100% 0, 100% 65%, 0% 100%);
    width: 100%;
    z-index: -1;
    height: 65vh;

    @media (min-width: 768px) {
      height: 60vh;
    }
  }

  &.header-home:after {
    background-color: $primary;
  }

  &.header-about:after {
    background-color: $accent;
  }

  &.header-project:after {
    background-color: $deep;
  }

  .logo-text {
    transform: translate(0, 6px);
  }

}

</style>
