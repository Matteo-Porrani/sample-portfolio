<template>

  <div id="offcanvasMenu" class="offcanvas offcanvas-end text-bg-dark" tabindex="-1">

    <div class="offcanvas-header">
      <button type="button" class="btn-close btn-close-white ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>



    <div class="offcanvas-body">

      <router-link class="d-block res-fs-10 link-light text-decoration-none my-4" to="/#showcase">Projets</router-link>
      <router-link class="d-block res-fs-10 link-light text-decoration-none my-4" to="/#contact">Contact</router-link>
      <router-link class="d-block res-fs-10 link-light text-decoration-none my-4" to="/about">À propos</router-link>

    </div>
  </div>
</template>

<script setup>
import { onMounted} from "vue";
import bootstrap from '../../../node_modules/bootstrap/dist/js/bootstrap'



onMounted(() => {
  const menu = new bootstrap.Offcanvas('#offcanvasMenu');

  const myOffcanvas = document.querySelector('#offcanvasMenu');

  myOffcanvas.addEventListener('click', () => {
    menu.hide();
  });

})



</script>

<style lang="scss" scoped>
.offcanvas {
  max-width: 70vw;
}
</style>