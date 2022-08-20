<template>
    <div class="about">
        <div class="container">
            <h1 class="hero-title">This is what I made... have a look!</h1>
        </div>

        <div class="container">
            <div class="showcase">
                <project-item v-for="project in projects" :key="project.id" :project="project"></project-item>
            </div>
        </div>
    </div>
</template>

<script>
import projects from '../projects.js';
import ProjectItem from "@/components/ProjectItem";

export default {
    name: "ProjectsView",
    components: {
        ProjectItem,
    },
    data() {
        return {
            projects: projects,
        }
    },
    provide() {
        return {
            projects: this.projects,
        }
    }
}
</script>

<style lang="scss" scoped>
.showcase {
    display: flex;
    align-items: start;
    gap: 1rem;
}
</style>