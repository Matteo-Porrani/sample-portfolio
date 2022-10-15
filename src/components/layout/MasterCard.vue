<template>
  <div class="master-card row">
    <div class="col-10 col-md-10 col-xl-8 rounded-3 bg-white shadow px-3 py-4 p-md-5 mx-auto">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.master-card {
  transform: translateY(-30vh);

  @media (min-width: 768px) {
    transform: translateY(-26vh);
  }

}
</style>