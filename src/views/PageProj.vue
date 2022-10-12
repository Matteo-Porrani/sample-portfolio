<template>
  <div class="page page-project">

    <SectionIntro v-if="project">

      <div class="row my-3 my-md-4">
        <div class="col">
          <h1 class="text-center text-white res-fs-14 res-fs-md-16 ">{{ project.title }}</h1>
        </div>
      </div>

      <div class="row my-3">
        <div class="col">
          <div class="icon-wrapper position-relative mx-auto rounded rounded-pill overflow-hidden">
            <img class="position-absolute top-50 start-50 translate-middle" src="../assets/sketch1.svg" alt="">
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

    </SectionIntro>


    <SectionContent v-if="project">

      <section class="my-5">
        <div class="container">
          <div class="row">
            <div class="col text-center">

              <img class="img-preview" :src="require('@/assets/images/' + project.preview)" alt="">

            </div>
          </div>
        </div>
      </section>

      <section class="my-5">
        <div class="container">

          <div class="row">
            <div class="col-12 col-md-8 mx-auto px-3">

              <a :href="project.href" target="_blank" class="d-block btn btn-accent text-light w-fit-content mx-auto">
                Voir le site
                <i class="fas fa-external-link-alt text-white ms-2"></i>
              </a>

              <p class="resume text-deep res-fs-5 res-fs-md-6 my-5">
                <span v-html="resume.resume"></span>
              </p>

              <router-link v-if="project.id < 5" :to="{ name: 'project', params: { id: nextProjectId } }"
                           class="btn btn-accent text-white d-block mx-auto mt-4" style="width: fit-content">
                Projet suivant
                <i class="fas fa-arrow-right text-white ms-2"></i>
              </router-link>

              <router-link to="/#showcase" class="d-block btn btn-deep text-light w-fit-content mx-auto mt-4">
                <i class="fas fa-arrow-left text-white ms-2"></i>
                Retour aux projets
              </router-link>

            </div>
          </div>


        </div>
      </section>


    </SectionContent>


    <!--          <button @click="router.back()" class="btn btn-accent text-white d-block mx-auto">Go Back</button>-->
  </div>
</template>

<script setup>
import projects from "@/data/projects.js";
import resumes from "@/data/resumes.js";

import {computed, watch} from 'vue'
// import {useRouter} from 'vue-router'
// const router = useRouter();

import {useRoute} from 'vue-router'
const route = useRoute();

// const projectId = computed(route.params.id);
// console.log(projectId);

let project = computed({
  id: null,
  title: null,
  icon: null,
  desc: null,
  preview: null,
});

let resume = computed({
  id: null,
  resume: null,
});

watch(() => route, (newVal) => {
    project = projects.find(p => p.id == newVal.params.id);
    resume = resumes.find(r => r.id == newVal.params.id);
  },
  {
    immediate: true
  });

const props = defineProps({
  id: {type: Number, required: true},
});

// project = projects.find(p => p.id === props.id);


const nextProjectId = parseInt(props.id) + 1;

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

.img-preview {
  margin-top: -15vh !important;
  width: 90vw;

  @media (min-width: 768px) {
    margin-top: -22vh !important;
    width: 60vw;
  }

  @media (min-width: 960px) {
    width: 45vw;
  }
}

.resume {
  line-height: 1.8;
}
</style>


