<template>
  <div class="page page-home">

    <!-- ### INTRO ### -->
    <SectionIntro>

      <!--      <div class="row">-->
      <!--        <div class="col">-->
      <!--          <h1 class="text-center p-1 my-5">Home</h1>-->
      <!--        </div>-->
      <!--      </div>-->

      <div class="row flex-column flex-md-row align-items-center py-5">

        <div class="col-10 col-md-9 order-1 order-md-0 text-center text-md-start">
          <h1>Matteo Porrani</h1>
          <h2 class="text-white fw-semibold">Développeur Web</h2>
          <p class="fs-5 mt-5 pe-md-5">
            Après une formation dev web fullstack à <b>La Passerelle</b>,
            <br>j’ai commencé  à expérimenter avec les différents langages et frameworks à travers des projets personnels.
            <br>
            <br>
            En mai 2022 j’ai intégré l’équipe de la billetterie en ligne <b>Ticketac.com</b>,
            <br>où je continue à me perfectionner en Symfony & VueJS.</p>
        </div>


        <div class="col-8 col-md-3 order-0 order-md-1 d-flex justify-content-center align-items-center px-5 mb-3 mb-md-0">
          <HeroAvatar/>
        </div>
      </div>


    </SectionIntro>


    <!-- ### CONTENT ### -->
    <SectionContent>


      <TheSkills/>


      <section id="showcase" class="showcase py-5 mt-5">
        <div class="container">

          <div class="row my-5">
            <div class="col-12 col-md-6 mx-auto">
              <h2 class="text-center">Projets</h2>
              <p class="fs-5 text-secondary text-center mt-3">
                Voici un panel de projets personnels qui m'ont permis d'explorer différents aspects du développement web :
                <br>de la boutique en ligne à l'application de pronostics sportifs,
                <br>en passant par un petit jeu mobile</p>
            </div>
          </div>

          <div class="row">
            <div class="col d-flex flex-wrap justify-content-center align-items-start">
              <ProjectCard v-for="p in projects" :key="p.id" :icon="p.icon">

                <template v-slot:project-card-title>{{ p.title }}</template>

                <template v-slot:project-card-description>{{ p.desc }}</template>

                <template v-slot:project-card-link>
                  <router-link :to="{ name: 'project', params: { id: p.id } }"
                               class="btn btn-accent text-white d-block mx-auto mt-4" style="width: fit-content">
                    Voir projet
                    <i class="fas fa-arrow-right text-white ms-2"></i>
                  </router-link>

                </template>
              </ProjectCard>
            </div>
          </div>
        </div>
      </section>




    <!-- CONTACT -->
      <section class="my-5">
        <div class="container">

          <div class="row my-5">
            <div class="col-12 col-md-6 mx-auto">
              <h2 class="text-center">Contact</h2>
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

a {

  .fas {
    transform: translateX(-4px);
  }

  &:hover .fas {
    transition: all .3s ease-out;
    transform: translateX(4px);
    //margin-left: 12px !important;
  }
}

</style>

