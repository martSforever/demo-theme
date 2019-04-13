<template>
    <div class="src-button" :class="[`src-button-color-${color}`]" @click="e=>$emit('click',e)">
        <slot>
            {{label}}
        </slot>
    </div>
</template>

<script>
    export default {
        name: "src-button",
        props: {
            color: {type: String, default: 'primary'},
            label: {type: String},
        },
    }
</script>