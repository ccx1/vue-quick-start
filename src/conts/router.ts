import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import * as process from "process";

const basename:string = ''

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/page/Home.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: basename,
    routes
})

export default router;