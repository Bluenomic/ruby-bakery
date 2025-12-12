import { createWebHashHistory, createRouter } from "vue-router";
import HomePage from "@/Pages/HomePage.vue";
import ProductsPage from "@/Pages/ProductsPage.vue";
import AboutPage from "@/Pages/AboutPage.vue";
import ContactPage from "@/Pages/ContactPage.vue";
import ProductDetailPage from "@/Pages/ProductDetailPage.vue";
import AboutMePage from "@/Pages/AboutMePage.vue";

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
    },
    {
        path : "/aboutme",
        name : "AboutMe",
        component : AboutMePage,
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