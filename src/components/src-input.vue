<template>
    <input type="text" class="src-input" :class="[`src-input-color-${color}`]">
</template>

<script>
    export default {
        name: "src-input",
        props: {
            color: {type: String, default: 'info'},
        },
    }
</script>