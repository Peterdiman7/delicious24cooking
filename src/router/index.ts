import CategoriesView from "@/views/CategoriesView.vue"
import DashboardView from "@/views/DashboardView.vue"
import { createRouter as createVueRouter, createWebHistory } from "vue-router"

import type { RouteLocationNamedRaw } from "vue-router"

export const rootRoute: RouteLocationNamedRaw = { name: "portfolio" }
const createRouter = () => {
    const router = createVueRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes: [
            {
                path: "/",
                name: "dashboard",
                component: DashboardView,
            },
            {
                path: "/categories",
                name: "categories",
                component: CategoriesView,
            },
        ],
    })

    return router
}
export default createRouter
