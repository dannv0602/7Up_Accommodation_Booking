import axiosClient from "../api/axiosClient";

export const addressService = {
    getAllProvince,
    getDistrictByProvinceId,
    getWardByDistrictId,
    getProvinceById,
    getDistrictById,
    getWardById,
}
function getAllProvince() {
    return axiosClient.get('/api/v1/provinces');
}
function getDistrictByProvinceId(id) {
    return axiosClient.get(`/api/v1/districts/province/${id}`)
}
function getWardByDistrictId(id) {
    return axiosClient.get(`/api/v1/wards/district/${id}`)
}
function getProvinceById(id){
    return axiosClient.get(`/api/v1/provinces/${id}`)
}
function getDistrictById(id){
    return axiosClient.get(`/api/v1/districts/${id}`)
}function getWardById(id){
    return axiosClient.get(`/api/v1/wards/${id}`)
}