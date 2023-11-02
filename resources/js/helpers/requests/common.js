import {useAuthStore} from "@/js/stores";
import axios from "axios";
import {API_CONFIG} from "@/js/helpers/requests/config";

export const API = {
    fetch: 0,
    axios: 1
}

export async function loadXSRF_Token () {
    if (!$cookies.get("XSRF-TOKEN")){
        if (API_CONFIG === API.fetch)
        {
            await fetch("/sanctum/csrf-cookie", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: 'include'
            });
        }
        else
        {
            await axios.get("/sanctum/csrf-cookie");
        }
    }
}

function processResponse(response, text) {
    let data;
    if (API_CONFIG === API.fetch) {
        data = text && JSON.parse(text);
    }
    else {
        data = response.data;
    }

    if (response.statusText !== 'OK') {
        const { user } = useAuthStore();
        if ([401, 403].includes(response.status) && user) {
            // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
            user.logout();
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }

    return data;
}

export function handleResponse(response) {
    if (API_CONFIG === API.fetch)
    {
        return response.text().then(text => {
            return processResponse(response, text);
        });
    }
    else
    {
        return processResponse(response);
    }
}
