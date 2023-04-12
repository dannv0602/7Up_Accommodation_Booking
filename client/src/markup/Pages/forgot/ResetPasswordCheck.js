import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {userActions} from "../../../actions";

function ResetPasswordCheck(props){
    const id = props.match.params.id
    const token = props.match.params.token

    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(userActions.checkPasswordResetToken(token,id))
    }, [id, token])

    return (
        <div></div>
    )

}
export default ResetPasswordCheck;
