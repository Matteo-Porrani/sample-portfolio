<template>

  <section>
    <div class="container">
      <div class="row my-5">

        <div class="skills-wrapper col-10 col-md-8 d-flex flex-wrap justify-content-center gap-2 bg-deep text-light rounded-3 shadow p-3 mx-auto">
          <h5 v-for="(s, i) in skills" :key="i" class="flex-grow-1 res-fs-4 res-fs-md-6 text-center fw-bold mx-md-5">{{ s }}</h5>
        </div>

      </div>
    </div>
  </section>

</template>

<script setup>
const skills = ['PHP', 'Symfony', 'VueJS', 'CSS/SASS', 'JavaScript', 'Bootstrap', 'NodeJS', 'SQL'];
</script>

<style lang="scss" scoped>

h5 {
  //outline: 1px solid orange;
}

.skills-wrapper {
  //margin-top: -2vh !important;
  //outline: 1px solid red;
}

</style>