<template>
    <div class="home">
        <div class="container">

            <div class="img-wrapper">
                <img src="../assets/me.jpg" alt="">
            </div>

            <h1 class="hero-title">Hi, I'm Adam.<br>I love to make websites!</h1>
            <p>
                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolores eveniet facilis libero, quia saepe sed voluptate. Aliquid autem blanditiis commodi, delectus eaque, nesciunt nihil obcaecati quis repellendus sed ullam?</span>
                <span>Autem facilis incidunt, magni minima neque numquam optio ut! A alias at, cumque deleniti hic nihil nostrum odit perferendis possimus, qui, rem repudiandae similique veritatis! Accusamus adipisci natus omnis vitae.</span>
                <span>A accusantium earum error fuga fugiat necessitatibus, neque officia, perferendis, quis quos recusandae reiciendis sapiente sint suscipit tenetur vero voluptatibus. Delectus dolorum eaque fugiat libero magnam quia quisquam velit voluptas!</span>
            </p>
        </div>
    </div>
</template>

<script>
// @ is an alias to '/src'


export default {
    name: 'HomeView',
    components: {}
}
</script>

<style lang="scss" scoped>
h1 {
    text-align: left;
}

.img-wrapper {
    text-align: center;

    img {
        border: 2px solid #566573;
        border-radius: 50%;
        height: 40vh;
        margin-top: 2rem;
    }
}

</style>
