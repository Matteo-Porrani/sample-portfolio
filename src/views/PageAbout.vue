<template>
  <div class="page page-about">

    <!-- ### INTRO ### -->
    <SectionIntro>
      <div class="row">
        <div class="col">
          <h1 class="text-center p-1 my-5">About</h1>
        </div>
      </div>
    </SectionIntro>


    <!-- ### CONTENT ### -->
    <SectionContent>

      <MasterCard>

        <div class="row">
          <div class="col lh-lg">
            <p>
              Ayant un fort attrait pour l’univers numérique et la programmation, j’ai commencé en 2018 à me former en autodidacte aux fondamentaux du web, notamment HTML et CSS.
            </p>

            <p>
              Deux ans après, j’ai décidé de me reconvertir en intégrant fin 2020 la formation Développeur Web & Web Mobile au sein de l'école <b>La Passerelle</b> (Paris 19e) afin de me perfectionner en HTML et CSS et poursuivre mon apprentissage avec JavaScript, NodeJS, React, PHP, Symfony et MySQL / phpMyAdmin.
            </p>

            <p>
              A l’issue de cette formation, j’ai continué à approfondir les différents langages et frameworks par la pratique, à travers des projets personnels, et grâce à différentes ressources complémentaires en ligne (Udemy, Frontend Mentor, freeCodeCamp.org).
            </p>

            <p>
              Actuellement je suis en stage chez Ticketac.com où je continue à me perfectionner en VueJS et Symfony.
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