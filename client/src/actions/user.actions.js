import {history} from 'helpers';
import {userService} from 'services';
import {userConstants} from '_constants';
import {alertActions} from './index';

// data respone api 
/* {
    action:"",
    success:boolean,
    message:""
    data:[] || {}
}
*/
export const userActions = {
    login,
    logout,
    register,
    getAll,
    getById,
    create,
    update,
    getAllDeleted,
    delete: _delete,
    restore,
    searchByEmail,
    remove,
    forgot,
    checkPasswordResetToken,
    resetPassword,
    registerVerified
};
function registerVerified(id, token) {
    return dispatch => {
        userService.registerVerified(id, token).then(
            res => {
                console.log(res)
                if (res.success) {
                    history.push('/login')
                    dispatch(alertActions.success(res.message))
                }else{
                    history.push('/login')
                    dispatch(alertActions.error(res.message))
                }
            }
        ).catch(
            err => {
                history.push('/login')
                dispatch(alertActions.error(err.message))
            })
    }
}
function checkPasswordResetToken(token, id) {
    return dispatch => {
        userService.checkPasswordResetToken(token, id)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success())
                        history.push('/reset')
                        dispatch(alertActions.success(res.message))
                    } else {
                        history.push('/forgot');
                        dispatch(alertActions.error(res.message))
                    }
                }
            )
            .catch(err => {
                history.push('/forgot');
                dispatch(alertActions.error(err.message))
            })
    }

    function success() {
        return {type: userConstants.RESET_PASSWORD_SUCCESS, payload: {token, id}}
    }
}

function resetPassword(data) {
    return dispatch => {
        userService.resetPassword(data)
            .then(res => {
                if (res.success) {
                    history.push("/login");
                    dispatch(success())
                    dispatch(alertActions.success(res.message))
                } else {
                    console.log(res)
                    dispatch(alertActions.error(res.message))
                }
            })
            .catch(err => {
                console.log(err)
                dispatch(alertActions.error(err.message))

            })
    }

    function success() {
        return {type: userConstants.FORGOT_PASSWORD_SUCCESS}
    }
}

function forgot(email) {
    return dispatch => {
        userService.forgot(email)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success())
                        history.push('/forgot-success')
                        dispatch(alertActions.success("Please check your email to reset password"))

                    } else {
                        dispatch(alertActions.error(res.message))
                    }
                }
            )
            .catch(
                err => dispatch(alertActions.error(err.message))
            )
    }

    function success(payload) {
        return {type: userConstants.FORGOT_PASSWORD_SUCCESS, payload}
    }
}

function searchByEmail(type, key) {
    return dispatch => {
        switch (type) {
            case "email":
                dispatch(searchByEmail(key));
                return;
            case "username":
                dispatch(searchByUsername(key));
                return;
            case "fullname":
                dispatch(searchByFullname(key));
                return;
            default:
                dispatch(searchByEmail(key));
        }
    }

    function searchByEmail(key) {
        return {type: userConstants.SEARCH_BY_EMAIL, key}
    }

    function searchByUsername(key) {
        return {type: userConstants.SEARCH_BY_USERNAME, key}
    }

    function searchByFullname(key) {
        return {type: userConstants.SEARCH_BY_FULLNAME, key}
    }

}

function getById(id) {
    return dispatch => {
        dispatch(request(id))
        userService.getById(id)
            .then(res => {
                    console.log(res)
                    if (res.success) dispatch(success(res.data))
                    else dispatch(failure(res.message))
                }
            )
    }

    function request(id) {
        return {type: userConstants.GETBYID_REQUEST, id}
    }

    function success(user) {
        return {type: userConstants.GETBYID_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.GETBYID_FAILURE, error}
    }
}

function login(username, password) {
    return dispatch => {
        dispatch(request({username}));
        userService.login(username, password)
            .then(res => {
                if (res.success) {
                    dispatch(success(res.data));
                    localStorage.setItem('user', JSON.stringify(res.data))
                    history.push('/');
                } else {
                    dispatch(failure(res.message));
                    dispatch(alertActions.error(res.message));
                }
            }).catch(error => {
            dispatch(failure(error));
            dispatch(alertActions.error("Wrong username or password"));
        });


    };

    function request(username) {
        return {type: userConstants.LOGIN_REQUEST, username}
    }

    function success(user) {
        return {type: userConstants.LOGIN_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.LOGIN_FAILURE, error}
    }
}

