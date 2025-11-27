import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;