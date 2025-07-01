import VueRouter from 'vue-router'
import Vue from 'vue';

Vue.use(VueRouter)

const Home = () => import('../views/Home.vue');
const Index = () => import('../views/Index.vue');
const NotFound = () => import('../views/NotFound.vue');

import homeRouter from './homePage.js'
import personalRouter from './personal.js'
import userRouter from './user.js'
import commodityRouter from './commodityIndex.js'

const routers = [
    {path:'/', component: Home, children: [
        {path:'/index', component: Index},
        ...homeRouter,
        ...personalRouter,
        ...userRouter,
        ...commodityRouter,
    ]},
    {path:'*', component: NotFound}
]

const router = new VueRouter({
    router: routers,
});

export default router;