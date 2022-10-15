<template>
  <section ref="showcase"
           id="showcase"
           class="showcase position-relative pb-5 py-md-5">
    <div class="container">

      <div class="row">
        <div class="col-12 col-md-8 mx-auto">

          <h2 class="res-fs-13 res-fs-md-14 text-center">Projets</h2>
          <p class="res-fs-5 res-fs-md-6 text-secondary text-center mt-3">
            Voici un panel de projets personnels qui m'ont permis d'explorer<br>
            différents aspects du développement web :
            <br>
            de la boutique en ligne à l'application de pronostics sportifs,
            en passant par un petit jeu mobile</p>
        </div>
      </div>

      <div class="row">
        <div class="col d-flex flex-wrap justify-content-center align-items-start">

          <!-- ### PROJECT CARDS ### -->
          <ProjectCard v-for="p in projects" :key="p.id" :icon="p.icon">

            <template v-slot:project-card-title>{{ p.title }}</template>

            <template v-slot:project-card-description>{{ p.desc }}</template>

            <template v-slot:project-card-link>

              <router-link :to="{ name: 'project', params: { id: p.id } }"
                           class="btn btn-accent text-white d-block mx-auto mt-4" style="width: fit-content">
                Voir <span class="d-none d-md-inline">le projet</span>
                <i class="fas fa-arrow-right text-white ms-2"></i>
              </router-link>

            </template>

          </ProjectCard>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router";
import projects from "@/data/projects";
import ProjectCard from '@/components/ProjectCard';

const route = useRoute();
const showcase = ref(null);

onMounted(() => {
  if (route.hash === '#showcase') {
    window.scrollTo({
      left: 0,
      top: showcase.value.getBoundingClientRect().y - 20,
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
});

</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

#showcase {
  z-index: 1;

  &:after {
    transition: all 1s ease-in-out;
    background: $dark;
    position: absolute;
    top: 80%;
    left: 0;
    content: '';
    clip-path: polygon(0 35%, 100% 0, 100% 100%, 0% 100%);
    width: 100%;
    z-index: -1;
    height: 65vh;

    @media (min-width: 768px) {
      height: 60vh;
    }
  }
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
</style>
