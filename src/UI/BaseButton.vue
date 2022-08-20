<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "BaseButton"
}
</script>

<style scoped>
    button {
        background-color: #f4d03f;
        padding: 1rem 2rem;
        border: 0;
        font-family: inherit;
    }
</style>