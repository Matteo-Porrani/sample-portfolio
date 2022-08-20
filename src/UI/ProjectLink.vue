<template>
    <router-link :to="projectPath">View Project</router-link>
</template>

<script>
export default {
    name: "ProjectLink",
    props: ['id'],
    computed: {
        projectPath() {
            return '/projects/' + this.id;
        }
    }
}
</script>

<style lang="scss" scoped>
a {
    background-color: #f4d03f;
    //color: #566573;
    color: #273746;
    text-decoration: none;
    padding: 1rem 2rem;
    border: 0;
    font-family: inherit;

    &:hover {
        background-color: #D4ac0d;
    }
}
</style>