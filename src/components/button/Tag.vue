<template>
    <div @click="click" class="bh-button">
        <Button  :type="type" round>{{txt}}</Button>
        <p>test</p>
    </div>
</template>

<script>
    import {Button} from 'vant'
    export default {
        name: "index",
        components:{Button},
        props:{
            txt:{
                type:String,
                default:'这是vant的按钮111'
            },
            type:{
                type:String,
                default:''
            }
        },
        methods:{
            click(){
                alert(111)
            }

        }
    }
</script>

<style scoped lang="stylus">
    @import "index.styl"

</style>
