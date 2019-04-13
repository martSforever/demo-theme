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
        .content{
            display: inline-block;
        }
        .line {
            margin-bottom: 12px;
            & > * {
                margin-right: 12px;
            }
        }
    }
</style>