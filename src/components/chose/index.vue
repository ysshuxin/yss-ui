<template>
<div>
    <card>
        <slot>
            <br>
            <p>zheshiyigedd</p>
        </slot>
    </card>
</div>
</template>

<script>

    import card from '../card/index'
    export default {
        name: "index",
        components:{card}
    }
</script>

<style scoped lang="stylus">


</style>
