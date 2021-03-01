<template>
    <div class="bh-button">
        <Button type="primary" round>{{txt}}</Button>
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
            }
        }
    }
</script>

<style scoped lang="stylus">
@import "index.styl"

</style>
