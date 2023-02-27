<template>
  <div class="hero-grid">

    <header>
      <h1 class="res-fs-16 res-fs-md-18">Matteo Porrani</h1>
      <h2 class="text-white fw-semibold">Développeur Web</h2>
    </header>

    <div class="avatar">
      <img class="shadow" src="../assets/images/avatar1_660x660.jpg" alt="matteo">
    </div>

    <div class="resume">
      <p class="res-fs-5 res-fs-md-6">
        Après une formation bootcamp à <b>La Passerelle</b>,
        <br>j’ai commencé à expérimenter avec différents langages et frameworks<br> à travers des projets
        personnels.
        <br>
        <br>
        Une première expérience chez <b>Ticketac.com</b>,
        <br>m'a permis de monter en compétences avec Symfony & VueJS.
        <br>
        En janvier 2023 j'ai intégré l'agence de marketing digital <b>Waisso</b>.
      </p>
    </div>

  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

b {
  border-bottom: 2px solid $primary;

  @media (min-width: 1200px) {
    border-color: $light;
  }
}

.hero-grid {
  display: grid;
  grid-template-rows: 4fr 9fr auto;
  margin-top: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr auto;
  }

  @media (min-width: 1200px) {
    //margin-top: 3rem;
    grid-template-columns: 8fr 4fr;
    grid-template-rows: 1fr 1fr auto;
  }

}

header {
  //background-color: rgba(250, 100, 56, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 24px;

  @media (min-width: 1200px) {
    align-items: start;
  }
}

.resume {
  //background-color: rgba(242, 254, 109, 0.3);
  text-align: center;

  // iPad vertical
  @media (min-width: 768px) {
    grid-column: span 2;
    padding-top: 32px;
    line-height: 1.78;
  }

  @media (min-width: 1200px) {
    text-align: left;
    grid-column: span 1;

    padding-top: 0;
  }

}

.avatar {
  //background-color: rgba(34, 224, 129, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;


  @media (min-width: 768px) {
    padding-block: 32px;
  }

  @media (min-width: 1200px) {
    grid-row: span 2;
  }

  img {
    width: 40%; /* of its container... */
    max-width: 220px;
    display: block;
    margin: 0 auto;
    border-radius: 50%;

    @media (min-width: 1200px) {
      max-width: 280px;
      width: 80%; /* of its container... */
    }
  }

}
</style>