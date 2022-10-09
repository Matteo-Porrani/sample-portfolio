<template>

  <section>
    <div class="container">
      <div class="row my-5">
        <div class="col-10 d-flex flex-wrap justify-content-center gap-4 gap-md-5 mx-auto">
          <span v-for="(s, i) in skills" :key="i" class="fw-bold mx-md-5">{{ s }}</span>
        </div>
      </div>
    </div>
  </section>

</template>

<script setup>
const skills = ['PHP', 'JavaScript', 'VueJS', 'CSS/SCSS', 'Bootstrap', 'Symfony', 'NodeJS'];
</script>

<style lang="scss" scoped>
span {
  font-size: 1.125rem;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
}
</style>