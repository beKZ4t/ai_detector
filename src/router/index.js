import {createRouter, createWebHistory} from "vue-router";
import Home from "@/views/home/index.vue";
import Login from "@/views/login/index.vue";
import Profile from "@/views/profile/index.vue";
import Detector from "@/views/detector/index.vue";
import Register from "@/views/register/index.vue";
import Homeuser from "@/views/homeuser/index.vue";
import Result from "@/views/result/index.vue"
import History from "@/views/history/index.vue";
import Payments from "@/views/payments/index.vue";




const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },

    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/profile',
        name: 'profile',
        component: Profile
    },
    {
        path: '/detector',
        name: 'detector',
        component: Detector
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/homeuser',
        name: '/homeuser',
        component: Homeuser
    },
    {
        path: '/result',
        name: '/result',
        component: Result
},
    {
        path: '/history',
        name: '/history',
        component: History
    },

    {
        path: '/payments',
        name: '/payments',
        component: Payments
    },



]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;