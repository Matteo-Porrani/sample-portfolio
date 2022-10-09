<template>
  <div class="page page-project">
    <div class="container">


      <div class="row my-5">
        <div class="col">
          <!--              <p class="text-center text-secondary">#{{ id }}</p>-->
          <h1 class="text-center text-white">{{ project.title }}</h1>
        </div>

      </div>


      <div class="row my-5">
        <div class="col">
          <div class="icon-wrapper position-relative mx-auto rounded rounded-pill overflow-hidden">
            <img class="position-absolute top-50 start-50 translate-middle" src="../assets/sketch1.svg" alt="">

            <i :class="project.icon" class="fa-5x position-absolute top-50 start-50"></i>
            <i :class="project.icon" class="fa-5x position-absolute top-50 start-50 text-white translate-middle"></i>


<!--            <i class="fas fa-skull-crossbones fa-5x position-absolute top-50 start-50 text-white"></i>-->
<!--            <i class="fas fa-skull-crossbones fa-5x position-absolute top-50 start-50 translate-middle"></i>-->


<!--            <i class="fas fa-walking fa-5x position-absolute top-50 start-50 text-white"></i>-->
<!--            <i class="fas fa-walking fa-5x position-absolute top-50 start-50 translate-middle"></i>-->
          </div>

        </div>
      </div>


      <!--      <div class="row my-5">-->
      <!--        <div class="col-6 mx-auto">-->

      <!--          <p class="fs-5 text-center text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing officiis sint-->
      <!--            temporibus tenetur ullam.-->
      <!--            At debitis dolorem doloribus.</p>-->

      <!--          <button @click="router.back()" class="btn btn-accent text-white d-block mx-auto">Go Back</button>-->
      <!--        </div>-->
      <!--      </div>-->


    </div>
  </div>
</template>

<script setup>
// import {useRouter} from 'vue-router'
import projects from '../projects';

// const router = useRouter();

const props = defineProps({
  id: {type: Number, required: true},
});

const project = projects.find(p => p.id === props.id);

</script>


<style lang="scss" scoped>
.icon-wrapper {
  width: 140px;
  height: 140px;

  i:first-of-type {
    transform: translate(-46%, -46%);
  }

}
</style>