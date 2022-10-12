<template>
  <section ref="contact" id="contact" class="py-md-5 my-5">
    <div class="container">

      <div class="row my-5">
        <div class="col-12 col-md-6 mx-auto">
          <h2 class="res-fs-13 res-fs-md-14 text-center">Contact</h2>

          <h3 class="text-center mt-5">
            <a class="text-decoration-none link-secondary fw-semibold" href="mailto:m.porrani@gmail.com">
              m.porrani@gmail.com
            </a>
          </h3>

          <div class="row mt-5">
            <div class="col d-flex justify-content-center gap-5">

              <a href="https://www.linkedin.com/in/matteo-porrani-b872b822b/" target="_blank">
                <i class="fab fa-linkedin res-fs-16 res-fs-md-18"></i>
              </a>

              <a href="https://github.com/Matteo-Porrani" target="_blank">
                <i class="fab fa-github-square res-fs-16 res-fs-md-18"></i>
              </a>

            </div>

          </div>

        </div>
      </div>
    </div>

  </section>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router";
const route = useRoute();
const contact = ref(null);

onMounted(() => {
  if (route.hash === '#contact') {
    window.scrollTo({
      left: 0,
      top: contact.value.getBoundingClientRect().y - 20,
      behavior: 'smooth'
    });
  }

})
</script>

<style scoped>

</style>