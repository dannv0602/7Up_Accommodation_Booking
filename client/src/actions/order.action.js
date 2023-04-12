import {history} from "helpers";
import {orderService} from "services";
import {orderConstants} from "_constants";
import {alertActions} from "./alert.actions";

export const orderActions = {
    getAll,
    getByUserId,
    initBookNowItem,
    initOrder,
    create,
    getById,
    delele: _delete
};

function getById(id){
    return dispatch=>{
        orderService.getById(id)
            .then(
                res=>{
                    if(res.succes){
                        dispatch(success(res.data))
                        dispatch(alertActions.success(res.message))
                    }else{
                        dispatch(alertActions.error(res.message))
                    }

                }
            )
            .catch(
                err=>{
                    dispatch(alertActions.error(err.message))
                }
            )
    }
    function success(payload){
        return {type:orderConstants.GET_BY_ID_SUCCESS,payload}
    }
}

function initBookNowItem(data) {
    return dispatch => {
        dispatch(success(data))
        history.push('/order')
    }

    function success(data) {
        return {type: orderConstants.CREATE_BOOKNOW_SUCCESS, payload: data}
    }
}

function initOrder(data) {
    return dispatch => {
        dispatch(success(data))
        history.push('/payment')
    }

    function success(data) {
        return {type: orderConstants.INIT_ORDER_SUCCESS, payload: data}
    }
}

function create(data) {
    return dispatch => {
        orderService.create(data)
            .then(res => {
                if (res.success) {
                    history.push('/order/success')
                    console.log(res);
                } else {
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }
}

function getAll(data) {
    return dispatch => {
        dispatch(request())
        orderService.getAll()
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(res.data))
                        dispatch(alertActions.success(res.message))
                    } else {
                        dispatch(alertActions.error(res.message))
                    }
                }).catch(
            err => dispatch(alertActions.error(err.message))
        )
    }
    function request(){
        return {type: orderConstants.GETALL_REQUEST,}
    }
    function success(payload){
        return {type: orderConstants.GETALL_SUCCESS,payload}
    }
}

function getByUserId(id) {
    return dispatch => {
        orderService.getByUserId(id)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(res.data))
                        dispatch(alertActions.success(res.message))
                    } else {
                        dispatch(alertActions.error(res.message))
                    }
                }).catch(
            err => dispatch(alertActions.error(err.message))
        )
    }
    function success(payload){
        return {type: orderConstants.GETALL_BY_USERID_SUCCESS,payload}
    }
}

function _delete(data) {
    return dispatch => {

    }
}