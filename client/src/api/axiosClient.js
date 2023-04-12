import axios from "axios";
import queryString from "query-string";
import authHeader from 'helpers/auth'

const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Access-Control-Allow-Origin':true,
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
});
axiosClient.interceptors.request.use(async (config) => {
    const token = authHeader();
    if (token) {
        config.headers["Authorization"] =token; // for Node.js Express back-end
    }
    return config;
},
    (error) => {
        return Promise.reject(error);
    }
)
axiosClient.interceptors.response.use(response => {
    if (response && response.data) {
        return response.data;
    }
    return response;
}, (error) => {
    throw error;
})
export default axiosClient;