<template>
<div class="main">
    <div class="title">文档</div>
    <div class="content">
        <div class="menu">
            <ul>
                <router-link v-for="(item,i) in menu" :to="item.link" :key="i">
                    <li>{{item.name}}</li>
                </router-link>
            </ul>
        </div>
        <div class="show-content">
                <router-view></router-view>
        </div>
    </div>
</div>
</template>
<script>
   import {menu} from '@/router/index'
    export default {
        name: "App",
        computed:{
            menu(){
                return menu
            }
        },
        mounted() {
        }
    }
</script>

<style scoped lang="stylus">
.main
    width 100%
    height 100vh
    padding-top 40px
    box-sizing border-box
    .title
        background #001938
        color #fff
        height 40px
        line-height 40px
        padding 0 40px
        position fixed
        top 0
        width 100%
        left 0
    .content
        display flex
        align-items center
        justify-content space-between
        background #f7f8fa
        height 100%
        .menu
            width 200px
            flex none
            height 100%
            overflow-y scroll
            background #fff
            box-shadow: 0 8px 12px #ebedf0;
            padding 20px
            .router-link-active
                  li
                     color #4fc08d
            a
                text-decoration none
                li
                    margin 10px 0
                    color #666
                    text-decoration none
                    font-size 14px
                    list-style none
        .show-content
            flex 1
            display flex
            padding 20px
            height 100%
            align-items start
            justify-content start
            overflow-y scroll
</style>
