import { createWebHistory, createRouter } from "vue-router";
import HomePage from "@/Pages/HomePage.vue";
import Contact from "@/components/Contact.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    }
    , {
        path: "/contact",
        name: "Contact",
        component: Contact,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;