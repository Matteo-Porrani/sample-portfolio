<template>
  <div class="page page-about">

    <!-- ### INTRO ### -->
    <SectionIntro>
      <div class="row">
        <div class="col">
          <h1 class="text-center p-1 my-5">À propos</h1>
        </div>
      </div>
    </SectionIntro>

    <!-- ### CONTENT ### -->
    <SectionContent>
      <section>
        <div class="container">
          <MasterCard>

            <div class="row">
              <div class="col lh-lg">

                <div class="row mt-3 mb-5">
                  <div class="col d-flex justify-content-center">

                    <div class="icon-wrapper position-relative mx-auto rounded rounded-pill overflow-hidden">
                      <img class="position-absolute top-50 start-50 translate-middle"
                           src="../assets/elements/sketch1.svg" alt="">
                      <i class="fas fa-laptop-code res-fs-18 res-fs-md-24 position-absolute top-50 start-50 text-white"></i>
                      <i class="fas fa-laptop-code res-fs-18 res-fs-md-24 position-absolute top-50 start-50 text-dark translate-middle"></i>
                    </div>

                  </div>
                </div>

                <p class="res-fs-5 res-fs-md-6">
                <span>
                  Attiré depuis toujours par l’univers numérique, je me suis initié au code en autodidacte avec le langage VBA.
                </span>
                  <br>
                  <br>
                  <span>
                  En décembre 2020 j’ai décidé de me reconvertir en intégrant le bootcamp <b>Développeur Web & Web Mobile</b> de l'école <b>La Passerelle</b> (Paris 19e), une formation de 6 mois avec au programme : HTML/CSS, JavaScript, PHP, SQL, Symfony, NodeJS et React.
                </span>
                  <br>
                  <br>
                  <span>
                  Par la suite, j’ai continué à approfondir les différents langages et frameworks à travers des projets personnels et des ressources complémentaires (Vue School, Udemy, Frontend Mentor, freeCodeCamp.org).
                </span>
                  <br>
                  <br>
                  <span>
                  En mai 2022 j'ai intégré l'équipe de <b>Ticketac.com</b>, d'abord en stage puis en CDD, en tant que développeur fullstack Symfony/VueJS.
                </span>
                  <br>
                  <br>
                  <span>
                  Entre janvier et mars 2023 j'ai collaboré avec l'agence de marketing digital <b>Waisso</b>.
                </span>
                  <br>
                  <br>
                  <span>
                    Actuellement je suis en poste dans l'équipe de développement Frontend VueJS de <b>Cegedim SRH</b>.
                  </span>
                </p>

              </div>
            </div>

            <a
              href="/cv-porrani-23.pdf"
              class="btn btn-accent text-light d-block w-fit-content mx-auto res-fs-6 res-fs-md-7 mt-5"
              title="télécharger mon CV"
              target="_blank"
              download
              rel="noopener noreferrer"
            >
              Télécharger mon CV
            </a>

          </MasterCard>
        </div>
      </section>
    </SectionContent>

  </div>
</template>

<script setup>
import MasterCard from "@/components/layout/MasterCard";

</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

b {
  border-bottom: 2px solid $accent;
}

.icon-wrapper {
  width: 96px;
  height: 96px;

  i:first-of-type {
    transform: translate(-44%, -46%);
  }

  @media (min-width: 768px) {
    width: 110px;
    height: 110px;
  }
}

</style>
