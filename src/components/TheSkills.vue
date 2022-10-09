<template>

  <section class="">
    <div class="container">
      <div class="row my-5">
        <div class="skills-wrapper col-10 col-md-8 d-flex flex-wrap justify-content-center gap-3 bg-dark text-light p-3 rounded-3 shadow mx-auto">
          <h5 v-for="(s, i) in skills" :key="i" class="fw-bold mx-md-5">{{ s }}</h5>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
const skills = ['PHP', 'JavaScript', 'VueJS', 'CSS/SCSS', 'Bootstrap', 'Symfony', 'NodeJS', 'SQL'];
</script>

<style lang="scss" scoped>

.skills-wrapper {
  margin-top: -6vh !important;
}

span {
  font-size: 1.125rem;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
}
</style>