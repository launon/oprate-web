import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory();

const Home = () => import('../views/Home.vue');
const Index = () => import('../views/Index.vue');
const NotFound = () => import('../views/NotFound.vue');

import homeRouter from './homePage.js'
import personalRouter from './personal.js'
import userRouter from './user.js'
import commodityRouter from './commodityIndex.js'

const routes = [
    {path:'/', component: Home, children: [
        {path:'/index', component: Index},
        ...homeRouter,
        ...personalRouter,
        ...userRouter,
        ...commodityRouter,
    ]},
    {path:'/:pathMatch(.*)*', component: NotFound}
]

const router = new createRouter({
    history:routerHistory,
    routes,
});

export default router;