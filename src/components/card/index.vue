<template>
    <div class="bh-card">
        <slot></slot>
    </div>
</template>

<script>
    import {Button} from 'vant'
    export default {
        name: "index",
        components:{Button}
    }
</script>

<style scoped lang="stylus">
    @import "index.styl"
</style>
