<template>
  <header class="position-relative bg-dark py-3"
          :class="{
            'header-home': route.fullPath === '/',
            'header-about': route.fullPath === '/about',
            'header-project': route.fullPath.includes('/project'),
          }"
  >
    <div class="container">
      <nav class="d-flex align-items-center justify-content-between gap-5">
        <router-link to="/">
          <img height="46" src="../../assets/fake-logo.svg" alt="home-logo">
        </router-link>
        <router-link class="link-light text-decoration-none" to="/about">À propos</router-link>
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
  //clip-path: polygon(0 0, 100% 0, 100% 50%, 0% 100%);
  //background: $soft;
  //background: linear-gradient(20deg, $soft 65%, #769BF2 92%);
}

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

}


</style>