function logout() {
    userService.logout();
    return {type: userConstants.LOGOUT};
}

function register(user) {
    return dispatch => {
        dispatch(request(user));
        userService.register(user)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success());
                        history.push('/login');
                        dispatch(alertActions.success('Registration successful, please check mail to verify'));
                    } else {
                        dispatch(failure(res.message));
                        dispatch(alertActions.error(res.message))
                    }
                })
            .catch(
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error.message));
                }
            );
    };

    function request(user) {
        return {type: userConstants.REGISTER_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.REGISTER_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.REGISTER_FAILURE, error}
    }
}

function create(user) {
    return dispatch => {
        dispatch(request(user));
        userService.create(user)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(res.data));
                        dispatch(alertActions.success(res.message));
                    } else {
                        dispatch(failure(res.message));
                        dispatch(alertActions.error(res.message))
                    }
                })
            .catch(
                error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error.message));
                }
            );
    };

    function request(user) {
        return {type: userConstants.CREATE_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.CREATE_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.CREATE_FAILURE, error}
    }
}


function update(user, data) {
    return dispatch => {
        dispatch(request(user))
        userService.update(user, data)
            .then(res => {
                if (res.success) {
                    dispatch(success(res.data))
                    dispatch(alertActions.success(res.message))
                }
            })
            .catch(error => {
                    dispatch(failure(error));
                    dispatch(alertActions.error(error.message));
                }
            )
    }

    function request(user) {
        return {type: userConstants.UPDATE_REQUEST, user}
    }

    function success(user) {
        return {type: userConstants.UPDATE_SUCCESS, user}
    }

    function failure(error) {
        return {type: userConstants.UPDATE_FAILURE, error}
    }
}

function getAllDeleted() {
    return dispatch => {
        dispatch(request());
        userService.getAllDeleted()
            .then(
                res => {
                    console.log(res);
                    if (res.success) {
                        dispatch(success(res.data))
                        dispatch(alertActions.success(res.message))
                    } else {
                        dispatch(failure())
                        dispatch(alertActions.failure(res.message))

                    }
                }
            ).catch(error => dispatch(failure(error)));
    };

    function request() {
        return {type: userConstants.GETALL_DELETED_REQUEST}
    }

    function success(users) {
        return {type: userConstants.GETALL_DELETED_SUCCESS, users}
    }

    function failure(error) {
        return {type: userConstants.GETALL_DELETED_FAILURE, error}
    }
}

function getAll() {
    return (dispatch) => {
        dispatch(request());
        userService.getAll()
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(res.data))
                        dispatch(alertActions.success(res.message))
                    } else {
                        dispatch(failure())
                    }
                }
            ).catch(
            error => {
                dispatch(failure(error))
                dispatch(alertActions.error(error.message))
            }
        );
    }

    function request() {
        return {type: userConstants.GETALL_REQUEST}
    }

    function success(users) {
        return {type: userConstants.GETALL_SUCCESS, users}
    }

    function failure(error) {
        return {type: userConstants.GETALL_FAILURE, error}
    }
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    return dispatch => {
        dispatch(request(id));
        userService.deleteUser(id)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(id));
                        dispatch(alertActions.success(res.message))
                    }
                }
            )
            .catch(error => {
                dispatch(failure(error));
                dispatch(alertActions.error(error.message));
            })

    };

    function request(id) {
        return {type: userConstants.DELETE_REQUEST, id}
    }

    function success(id) {
        return {type: userConstants.DELETE_SUCCESS, id}
    }

    function failure(id, error) {
        return {type: userConstants.DELETE_FAILURE, id, error}
    }
}

function restore(id) {
    return dispatch => {
        userService.restoreUser(id)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(id));
                        dispatch(alertActions.success(res.message))
                    }
                }
            )
            .catch(error => {
                dispatch(alertActions.error(error.message));
            })

    };

    function success(id) {
        return {type: userConstants.RESTORE_SUCCESS, id}
    }
}

function remove(id) {
    return dispatch => {
        userService.removeUser(id)
            .then(
                res => {
                    if (res.success) {
                        dispatch(success(id));
                        dispatch(alertActions.success(res.message))
                    }
                }
            )
            .catch(error => {
                dispatch(alertActions.error(error.message));
            })

    };

    function success(id) {
        return {type: userConstants.REMOVE_SUCCESS, id}
    }
}