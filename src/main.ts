import { createApp } from "vue"
import App from "@/App.vue"
import { registerPlugins } from "@/plugins"

// ✅ CSS imports from npm
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"

// ✅ Tooplate / Vegas CSS from src/assets
import "@/assets/css/vegas.min.css"
import "@/assets/css/tooplate-barista.css"

// ✅ Bootstrap JS from npm
import "bootstrap/dist/js/bootstrap.bundle.min.js"

// Create and mount app
const app = createApp(App)
registerPlugins(app).then(() => app.mount("#app"))
