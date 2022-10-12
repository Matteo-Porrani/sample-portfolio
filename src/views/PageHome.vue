<template>
  <div class="page page-home">

    <!-- ### INTRO ### -->
    <SectionIntro>

      <div class="row flex-column flex-md-row align-items-center py-5">

        <div class="col-10 col-md-8 order-1 order-md-0 text-center text-md-start">
          <h1 class="res-fs-16 res-fs-md-18">Matteo Porrani</h1>
          <h2 class="text-white fw-semibold">Développeur Web</h2>
          <p class="res-fs-5 res-fs-md-7 mt-5 pe-md-5">
            Après une formation bootcamp à <b>La Passerelle</b>,
            <br>j’ai commencé à expérimenter avec les différents langages et frameworks<br> à travers des projets
            personnels.
            <br>
            <br>
            En mai 2022 j’ai intégré l’équipe de la billetterie en ligne <b>Ticketac.com</b>,
            <br>où je continue ma montée en compétences avec Symfony & VueJS.</p>
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
      <TheContact/>

    </SectionContent>


  </div>
</template>

<script setup>
import HeroAvatar from "@/components/HeroAvatar";
import TheSkills from "@/components/TheSkills";
import TheShowcase from "@/components/TheShowcase";
import TheContact from "@/components/TheContact";







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

