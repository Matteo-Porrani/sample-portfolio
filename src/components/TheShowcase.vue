<template>
  <section ref="showcase" id="showcase" class="showcase pb-5 py-md-5">
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
import ProjectCard from '@/components/ProjectCard'

const route = useRoute();
const showcase = ref(null);

onMounted(() => {
  console.log(showcase.value);
  console.log(route.hash);

  if (route.hash) {
    window.scrollTo({
      left: 0,
      top: showcase.value.getBoundingClientRect().y,
      behavior: 'smooth'
    });
  }

})

</script>
