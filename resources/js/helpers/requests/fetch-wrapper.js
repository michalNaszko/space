/* This code is modified from the great tutorial:
 * https://jasonwatmore.com/post/2022/05/26/vue-3-pinia-jwt-authentication-tutorial-example
 */

import {useAuthStore} from "@/js/stores/auth.store";
import {handleResponse, loadXSRF_Token} from "@/js/helpers/requests/common"

export const requestWrapperFetch = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {
    return async (url, body) => {
        await loadXSRF_Token();

        const requestOptions = {
            method,
            credentials: 'include',
            headers: header(url),
        };
        if (body) {
            requestOptions.headers['Content-Type'] = 'application/json';
            requestOptions.body = JSON.stringify(body);
        }
        console.log(requestOptions.headers);
        return fetch(url, requestOptions).then(handleResponse);
    }
}

function header(url) {
    let reqHeader = authHeader(url);
    reqHeader["X-XSRF-TOKEN"] = $cookies.get("XSRF-TOKEN");
    return reqHeader;
}

// helper functions

function authHeader(url) {
    // return auth header with jwt if user is logged in and request is to the api url
    const { user } = useAuthStore();
    const isLoggedIn = !!user?.token;
    if (isLoggedIn) {
        return { Authorization: `Bearer ${user.token}` };
    } else {
        return {};
    }
}
