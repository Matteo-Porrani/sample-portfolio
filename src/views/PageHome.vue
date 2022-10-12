<template>
  <div class="page page-home">

    <!-- ### INTRO ### -->
    <SectionIntro>

      <div class="row flex-column flex-md-row align-items-center py-5">

        <div class="col-10 col-md-8 order-1 order-md-0 text-center text-md-start">
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
          class="col-8 col-md-4 order-0 order-md-1 d-flex justify-content-center align-items-center px-5 mb-3 mb-md-0">
          <HeroAvatar/>
        </div>

      </div>


    </SectionIntro>


    <!-- ### CONTENT ### -->
    <SectionContent>


      <TheSkills/>

      <TheShowcase/>


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

import { useRoute } from "vue-router";
import HeroAvatar from "@/components/HeroAvatar";
import TheSkills from "@/components/TheSkills";
import TheShowcase from "@/components/TheShowcase";

const route = useRoute();

console.log(route.hash);



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

