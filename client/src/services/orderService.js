import axiosClient from "api/axiosClient";

export const orderService = {
    create,
    getAll,
    getByUserId,
    getById
}
function getById(id){
    const url = `/api/v1/orders/${id}`;
    return axiosClient.get(url);
}
function getByUserId(id){
    const url = `/api/v1/orders/user/${id}`;
    return axiosClient.get(url);
}
function getAll(){
    const url = '/api/v1/orders/';
    return axiosClient.get(url)
}
function create(data) {
    const url = '/api/v1/orders/';
    return axiosClient.post(url, data)
}