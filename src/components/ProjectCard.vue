<template>
  <article class="bg-white rounded-3 shadow p-3 p-md-5 m-3">
    <h3>
      <slot name="project-card-title">
        Project Title
      </slot>
    </h3>
    <p>
      <slot name="project-card-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquam deserunt earum illo inventore iure
        laboriosam
        libero necessitatibus nesciunt nihil non, omnis possimus provident quaerat quam quibusdam quos repellendus sunt.
      </slot>
    </p>
    <slot name="project-card-link"></slot>
  </article>
</template>

<script setup>
</script>

<style lang="scss" scoped>
article {
  width: 90%;
  @media(min-width: 768px) {
    width: 30%;
  }
}
</style>