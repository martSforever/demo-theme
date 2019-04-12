<template>
    <div class="app">
        <div class="line">
            <src-button :label="item" :color="item" v-for="item in  ['primary','success','warn','error','info','disabled']" :key="item"/>
        </div>
        <div class="line">
            <src-input :color="item" v-for="item in  ['primary','success','warn','error','info','disabled']" :key="item"/>
        </div>
    </div>
</template>

<script>
    import SrcButton from "../src/components/src-button";
    import SrcInput from "../src/components/src-input";

    export default {
        name: "App",
        components: {SrcInput, SrcButton}
    }
</script>

<style lang="scss">
    .app {
        height: 100vh;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        .line {
            margin-bottom: 12px;
            & > * {
                margin-right: 12px;
            }
        }
    }
</style>