import {useAuthStore} from "@/js/stores/auth.store";
import {handleResponse, loadXSRF_Token} from "@/js/helpers/requests/common"

export const requestWrapper = {
    get: request(axios.get),
    post: request(axios.post),
    put: request(axios.put),
    delete: request(axios.delete)
};

async function request(method) {
    return async (url, body) => {
        await loadXSRF_Token();
        method(url, body).then(function (response) {
            handleResponse(response);
        }).catch(function (error) {
                console.log(error);
        });
    }
}
