<template>
    <div @click="share" class="bh-share">{{txt}}</div>
</template>
<script>
    import {Toast} from 'vant'
    export default {
        name: "index",
        props:{
            txt:{
                type:String,
                default:'分享'
            },
        },
        methods:{
            share(){
                Toast('分享成功')
            }
        }
    }
</script>

<style lang="stylus">
@import "index.styl"
</style>
