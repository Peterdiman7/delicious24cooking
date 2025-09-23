import AboutView from "@/views/AboutView.vue"
import CategoriesView from "@/views/CategoriesView.vue"
import CategoryDetailsView from "@/views/CategoryDetailsView.vue"
import ContactsView from "@/views/ContactsView.vue"
import CookiesView from "@/views/CookiesView.vue"
import HomeView from "@/views/HomeView.vue"
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue"
import RecipeDetailsView from "@/views/RecipeDetailsView.vue"
import TermsConditionsView from "@/views/TermsConditionsView.vue"
import { createRouter as createVueRouter, createWebHistory } from "vue-router"

import type { RouteLocationNamedRaw } from "vue-router"

export const rootRoute: RouteLocationNamedRaw = { name: "portfolio" }
const createRouter = () => {
    const router = createVueRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: "/",
                name: "home",
                component: HomeView,
            },
            {
                path: "/categories",
                name: "categories",
                component: CategoriesView,
            },
            {
                path: "/categories/:id",
                name: "category-details",
                component: CategoryDetailsView,
            },
            {
                path: "/recipe/:id",
                name: "recipe-detail",
                component: RecipeDetailsView,
            },
            {
                path: "/contacts",
                name: "contacts",
                component: ContactsView,
            },
            {
                path: "/privacy-policy",
                name: "privacy-policy",
                component: PrivacyPolicyView,
            },
            {
                path: "/terms-conditions",
                name: "terms-conditions",
                component: TermsConditionsView,
            },
            {
                path: "/about",
                name: "about",
                component: AboutView,
            },
            {
                path: "/cookies",
                name: "cookies",
                component: CookiesView,
            },
        ],
    })

    return router
}
export default createRouter
