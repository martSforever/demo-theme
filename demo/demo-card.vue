<template>
    <div class="demo-card" :class="[`demo-card-color-${color}`]">
        <div class="demo-card-head">
            卡片标题
        </div>
    </div>
</template>

<script>
    export default {
        name: "demo-card",
        props: {
            color: {type: String, default: 'primary'},
        }
    }
</script>

<style lang="scss">
    @include themeify {
        .demo-card {
            display: inline-block;
            width: 150px;
            height: 150px;
            border: solid 1px;
            border-radius: 4px;
            .demo-card-head {
                height: 40px;
                padding: 0 12px;
                line-height: 40px;
                font-size: 13px;
                color: white;
            }
            @include pl-colors(demo-card) {
                border-color: $value;
                .demo-card-head {
                    background-color: $value;
                }
            }
        }
    }
</style>