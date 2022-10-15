<template>
  <section ref="contact"
           id="contact"
           class="position-relative bg-dark text-light py-md-5">
    <div class="container">

      <div class="row lazy-element py-5">
        <div class="col-12 col-md-6 mx-auto">
          <h2 class="res-fs-13 res-fs-md-14 text-center">Contact</h2>

          <h3 class="text-center mt-5">
            <a class="contact-link-mail text-decoration-none link-light fw-semibold" href="mailto:m.porrani@gmail.com">
              m.porrani@gmail.com
            </a>
          </h3>

          <div class="row mt-5">
            <div class="col d-flex justify-content-center gap-5">

              <a class="link-light" href="https://www.linkedin.com/in/matteo-porrani-b872b822b/" target="_blank">
                <i class="fab fa-linkedin res-fs-16 res-fs-md-18"></i>
              </a>

              <a class="link-light" href="https://github.com/Matteo-Porrani" target="_blank">
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


  const cards = document.querySelectorAll('.lazy-element');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle('show', entry.isIntersecting);

      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }

    });
  }, {
    threshold: .5,
    // rootMargin: '-80px'
  });

  cards.forEach(card => observer.observe(card));

})

</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

#contact {
  z-index: 99;
}

.lazy-element {
  opacity: 0;
  transform: translateY(22px);
  transition: all .4s ease-in-out;

  &.show {
    opacity: 1;
    transform: translateY(0);
  }
}

.contact-link-mail:hover {
  color: $primary !important;
  border-bottom: 2px solid $primary;
}

.link-light:hover {
  color: $primary !important;
}
</style>