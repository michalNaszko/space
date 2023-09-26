/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import '@/sass/app.scss';
import { createApp } from 'vue';
import {createRouter, createWebHistory} from 'vue-router'
/* import font awesome icon component */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faMeteor } from '@fortawesome/free-solid-svg-icons'
import { faIdCard } from '@fortawesome/free-solid-svg-icons'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faMeteor)
library.add(faIdCard)
library.add(faNoteSticky)
library.add(faUsers)
library.add(faChartLine)
library.add(faInfo)
library.add(faBars)

import BootstrapVueNext from 'bootstrap-vue-next'

// Optional, since every component imports their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
    components,
    directives,
})

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginRegisterComponent
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({})
    .use(vuetify)
    .use(BootstrapVueNext)
    .use(router);

import ExampleComponent from './components/ExampleComponent.vue';
import LoginRegisterComponent from "./components/LoginRegisterComponent.vue";
import Sidebar from "@/js/components/Sidebar/Sidebar.vue";
import Dashboard from "@/js/components/Dashboard.vue";

app.component('example-component', ExampleComponent);
app.component('login-register-component', LoginRegisterComponent);
app.component('dashboard-component', Dashboard);
app.component('font-awesome-icon', FontAwesomeIcon);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.mount('#app');
