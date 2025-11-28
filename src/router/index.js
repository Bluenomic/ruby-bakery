import { createWebHashHistory, createRouter } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import ProductsPage from "@/pages/ProductsPage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import ContactPage from "@/pages/ContactPage.vue";
import ProductDetailPage from "@/pages/ProductDetailPage.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: HomePage,
    },
    {
        path: "/products",
        name: "Products",
        component: ProductsPage,
    },
    {
        path: "/about",
        name: "About",
        component: AboutPage,
    },
    {
        path: "/contact",
        name: "Contact",
        component: ContactPage,
    },
    {
        path : "/products/:id",
        name : "ProductDetail",
        component : ProductDetailPage,
    }
];

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior() {
        return { top: 0 };
    }
});

export default router;