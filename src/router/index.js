import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import alertMd from '../components/alert/index'
import buttonMd from '../components/button/index'
import cardMd from '../components/card/index'
import choseMd from '../components/chose/index'
import shareMd from '../components/share/index'
const routes = [
    { path: '/alert', component: alertMd },
    { path: '/button', component: buttonMd },
    { path: '/card', component: cardMd },
    { path: '/chose', component: choseMd },
    { path: '/share', component: shareMd }
    ]
const menuMap=new Map([
    ['/alert','弹窗'],
    ['/button','按钮'],
    ['/card','卡片'],
    ['/chose','多选'],
    ['/share','分享'],
])
export const menu=routes.map((item)=>{
   const menuName= menuMap.get(item.path)
   return {
       name:menuName,
       link:item.path
   }
})
const router = new VueRouter({routes})
export default router
