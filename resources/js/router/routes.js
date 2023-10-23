import LoginRegisterComponent from "@/js/components/LoginRegisterComponent.vue";
import Dashboard from "@/js/components/Dashboard.vue";

const routes = [
    { path: '/', component: Dashboard },
    { path: '/login', component: LoginRegisterComponent },
]

export default routes
