<template>
    <div class="card">
        <div class="card-header">
            <h2>{{ project.title }}</h2>
            <i :class="project.icon"></i>
        </div>

        <p>{{ project.desc }}</p>

        <div class="card-footer">
            <project-link :id="project.id"></project-link>
        </div>
    </div>
</template>

<script>
import ProjectLink from "@/UI/ProjectLink";

export default {
    name: "ProjectItem",
    components: {ProjectLink},
    props: ['project'],
}
</script>

<style lang="scss" scoped>
.card {
    background-color: #f2f4f6;
    padding: 3rem 1.5rem;
    transition: all .2s ease-out;
    width: 100%;

    //&:hover {
    //    background-color: #566573;
    //    color: #f2f4f6;
    //}

    &-header {
        text-align: center;
        margin-bottom: 4rem;
    }

    &-footer {
        text-align: center;
        margin-top: 5rem;
    }
}

i {
    font-size: 3rem;
    margin-block: 1rem;
    background-color: #fff;
    border-radius: 50%;
    padding: 25px;
}

</style>