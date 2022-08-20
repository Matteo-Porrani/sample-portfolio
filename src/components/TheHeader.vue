<template>
    <header>
        <div class="container">
            <nav>
                <router-link to="/">Home</router-link>
                <router-link to="/projects">Projects</router-link>
                <router-link to="/about">About</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "TheHeader"
}
</script>

<style lang="scss" scoped>

header {
    background-color: #3498db;
    border-bottom: 20px solid #f2f4f6;
    color: #f8f9fa;
    padding: 2rem;
}

nav {
    display: flex;
    justify-content: space-between;

    a,
    a:visited {
        color: inherit;
        text-decoration: none;
        padding-bottom: 4px;
        border-bottom: 2px solid transparent;

        &:hover {
            border-color: #f2f4f6;
        }

        &.router-link-exact-active {
            color: #f4d03f;
            font-weight: bold;
            padding-bottom: 4px;
            border-bottom: 2px solid #f4d03f;
        }
    }
}

</style>