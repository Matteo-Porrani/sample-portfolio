<template>
  <header class="position-relative bg-dark py-3"
          :class="{
            'header-home': route.path === '/',
            'header-about': route.path === '/about',
            'header-project': route.path.includes('/project'),
            'header-test': route.path.includes('/test'),
          }"
  >
    <div class="container">

      <nav class="d-flex align-items-center justify-content-between gap-5">

        <router-link to="/" class="d-inline-block text-decoration-none w-75">
          <img height="46" src="../../assets/elements/fake-logo.svg" alt="home-logo">
          <span class="logo-text res-fs-10 fw-bold text-light d-inline-block">MP</span>
        </router-link>

        <div class="w-50 d-flex justify-content-between">
          <!-- DESKTOP LINKS -->
          <router-link v-for="link in headerLinks"
                       :key="link.id"
                       :to="link.path"
                       class="d-none d-md-inline desktop-link res-fs-4 res-fs-md-5 link-light text-decoration-none">
            {{ link.label }}
          </router-link>
        </div>

        <!-- MOBILE MENU -->
        <a @click="toggleMenu" id="mobile-menu" class="d-block d-md-none position-relative">
          <i v-if="!menuIsOpen" class="fas fa-bars text-light res-fs-14 me-1"></i>

          <i v-if="menuIsOpen" class="fas fa-times text-light res-fs-15 me-1"></i>

          <transition name="menu">
            <div v-if="menuIsOpen"
                 class="position-absolute bg-secondary shadow text-center rounded-3 end-0 p-3 mt-1"
                 style="width: 60vw; z-index: 999;">
              <router-link class="d-block res-fs-7 link-light text-decoration-none" to="/">Accueil
              </router-link>

              <router-link v-for="link in headerLinks"
                           :key="link.id"
                           :to="link.path"
                           class="d-block res-fs-7 link-light text-decoration-none mt-4">
                {{ link.label }}
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

const headerLinks = [
  {id: 2, path: '/#showcase', label: 'Projets'},
  {id: 3, path: '/#contact', label: 'Contact'},
  {id: 4, path: '/about', label: 'À propos'},
];

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

  &.header-test:after {
    background: $primary;
    //background: radial-gradient(circle, #7094e6 25%, $primary 25%);
    //background-color: #ffcc00;
  }

  .logo-text {
    transform: translate(0, 6px);
  }

  .desktop-link {
    border-bottom: 1px solid transparent;
    &:hover {
      color: $primary !important;
      //border-color: $primary;
    }
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
