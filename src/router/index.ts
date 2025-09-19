import CategoriesView from "@/views/CategoriesView.vue"
import CategoryDetailsView from "@/views/CategoryDetailsView.vue"
import HomeView from "@/views/HomeView.vue"
import RecipeDetailsView from "@/views/RecipeDetailsView.vue"
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
        ],
    })

    return router
}
export default createRouter
