/* This code is modified from the great tutorial:
 * https://jasonwatmore.com/post/2022/05/26/vue-3-pinia-jwt-authentication-tutorial-example
 */

import {useAuthStore} from "@/js/stores/auth.store";

export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

async function request(method) {
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

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);

        if (!response.ok) {
            const { user } = useAuthStore();
            if ([401, 403].includes(response.status) && user) {
                // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
                user.logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}

async function loadXSRF_Token () {
    if (!$cookies.get("XSRF-TOKEN")){
        let ret = await fetch("/sanctum/csrf-cookie", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            credentials: 'include'
        });
        console.log(ret);
    }
}
