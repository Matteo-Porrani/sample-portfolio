<template>
  <div class="page page-home">

    <!-- ### INTRO ### -->
    <SectionIntro>

      <div class="row mb-5">
        <div class="col">
          <HomeHeader/>
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
// import HeroAvatar from "@/components/HeroAvatar";
import HomeHeader from '@/components/HomeHeader';
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

