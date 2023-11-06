import routes from "./routes"
import { createWebHashHistory, createRouter } from 'vue-router'
import {useAuthStore} from "@/js/stores";

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
    const auth = useAuthStore();
    if (to.matched.some(record => record.meta.guestOnly) && auth.isLogged()) {
        next('/');
    }
    else if (to.matched.some(record => record.meta.requiresAuth) && !auth.isLogged()) {
        next('/login');
    }
    else {
        next();
    }
});

export default router;
