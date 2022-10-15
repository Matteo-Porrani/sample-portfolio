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


    <!-- ### CONTENT ### --><!---->
    <SectionContent>

      <section>
        <div class="container">

          <MasterCard>

            <div class="row">
              <div class="col lh-lg text-center text-md-start">


                <div class="row mt-3 mb-5">
                  <div class="col d-flex justify-content-center">
                    <div class="about-icon-wrapper d-flex justify-content-center align-items-center bg-dark text-light rounded rounded-pill">
                      <i class="fas fa-user-astronaut res-fs-24 res-fs-md-28"></i>
                    </div>

                  </div>
                </div>


                <p class="res-fs-6 res-fs-md-7">
                <span>
                  Ayant un fort attrait pour l’univers numérique et la programmation, j’ai commencé en 2018 à me former en autodidacte aux fondamentaux du web, notamment HTML et CSS.
                </span>
                  <br>
                  <br>
                  <span>
                  Deux ans plus tard, j’ai décidé de me reconvertir en intégrant la formation <b>Développeur Web & Web Mobile</b> au sein de l'école <b>La Passerelle</b> (Paris 19e), un bootcamp de 5 mois avec au programme : JavaScript, NodeJS, React, PHP, Symfony et MySQL / phpMyAdmin.
                </span>
                  <br>
                  <br>
                  <span>
                  Par la suite, j’ai continué à approfondir les différents langages et frameworks par la pratique, à travers des projets personnels et grâce à différentes ressources complémentaires en ligne (Vue School, Udemy, Frontend Mentor, freeCodeCamp.org).
                </span>
                  <br>
                  <br>
                  <span>
                  Depuis mai 2022 je suis en stage chez <b>Ticketac.com</b>, où je continue à me perfectionner en <b>VueJS</b> et <b>Symfony</b>.
                </span>
                </p>

              </div>
            </div>

            <a href="/cv-porrani-22.pdf"
               class="btn btn-accent text-light d-block w-fit-content mx-auto mt-5"
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

<style lang="scss" scoped>
</style>
<script>
import MasterCard from "@/components/layout/MasterCard";

export default {
  components: {MasterCard}
}
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

b {
  border-bottom: 2px solid $accent;
}

.about-icon-wrapper {
  height: 100px;
  width: 100px;

  @media (min-width: 768px) {
    height: 120px;
    width: 120px;
  }
}
</style>


