import { createApp } from 'vue'
import VueRouter from 'vue-router'
import LoginRegisterComponent from "./components/LoginRegisterComponent.vue";

const router = VueRouter.createRouter({})

createApp({})
    .component('login-register-component', LoginRegisterComponent)
    .use(router)
    .mount('#app')
