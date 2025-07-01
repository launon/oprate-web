import { createRouter, createWebHistory } from 'vue-router'

const routerHistory = createWebHistory();

const Home = () => import('../src/Home.vue');
const Index = () => import('../src/Index.vue');
const NotFound = () => import('../src/NotFound.vue');

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