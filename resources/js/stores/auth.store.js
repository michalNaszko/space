/* This code is from the great tutorial:
 * https://jasonwatmore.com/post/2022/05/26/vue-3-pinia-jwt-authentication-tutorial-example
 */

import { defineStore } from 'pinia'
import {fetchWrapper} from "@/js/helpers/fetch-wrapper";

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: null
    }),
    actions: {
        async login(username, password, _token) {
            const user = await fetchWrapper.post(`/login`, { username, password, _token });

            // update pinia state
            this.user = user;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            // redirect to previous url or default to home page
            // router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            // router.push('/login');
        }
    }
});
