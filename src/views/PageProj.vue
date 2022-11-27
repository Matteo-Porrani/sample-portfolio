<template>
  <div class="page page-project">

    <SectionIntro v-if="project">

      <ProjectHeader :project="project"/>

    </SectionIntro>


    <SectionContent v-if="project">

      <section class="my-5">
        <div class="container">
          <div class="row">
            <div class="col text-center">

              <img class="img-preview" :src="require('@/assets/images/' + project.preview)" alt="aperçu du projet">

            </div>
          </div>
        </div>
      </section>

      <section class="my-5">
        <div class="container">

          <div class="row">
            <div class="col-12 col-md-8 mx-auto px-3">

              <a :href="project.href" target="_blank" class="d-block btn btn-accent text-light w-fit-content mx-auto" title="voir le site">
                Voir le site
                <i class="fas fa-external-link-alt text-white ms-2"></i>
              </a>

              <p class="resume text-deep res-fs-5 res-fs-md-6 my-5">
                <span v-html="resume.resume"></span>
              </p>

            </div>
          </div>

          <div class="row flex-column flex-md-row mt-3">

            <div class="col-md-6 text-center text-md-end">
              <router-link to="/#showcase"
                           class="btn btn-outline-deep w-50"
                           title="retour aux projets">
                <i class="fas fa-arrow-left me-2"></i>
                Retour <span class="d-none d-lg-inline">aux projets</span>
              </router-link>
            </div>

            <div class="col-md-6 text-center text-md-start mt-3 mt-md-0">
              <router-link v-if="project.id < 5" :to="{ name: 'project', params: { id: nextProjectId } }"
                           class="btn btn-accent text-light w-50"
                           title="projet suivant">
                Projet suivant
                <i class="fas fa-arrow-right text-white ms-2"></i>
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
import ProjectHeader from '@/components/ProjectHeader.vue';
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

.img-preview {
  margin-top: -15vh !important;
  width: 90vw;

  @media (min-width: 768px) {
    margin-top: -22vh !important;
    width: 80vw;
  }

  @media (min-width: 992px) {
    margin-top: -18vh !important;
  }

  @media (min-width: 1200px) {
    margin-top: -16vh !important;
    width: 60vw;
  }

  @media (min-width: 1600px) {
    margin-top: -20vh !important;
    width: 60vw;
  }
}

.resume {
  line-height: 1.8;
}
</style>


