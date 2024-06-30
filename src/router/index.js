import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue"


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    // scrollBehavior(to, from, savedPosition) {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve({ left: 0, top: 0 })
    //         }, 500)
    //     })
    // },
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
    ]
});

export default router