import {useAuthStore} from "@/js/stores/auth.store";
import {handleResponse, loadXSRF_Token} from "@/js/helpers/requests/common"

export const requestWrapperAxios = {
    get: request(axios.get),
    post: request(axios.post),
    put: request(axios.put),
    delete: request(axios.delete)
};

function request(method) {
    return async (url, body) => {
        await loadXSRF_Token();
        return method(url, body).then(async function (response) {
            return handleResponse(response);
        }).catch(function (error) {
                console.log(error);
        });
    }
}
