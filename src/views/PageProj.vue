<template>
  <div class="page page-project">

    <SectionIntro>

      <div class="row my-4 my-md-5">
        <div class="col">
          <h1 class="text-center text-white res-fs-14 res-fs-md-16 ">{{ project.title }}</h1>
        </div>
      </div>

      <div class="row my-3">
        <div class="col">
          <div class="icon-wrapper position-relative mx-auto rounded rounded-pill overflow-hidden">
            <img class="position-absolute top-50 start-50 translate-middle" src="../assets/sketch1.svg" alt="">
            <i :class="project.icon" class="res-fs-18 res-fs-md-24 position-absolute top-50 start-50 text-deep"></i>
            <i :class="project.icon" class="res-fs-18 res-fs-md-24 position-absolute top-50 start-50 text-white translate-middle"></i>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <p class="text-white text-center fs-5 mt-3">{{ project.desc }}</p>
        </div>
      </div>

    </SectionIntro>


    <SectionContent>

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

              <a href="" class="d-block btn btn-accent text-light w-fit-content mx-auto">
                Voir le site
                <i class="fas fa-arrow-right text-white ms-2"></i>
              </a>

              <p class="my-5 text-secondary">
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad alias dignissimos dolor dolorem dolorum earum enim est incidunt magni maiores mollitia nostrum, pariatur, perferendis recusandae rem rerum saepe sunt vero.</span>
                <br>
                <br>
                <span>Ab accusantium expedita fugit minus odit quaerat unde voluptates! Ad architecto consequatur debitis dolor exercitationem expedita harum inventore labore, laboriosam, nam natus nisi qui rem sapiente, similique temporibus totam voluptas.</span><span>Ad atque eveniet labore molestias non, quisquam reiciendis ut. Adipisci eligendi error nisi nobis optio quisquam rem repellendus rerum sunt tempore! Ad dolores ea earum, fugit impedit suscipit ullam vel.</span>
                <br>
                <br>
                <span>A aliquid aperiam assumenda consectetur dolore eaque eligendi, facilis itaque labore placeat possimus, quia quod repellendus? Accusantium beatae eius eligendi inventore ipsum laborum molestiae molestias officia saepe tenetur. Debitis, odio.</span>
              </p>

              <router-link to="/" class="d-block btn btn-deep text-light w-fit-content mx-auto mt-4">
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
// import {computed} from 'vue'
// import {useRouter} from 'vue-router'
import projects from '../projects';

// const router = useRouter();

const props = defineProps({
  id: {type: Number, required: true},
});

const project = projects.find(p => p.id === props.id);

// const nextProjectHref = computed(() => `/project/${props.id + 1}`);

// const previewPath = computed(() => '/img/' + project.preview);

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
  margin-top: -10vh !important;
  width: 90vw;

  @media (min-width: 768px) {
    margin-top: -20vh !important;
    width: 60vw;
  }

  @media (min-width: 960px) {
    width: 45vw;
  }
}
</style>