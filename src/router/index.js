import { createRouter, createWebHistory } from 'vue-router';

import index from '@/components/index.vue';
import AboutPage from '@/components/about.vue'


const routes = [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),  // 使用 HTML5 history 模式
    routes
});

export default router;
