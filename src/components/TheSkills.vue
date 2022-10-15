<template>

  <section>
    <div class="container">
      <div class="row my-5">

        <div class="skills-wrapper col-10 col-md-8 d-flex flex-wrap justify-content-center gap-3 bg-deep text-light p-3 rounded-3 shadow mx-auto">
          <h5 v-for="(s, i) in skills" :key="i" class="res-fs-4 res-fs-md-6 fw-bold mx-md-5">{{ s }}</h5>
        </div>

      </div>
    </div>
  </section>

</template>

<script setup>
const skills = ['PHP', 'JavaScript', 'VueJS', 'CSS/SASS', 'Bootstrap', 'Symfony', 'NodeJS', 'SQL'];
</script>

<style lang="scss" scoped>

//.skills-wrapper {
//  margin-top: -2vh !important;
//}

</style>