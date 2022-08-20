<template>
    <div class="card">
        <div class="card-header">
            <h2>{{ project.title }}</h2>

            <i :class="project.icon"></i>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus animi dolores facilis laboriosam
            necessitatibus quae quam quas quo quos, repellendus sequi tempora tenetur totam vel vero! Ad doloremque et
            perferendis.</p>


        <div class="card-footer">
            <base-button>See more</base-button>
        </div>

    </div>
</template>

<script>
export default {
    name: "ProjectItem",
    components: {},

    props: ['project'],
}
</script>

<style lang="scss" scoped>
.card {
    background-color: #f2f4f6;
    padding: 1.5rem;
    transition: all .2s ease-out;

    &:hover {
        background-color: #566573;
        color: #f2f4f6;
    }

    &-header {
        text-align: center;
        margin-bottom: 4rem;
    }

    &-footer {
        text-align: center;
        margin-top: 2rem;
    }

}

i {
    font-size: 3rem;
    margin-block: 1rem;
}
</style>