<template>
  <article class="bg-white rounded-3 shadow text-center px-3 py-4 p-md-5 mx-3">

<!--    <i :class="icon" class="text-primary me-2 fs-1 my-3"></i>-->


    <div class="icon-wrapper position-relative mx-auto rounded rounded-pill overflow-hidden">
      <img class="position-absolute top-50 start-50 translate-middle" src="../assets/sketch1.svg" alt="">

      <i :class="icon" class="fa-3x position-absolute top-50 start-50 text-white"></i>
      <i :class="icon" class="fa-3x position-absolute top-50 start-50 translate-middle"></i>
    </div>


    <h3 class="mt-3">
      <slot name="project-card-title"></slot>
    </h3>

    <p class="text-secondary mt-3">
      <slot name="project-card-description"></slot>
    </p>
    <slot name="project-card-link"></slot>
  </article>
</template>

<script setup>
defineProps({
  icon: {type: String, required: true}
});
</script>

<style lang="scss" scoped>
@import '../assets/variables.scss';

article {
  width: 90%;
  margin-top: 2rem;
  border: 3px solid;
  border-color: transparent;

  &:hover {
    transition: all .3s ease-out;
    border-color: $accent;
    //transform: scale(1.02);
  }

  @media(min-width: 768px) {
    width: 30%;

    @for $i from 1 through 5 {

      &:nth-child(#{$i}) {
        margin-top: $i * 3vh;
      }

    }

  }

}

.icon-wrapper {
  width: 100px;
  height: 100px;

  i:first-of-type {
    transform: translate(-46%, -46%);
  }

}
</style>