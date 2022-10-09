<template>
  <article class="bg-white rounded-3 shadow px-3  py-4 p-md-5 mx-3">
    <h3>
      <slot name="project-card-title"></slot>
    </h3>
    <p class="text-secondary mt-3">
      <slot name="project-card-description"></slot>
    </p>
    <slot name="project-card-link"></slot>
  </article>
</template>

<script setup>
</script>

<style lang="scss" scoped>
article {
  width: 90%;
  margin-top: 2rem;

  @media(min-width: 768px) {
    width: 30%;

    @for $i from 1 through 5 {

      &:nth-child(#{$i}) {
        margin-top: $i * 2vh;
      }

    }

  }




}


</style>