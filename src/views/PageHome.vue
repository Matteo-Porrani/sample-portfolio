<template>
  <div class="page page-home">

    <!-- ### INTRO ### -->
    <SectionIntro>

      <div class="row flex-column flex-md-row align-items-center py-5">

        <div class="col-10 col-md-9 order-1 order-md-0 text-center text-md-start">
          <h1 class="res-fs-16 res-fs-md-18">Matteo Porrani</h1>
          <h2 class="text-white fw-semibold">Développeur Web</h2>
          <p class="res-fs-5 res-fs-md-6 mt-5 pe-md-5">
            Après une formation dev web fullstack à <b>La Passerelle</b>,
            <br>j’ai commencé à expérimenter avec les différents langages et frameworks à travers des projets
            personnels.
            <br>
            <br>
            En mai 2022 j’ai intégré l’équipe de la billetterie en ligne <b>Ticketac.com</b>,
            <br>où je continue à me perfectionner en Symfony & VueJS.</p>
        </div>

        <div
          class="col-8 col-md-3 order-0 order-md-1 d-flex justify-content-center align-items-center px-5 mb-3 mb-md-0">
          <HeroAvatar/>
        </div>

      </div>


    </SectionIntro>


    <!-- ### CONTENT ### -->
    <SectionContent>


      <TheSkills/>

      <section id="showcase" class="showcase pb-5 py-md-5">
        <div class="container">

          <div class="row">
            <div class="col-12 col-md-8 mx-auto">
              <h2 class="res-fs-13 res-fs-md-14 text-center">Projets</h2>
              <p class="res-fs-5 res-fs-md-6 text-secondary text-center mt-3">
                Voici un panel de projets personnels qui m'ont permis d'explorer différents aspects du développement web :
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


      <!-- CONTACT -->
      <section id="contact" class="py-md-5 my-5">
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

    </SectionContent>


  </div>
</template>

<script setup>
import projects from "@/projects";

import HeroAvatar from "@/components/HeroAvatar";
import ProjectCard from '@/components/ProjectCard'
import TheSkills from "@/components/TheSkills";


</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

b {
  border-bottom: 2px solid $light;
}

.showcase {
  background: $soft;
  background: linear-gradient(0deg, $soft 65%, $light 92%);
}

a .fas {
  transform: translateX(-4px);
}

a:hover .fas {
  transition: all .3s ease-out;
  transform: translateX(4px);
  //margin-left: 12px !important;
}

#contact h3 a:hover {
  text-decoration: underline !important;
}

</style>

