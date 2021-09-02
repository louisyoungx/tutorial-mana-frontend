<template>
    <div class="w-full rounded shadow bg-white p-8 mb-8">
        <h2 class="text-color text-lg font-bold">
            {{title}}
        </h2>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "content-container",
        props: {
            title: String
        }
    }
</script>

<style scoped>

</style>
