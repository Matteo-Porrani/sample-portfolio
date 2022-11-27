<template>

  <div class="row my-3 my-md-4">
    <div class="col">
      <h1 class="text-center text-white res-fs-14 res-fs-md-16 ">{{ project.title }}</h1>
    </div>
  </div>

  <div class="row my-3">
    <div class="col">
      <div class="icon-wrapper position-relative mx-auto rounded rounded-pill overflow-hidden">
        <img class="position-absolute top-50 start-50 translate-middle" src="../assets/elements/sketch1.svg" alt="">
        <i :class="project.icon" class="res-fs-18 res-fs-md-24 position-absolute top-50 start-50 text-deep"></i>
        <i :class="project.icon"
           class="res-fs-18 res-fs-md-24 position-absolute top-50 start-50 text-white translate-middle"></i>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col">
      <p class="text-white text-center fs-5 mt-3">{{ project.desc }}</p>
    </div>
  </div>

</template>

<script setup>

defineProps({
  project: {
    type: Object,
    required: true
  }
})

</script>

<style lang="scss" scoped>

.icon-wrapper {
  width: 96px;
  height: 96px;

  i:first-of-type {
    transform: translate(-42%, -42%);
  }

  @media (min-width: 768px) {
    width: 110px;
    height: 110px;
  }
}

</style>