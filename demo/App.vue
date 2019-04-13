<template>
    <div class="app">
        <div class="content">
            <h4>切换主题</h4>
            <div class="line">
                <src-button label="组件库默认主题" @click="$plain.changeTheme('default')"/>
                <src-button label="组件库黑色主题" @click="$plain.changeTheme('black')"/>
                <src-button label="自定义主题" @click="$plain.changeTheme('custom')"/>
            </div>
            <h4>组件库组件及其主题样式</h4>
            <div class="line">
                <src-button :label="item" :color="item" v-for="item in  ['primary','success','warn','error','info','disabled']" :key="item"/>
            </div>
            <div class="line">
                <src-input :color="item" v-for="item in  ['primary','success','warn','error','info','disabled']" :key="item"/>
            </div>
            <h4>开发者自定义组件及其主题样式</h4>
            <div class="line">
                <demo-card :color="item" v-for="item in  ['primary','success','warn','error','info','disabled']" :key="item"/>
            </div>
        </div>
    </div>
</template>

<script>
    import SrcButton from "../src/components/src-button";
    import SrcInput from "../src/components/src-input";
    import DemoCard from "./demo-card";

    export default {
        name: "App",
        components: {DemoCard, SrcInput, SrcButton}
    }
</script>

<style lang="scss">
    html, body {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    @include themeify {
        .app {
            height: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: $p-background-color;
            transition: all 0.15s;
            h4 {
                color: $p-color-title;
            }
            .content {
                display: inline-block;
                background-color: $p-background-color-light;
                transition: all 1s;
                padding: 12px 24px;
                border-radius: 4px;
            }
            .line {
                margin-bottom: 12px;
                & > * {
                    margin-right: 12px;
                }
            }
        }
    }
</style>