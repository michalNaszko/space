/* This code is from the great tutorial:
 * https://jasonwatmore.com/post/2022/05/26/vue-3-pinia-jwt-authentication-tutorial-example
 */

import { defineStore } from 'pinia'
import { requestWrapper } from '@/js/helpers/requests'

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => {
        return {
            user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') ) : null,
            returnUrl: null
        }
    },
    actions: {
        async login(username, password) {
            const user =  await (requestWrapper.post)(`api/login`, { email: username, password: password });

            // update pinia state
            this.user = user;

            // store user details and jwt in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            // redirect to previous url or default to home page
            this.router.push(this.returnUrl || '/');
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            this.router.push('/login');
        },
        isLogged() {
            if (this.user) {
                if (this.user.token) {
                    console.log("in second if statement");
                    return true;
                }
            }
            return false;
        }
    }
});
