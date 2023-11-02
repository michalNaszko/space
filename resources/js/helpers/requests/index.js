import {API} from "@/js/helpers/requests/common";
import {API_CONFIG} from "@/js/helpers/requests/config";
import {requestWrapperAxios} from "@/js/helpers/requests/axios-wrapper";
import {requestWrapperFetch} from "@/js/helpers/requests/fetch-wrapper";

export const requestWrapper = API_CONFIG === API.axios ? requestWrapperAxios : requestWrapperFetch;
