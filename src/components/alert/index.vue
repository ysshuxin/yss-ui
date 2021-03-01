<template>
    <div class="bh-alert" @click="click">alert</div>
</template>

<script>
    export default {
        name: "index",
        methods:{
            click(){
                alert('这是一个测试弹出组件')
            }
        }
    }
</script>

<style lang="stylus">
@import "index.styl"
</style>
