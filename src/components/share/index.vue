<template>
    <div @click="share" :class="classNamespace('121212',[
          'type',
          'size',
          {
            plain:'plain',
            block:'block',
            round:'round'
          }
        ])">{{txt}}</div>
</template>
<script>
    import {Toast} from 'vant'
    import {createNamespace} from '../../../utils/dev/index'
    const {classNamespace}=createNamespace('share')
    export default {
        name: "index",
        props:{
            txt:{
                type:String,
                default:'分享'
            },
        },
        methods:{
            classNamespace,
            share(){
                Toast('分享成功')
            }
        }
    }
</script>

<style lang="stylus">
@import "index.styl"
</style>
