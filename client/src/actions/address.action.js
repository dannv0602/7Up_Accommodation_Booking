import { addressService } from 'services';
import { addressConstants } from '_constants';

export const addressActions = {
    getAllProvince,
    getAllDistrict,
    getAllWard,
    getProvince, 
    getDistrict,
    getWard
};

function getAllProvince() {
    return dispatch => {
        addressService.getAllProvince()
            .then(res => dispatch(success(res.data)))
    }
    function success(provinces) { return { type: addressConstants.GET_ALL_PROVINCE, payload: provinces } }
}

function getAllDistrict(id) {
    return dispatch => {
        addressService.getDistrictByProvinceId(id)
            .then(res => dispatch(success(res.data)))
    }
    function success(districts) { return { type: addressConstants.GET_ALL_DISTRICT, payload: districts } }
}

function getAllWard(id) {
    return dispatch => {
        addressService.getWardByDistrictId(id)
            .then(res => dispatch(success(res.data)))
    }
    function success(wards) { return { type: addressConstants.GET_ALL_WARD, payload: wards } }
}
function getProvince(id) {
    return dispatch => {
        addressService.getProvinceById(id)
            .then(res => dispatch(success(res.data)))
    }
    function success(province) { return { type: addressConstants.GET_PROVINCE, payload: province } }
}
function getDistrict(id) {
    return dispatch => {
        addressService.getDistrictById(id)
            .then(res => dispatch(success(res.data)))
    }
    function success(district) { return { type: addressConstants.GET_DISTRICT, payload: district } }
}
function getWard(id) {
    return dispatch => {
        addressService.getWardById(id)
            .then(res => dispatch(success(res.data)))
    }
    function success(ward) { return { type: addressConstants.GET_WARD, payload: ward } }
}