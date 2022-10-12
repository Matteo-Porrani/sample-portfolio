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

        <router-link class="d-none d-md-inline res-fs-4 res-fs-md-5 link-light text-decoration-none" to="/#showcase">
          Projets
        </router-link>
        <router-link class="d-none d-md-inline res-fs-4 res-fs-md-5 link-light text-decoration-none" to="/#contact">
          Contact
        </router-link>
        <router-link class="d-none d-md-inline res-fs-4 res-fs-md-5 link-light text-decoration-none" to="/about">À
          propos
        </router-link>


        <a @click="toggleMenu" id="mobile-menu" class="position-relative">
          <i v-if="!menuIsOpen" class="fas fa-bars text-light res-fs-14 me-1"></i>

          <i v-if="menuIsOpen" class="fas fa-times text-light res-fs-15 me-1"></i>

          <transition name="menu">
            <div v-if="menuIsOpen" class="position-absolute bg-deep text-center rounded-3 end-0 p-3 mt-1" style="width: 60vw">
              <router-link class="d-block res-fs-7 link-light text-decoration-none" to="/#showcase">Projets
              </router-link>
              <router-link class="d-block res-fs-7 link-light text-decoration-none mt-4" to="/#contact">Contact
              </router-link>
              <router-link class="d-block res-fs-7 link-light text-decoration-none mt-4" to="/about">À propos
              </router-link>
            </div>
          </transition>

        </a>


      </nav>

    </div>
  </header>
</template>

<script setup>
import {ref} from 'vue';
import {useRoute} from 'vue-router';

const route = useRoute();

const menuIsOpen = ref(false);
const toggleMenu = () => {
  menuIsOpen.value = !menuIsOpen.value;
}

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


.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  max-height: 0;
}

.menu-enter-to,
.menu-leave-from {
  opacity: 1;
  max-height: 70vh;
}

.menu-enter-active,
.menu-leave-active {
  transition: all .3s ease-out;
}


</style>
