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

      <MasterCard>

        <div class="row">
          <div class="col lh-lg">
            <p>
              Ayant un fort attrait pour l’univers numérique et la programmation, j’ai commencé en 2018 à me former en autodidacte aux fondamentaux du web, notamment HTML et CSS.
            </p>

<!--            <p>-->
<!--              Deux ans plus tard, j’ai décidé de me reconvertir en intégrant fin 2020 la formation <b>Développeur Web & Web Mobile</b> au sein de l'école <b>La Passerelle</b> (Paris 19e) afin de poursuivre mon apprentissage avec JavaScript, NodeJS, React, PHP, Symfony et MySQL / phpMyAdmin.-->
<!--            </p>-->

            <p>
              Deux ans plus tard, j’ai décidé de me reconvertir en intégrant la formation <b>Développeur Web & Web Mobile</b> au sein de l'école <b>La Passerelle</b> (Paris 19e), une formation bootcamp de 5 mois axée sur JavaScript, NodeJS, React, PHP, Symfony et MySQL / phpMyAdmin.
            </p>

            <p>
              Par la suite, j’ai continué à approfondir les différents langages et frameworks par la pratique, à travers des <b>projets personnels</b> et grâce à différentes <b>ressources complémentaires en ligne</b> (Vue School, Udemy, Frontend Mentor, freeCodeCamp.org).
            </p>

            <p>
              Depuis mai 2022 je suis en stage chez <b>Ticketac.com</b>, où je continue à me perfectionner en VueJS et Symfony.
            </p>
          </div>
        </div>

        <button class="btn btn-accent text-white d-block mx-auto mt-5">Télécharger mon CV</button>
      </MasterCard>

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
</style>