import { userActions } from "actions";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import './register-verify.css'
function RegisterVerified(props) {

    const dispatch = useDispatch();

    const id = props.match.params.e
    const token = props.match.params.v



    useEffect(() => {
        dispatch(userActions.registerVerified(id,token))
    }, [id, token,dispatch])

    return (
        <div className=" text-center spinner-container ">
            <div className="loading-spinner">
            </div>
        </div>
    )
}
export default RegisterVerified