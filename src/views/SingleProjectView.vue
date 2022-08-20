<template>
    <div class="project-header-wrapper">
        <h1>
            #{{ this.$route.params.id }}
            <br>
            {{ projectData.title }}
        </h1>
    </div>
    <div class="container">
        <div class="project-body-wrapper">
            <div class="description">
                <p>{{ projectData.desc }}</p>
            </div>
            <div class="icon">
                <i :class="projectData.icon"></i>
            </div>
        </div>

    </div>
</template>

<script>
import projects from '../projects.js';

export default {
    name: "SingleProjectView",
    data() {
        return {
            projects: projects,
        }
    },
    computed: {
        projectData() {
            const currentProject = this.projects.find(p => p.id === parseInt(this.$route.params.id));
            return {
                title: currentProject.title,
                icon: currentProject.icon,
                desc: currentProject.desc,
            };
        }
    }
}
</script>

<style lang="scss" scoped>

.project-header-wrapper {

    padding: 3rem 6rem;
    text-align: center;
}

.project-body-wrapper {
    display: flex;

    .description {
        width: 50%;
        font-size: 1.375rem;
    }

    .icon {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 5rem;
    }
}
</style>