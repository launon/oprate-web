import { createRouter, createWebHistory } from 'vue-router';

const routerHistory = createWebHistory();

const Home = () => import('../views/Home.vue');
const Index = () => import('../views/Index.vue');
const NotFound = () => import('../views/NotFound.vue');

import homeRouter from './homePage.js';
import personalRouter from './personal.js';
import userRouter from './user.js';
import articleRouter from './articleIndex.js';

const routes = [
    {
        path: '/', component: Home, children: [
            { path: '/index', component: Index },
            ...homeRouter,
            ...personalRouter,
            ...userRouter,
            ...articleRouter,
        ]
    },
    { path: '/:pathMatch(.*)*', component: NotFound }
];

const router = new createRouter({
    history: routerHistory,
    routes,
});

//添加路由钩子函数，默认/进入首页
router.beforeEach(async (to, from, next) => {
    if (to.fullPath === '/') {
        router.push('/homepage/index');
    } else {
        next();
    }
});

export default router;