import AboutView from "@/views/AboutView.vue"
import CancelSubscriptionView from "@/views/CancelSubscriptionView.vue"
import CategoriesView from "@/views/CategoriesView.vue"
import CategoryDetailsView from "@/views/CategoryDetailsView.vue"
import ContactsView from "@/views/ContactsView.vue"
import CookiesView from "@/views/CookiesView.vue"
import HomeView from "@/views/HomeView.vue"
import LoginView from "@/views/LoginView.vue"
import PaymentPlansView from "@/views/PaymentPlansView.vue"
import PrivacyPolicyView from "@/views/PrivacyPolicyView.vue"
import RecipeDetailsView from "@/views/RecipeDetailsView.vue"
import RegisterView from "@/views/RegisterView.vue"
import TermsConditionsView from "@/views/TermsConditionsView.vue"
import { createRouter as createVueRouter, createWebHistory } from "vue-router"

import type { RouteLocationRaw } from "vue-router"

export const rootRoute: RouteLocationRaw = { name: "portfolio" }

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
                meta: { requiresAuth: true },
            },
            {
                path: "/recipe/:id",
                name: "recipe-detail",
                component: RecipeDetailsView,
                meta: { requiresAuth: true },
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
            {
                path: "/cancel-subscription",
                name: "cancel-subscription",
                component: CancelSubscriptionView,
                meta: { requiresAuth: true },
            },
            {
                path: "/payment-plans",
                name: "payment-plans",
                component: PaymentPlansView,
            },
            {
                path: "/login",
                name: "login",
                component: LoginView,
                meta: { requiresGuest: true },
            },
            {
                path: "/register",
                name: "register",
                component: RegisterView,
                meta: { requiresGuest: true },
            },
        ],
    })

    // Global route guard
    router.beforeEach(async (to, _from, next) => {
        const requiresAuth = to.matched.some(record => (record.meta as any)?.requiresAuth === true)
        const requiresGuest = to.matched.some(record => (record.meta as any)?.requiresGuest === true)

        let loggedIn = false

        try {
            const res = await fetch("https://back.delicious24cooking.com/auth/me", {
                credentials: "include"
            })
            loggedIn = res.ok
        } catch (err) {
            loggedIn = false
        }

        if (requiresAuth && !loggedIn) {
            // Not logged in → redirect to login
            next({ name: "login" })
        } else if (requiresGuest && loggedIn) {
            // Logged in → redirect to home
            next({ name: "home" })
        } else {
            next()
        }
    })

    return router
}

export default createRouter
