<template>
  <div class="page page-home">

    <!-- ### INTRO ### -->
    <SectionIntro>

      <!--      <div class="row">-->
      <!--        <div class="col">-->
      <!--          <h1 class="text-center p-1 my-5">Home</h1>-->
      <!--        </div>-->
      <!--      </div>-->

      <div class="row py-5">
        <div class="col-12 col-md-9">
          <h1>Matteo Porrani</h1>
          <h2 class="text-white fw-semibold">Développeur Web</h2>
          <p class="w-75 mt-5 lh-lg">On sait depuis longtemps que travailler avec du texte lisible et contenant du
            sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même. L'avantage du
            Lorem Ipsum sur un texte générique est qu'il possède une
            distribution de lettres plus ou moins normale, et en tout cas comparable avec celle du français standard.
            De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur
            faux texte par défaut</p>
        </div>


        <div class="col-12 col-md-3 d-flex justify-content-center align-items-center px-5">
          <HeroAvatar/>
        </div>
      </div>


    </SectionIntro>


    <!-- ### CONTENT ### -->
    <SectionContent>

      <div class="row">
        <div class="col d-flex flex-wrap justify-content-center">
          <ProjectCard v-for="p in projects" :key="p.id">

            <template v-slot:project-card-title>{{ p.title }}</template>

            <template v-slot:project-card-description>{{ p.desc }}</template>

            <template v-slot:project-card-link>
              <router-link :to="{ name: 'project', params: { id: p.id } }"
                           class="btn btn-accent d-block mx-auto">
                Voir projet
              </router-link>

            </template>
          </ProjectCard>
        </div>
      </div>





    </SectionContent>


  </div>
</template>

<script setup>
import projects from "@/projects";
import HeroAvatar from "@/components/HeroAvatar";
import ProjectCard from '@/components/ProjectCard'



</script>

