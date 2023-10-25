import routes from "./routes"
import { createWebHashHistory, createRouter } from 'vue-router'
import {useAuthStore} from "@/js/stores";

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach(async (to) => {
    const auth = useAuthStore();
    console.log("Before each!");
    if (!auth.user) {
        console.log("User not yet authorized!");
    }
});

export default router;
