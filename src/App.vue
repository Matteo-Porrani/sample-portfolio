<template>
    <the-header></the-header>
    <router-view></router-view>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
    components: {
        TheHeader
    }
}
</script>

<style lang="scss">

*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    margin: 0;
    font-size: 1.125rem;
    line-height: 1.5;
}

#app {
    font-family: 'Roboto', sans-serif;
    color: #566573;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Hepta Slab', serif;
    color: #273746;
}

 i {
     //color: #273746;
     color: #3498db;
 }

.container {
    max-width: 980px;
    margin: 0 auto;
}

.hero-title {
    text-align: center;
    margin-block: 2rem 5rem;
}

</style>
