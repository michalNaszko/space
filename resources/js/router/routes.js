import LoginRegisterComponent from "@/js/components/LoginRegisterComponent.vue";
import Dashboard from "@/js/components/Dashboard.vue";
import TableComponent from "@/js/components/Table/TableComponent.vue";

const routes = [
    {
        path: '/', component: Dashboard, meta: { requiresAuth: true },
        children: [
            { path: '', redirect: '/users' },
            { path: 'users', component: TableComponent }
        ],
    },
    { path: '/login', component: LoginRegisterComponent, meta: { guestOnly: true } },
]

export default routes
