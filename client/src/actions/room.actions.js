import {roomConstants} from "_constants";
import {roomsService} from "services/roomsService";
import {alertActions} from "./index";

export const roomActions = {
    getAll,
    getAllDeleted,
    getById,
    restore,
    remove,
    create,
    update,
    delete: _delete,
    groupByProvince,
    getByProvince,
    search,
    setPageLimit,
    sortByPrice,
};

function sortByPrice(type) {
    return dispatch => {
        switch (type) {
            case "increase":
                dispatch(increase())
                return;
            case "decrease":
                dispatch(decrease())
                return;
            default :
                return;

        }
    }

    function increase() {
        return {type: roomConstants.SORT_INCREASE_BY_PRICE}
    }

    function decrease() {
        return {type: roomConstants.SORT_DECREASE_BY_PRICE}
    }
}

function setPageLimit(pageLimit) {
    return dispatch => {
        dispatch(success(pageLimit))
    }

    function success(payload) {
        return {type: roomConstants.SET_PAGE_LIMIT, payload: payload}
    }
}


function search(type, key) {
    return dispatch => {
        switch (type) {
            case "name":
                dispatch(searchByName(key));
                return;
            default:
                dispatch(searchByName(key));
        }
    };

    function searchByName(key) {
        return {type: roomConstants.SEARCH_BY_NAME, key};
    }


}

function getById(id) {
    return dispatch => {
        roomsService.getById(id).then(res => {
            console.log(res)
            if (res.success) {
                dispatch(success(res.data));
            } else {
                dispatch(failure(res.message));
            }
        });
    };

    function success(room) {
        return {type: roomConstants.GETBYID_SUCCESS, room};
    }

    function failure(error) {
        return {type: roomConstants.GETBYID_FAILURE, error};
    }
}

function getAllDeleted() {
    return dispatch => {
        dispatch(request());
        roomsService.getAllDeleted()
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(res.data));
                        dispatch(alertActions.success(res.message));
                    } else {
                        dispatch(failure());
                        dispatch(alertActions.error(res.message));
                    }
                }
            ).catch(error => dispatch(failure(error)));
    };

    function request() {
        return {type: roomConstants.GETALLDELETED_REQUEST};
    }

    function success(rooms) {
        return {type: roomConstants.GETALLDELETED_SUCCESS, rooms};
    }

    function failure(error) {
        return {type: roomConstants.GETALLDELETED_FAILURE, error};
    }
}

function getAll() {
    return dispatch => {
        dispatch(request());
        roomsService.getAll()
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(res.data));
                        dispatch(alertActions.success(res.message));
                    } else {
                        dispatch(failure());
                        dispatch(alertActions.error(res.message));
                    }
                }
            ).catch(error => dispatch(failure(error)));
    };

    function request() {
        return {type: roomConstants.GETALL_REQUEST};
    }

    function success(rooms) {
        return {type: roomConstants.GETALL_SUCCESS, rooms};
    }

    function failure(error) {
        return {type: roomConstants.GETALL_FAILURE, error};
    }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));
        roomsService.deleteRoom(id)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(id));
                        dispatch(alertActions.success(res.message));
                    } else {
                        dispatch(failure(id));
                        dispatch(alertActions.error(res.message));
                    }
                }
            ).catch(error => dispatch(failure(error)));
    };

    function request(id) {
        return {type: roomConstants.DELETE_REQUEST, id};
    }

    function success(id) {
        return {type: roomConstants.DELETE_SUCCESS, id};
    }

    function failure(id, error) {
        return {type: roomConstants.DELETE_FAILURE, id, error};
    }
}

function create(room) {
    return dispatch => {
        dispatch(request(room));
        roomsService.create(room)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(res.data));
                        dispatch(alertActions.success("Create room successful"));
                    } else {
                        dispatch(failure(res.message));
                        dispatch(alertActions.error(res.message));
                    }
                })
            .catch(
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error.message));
                }
            );
    };

    function request(room) {
        return {type: roomConstants.CREATE_REQUEST, room};
    }

    function success(room) {
        return {type: roomConstants.CREATE_SUCCESS, room};
    }

    function failure(error) {
        return {type: roomConstants.CREATE_FAILURE, error};
    }
}

function update(room, data) {
    return dispatch => {
        dispatch(request(room));
        roomsService.update(room.id, data)
            .then(res => {
                if (res.success) {
                    dispatch(success(res.data));
                    console.log(res.data);
                    dispatch(alertActions.success(res.message));
                }
            }).catch(error => {
            dispatch(failure(error));
            dispatch(alertActions.error(error.message));
        });
    };

    function request(room) {
        return {type: roomConstants.UPDATE_REQUEST, room};
    }

    function success(room) {
        return {type: roomConstants.UPDATE_SUCCESS, room};
    }

    function failure(error) {
        return {type: roomConstants.UPDATE_FAILURE, error};
    }
}

function remove(id) {
    return dispatch => {
        roomsService.removeRoom(id)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(id));
                        dispatch(alertActions.success(res.message));
                    }
                }
            )
            .catch(error => {
                dispatch(alertActions.error(error.message));
            });

    };

    function success(id) {
        return {type: roomConstants.REMOVE_SUCCESS, id};
    }
}

function restore(id) {
    return dispatch => {
        roomsService.restoreRoom(id)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(id));
                        dispatch(alertActions.success(res.message));
                    }
                }
            )
            .catch(error => {
                dispatch(alertActions.error(error.message));
            });

    };

    function success(id) {
        return {type: roomConstants.RESTORE_SUCCESS, id};
    }
}

function groupByProvince() {
    return dispatch => {
        roomsService.groupByProvince()
            .then(res => {
                dispatch(success(res.data));
            });
    };

    function success(rooms) {
        return {type: roomConstants.GROUP_BY_PROVINCE_SUCCESS, rooms};
    }
}

function getByProvince(id) {
    return dispatch => {
        roomsService.getByProvince(id)
            .then(res => {
                dispatch(success(res.data));
            });
    };

    function success(rooms) {
        return {type: roomConstants.GET_BY_PROVINCE_SUCCESS, rooms};
    }
}
