import React from 'react';
import {Link} from 'react-router-dom';
import Slick3 from 'markup/Pages/component-part/Slick3';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {useForm} from 'react-hook-form';
import {userActions} from 'actions';

const schemaValidation = yup.object().shape({
    newPassword: yup
        .string()
        .required('Password is required'),
    rePassword: yup
        .string()
        .required('Re Password is required')
        .oneOf([yup.ref('newPassword'), null], 'Re Passwords must match')
})

function ResetPassword(props) {


    const dispatch = useDispatch()

    const alert = useSelector(state => state.alert);

    const passwordResetToken = useSelector(state=>state.userReducer.passwordResetToken);

    const {register, handleSubmit, setValue, formState: {errors}} = useForm({resolver: yupResolver(schemaValidation)});


    setValue("id",passwordResetToken.id)
    setValue("token",passwordResetToken.token)

    const onSubmit = (data) => {
        dispatch(userActions.resetPassword(data))
    }

    return (
        <div>
            <div class="page-content dlab-login font-roboto">
                <div class="container-fluid p-lr0">
                    <div class="row m-lr0 login-form-box">
                        <div class="col-lg-4 p-lr0">
                            <div class="login-form">
                                <div class="logo logo-header">
                                    <Link to={'./'}><img src={require('images/logo-2.png')} alt=""/></Link>
                                </div>
                                <div id="forgot-password" class="tab-pane">
                                    <form class="dlab-form" onSubmit={handleSubmit(onSubmit)}>
                                        <div class="form-head">
                                            <h3 class="form-title m-t0">Find Your<span
                                                class="text-primary"> Account</span></h3>
                                            <p class="title-text">Welcome back, please login<br/> to your account</p>
                                        </div>
                                        <div class="form-group-bx">
                                            {alert.message &&
                                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                                            }
                                            <div class="form-group input-form">
                                                <label>New Password</label>
                                                <input
                                                    required=""
                                                    class="form-control"
                                                    placeholder="*******"
                                                    {...register("newPassword")}
                                                    type="password"/>
                                            </div>
                                            {errors.newPassword &&
                                                <div className="alert-warning">{errors.newPassword.message}</div>
                                            }
                                            <div class="form-group input-form">
                                                <label>Re Password</label>
                                                <input
                                                    required=""
                                                    class="form-control"
                                                    placeholder="*******"
                                                    {...register("rePassword")}
                                                    type="password"/>

                                            </div>

                                            {errors.rePassword &&
                                                <div className="alert-warning">{errors.rePassword.message}</div>
                                            }

                                            <input

                                                {...register("id")}
                                                type="hidden"/>

                                            <input
                                                {...register("token")}
                                                type="hidden"/>

                                        </div>
                                        <div class="form-group">
                                            <button class="site-button black m-r10">Submit</button>
                                            <Link to={'/login'} class="site-button outline">Back</Link>
                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                        <div class="col-lg-8 p-lr0">
                            <Slick3/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ResetPassword;