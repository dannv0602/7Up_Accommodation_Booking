import { userActions } from 'actions';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slick3 from 'markup/Pages/component-part/Slick3'
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const schemaValidation = yup.object().shape({
    username: yup.string().required('Username is required'),
    password: yup.string().required('Password is required')
})

function Login2(props) {
    const {
        register,
        handleSubmit,
        formState: { errors } } = useForm(
            {
                resolver: yupResolver(schemaValidation),
                mode:'onBlur'
            });
    const dispatch = useDispatch();
    const onSubmit = (username, password) => {
        dispatch(userActions.login(username, password));
    }
    const alert = useSelector(state => state.alert);
    return (
        <div>
            <div className="page-content dlab-login font-roboto">
                <div className="container-fluid p-lr0">
                    <div className="row m-lr0 login-form-box">
                        <div className="col-lg-4 p-lr0">
                            <div className="login-form">
                                <div className="logo logo-header">
                                    <Link to={'./'}><img src={require('images/logo-2.png')} alt="" /></Link>
                                </div>
                                <div id="login" className="tab-pane">
                                    <form onSubmit={handleSubmit(onSubmit)} className="dlab-form">
                                        <div className="form-head">
                                            <h3 className="form-title m-t0">We Are <span className="text-primary">Triper</span></h3>
                                            <p className="title-text">Welcome back, please login<br /> to your account</p>
                                        </div>

                                        <div className="form-group-bx">
                                            {alert.message &&
                                                <div className={`alert ${alert.type}`}>{alert.message}</div>
                                            }
                                            <div className="form-group input-form">
                                                <label>Email Address</label>
                                                <input
                                                    {...register("username")}
                                                    className="form-control"
                                                    placeholder="Type email"
                                                    type="text"
                                                />

                                            </div>
                                            {errors.username &&
                                                <div className="alert-warning">{errors.username.message}</div>
                                            }
                                            <div className="form-group input-form">
                                                <label>Password</label>
                                                <input

                                                    className="form-control "
                                                    placeholder="Type password"
                                                    type="password"
                                                    {...register("password")}
                                                />
                                            </div>
                                            {errors.password &&
                                                <div className="alert-warning">{errors.password.message}</div>
                                            }
                                        </div>
                                        <div className="form-group field-btn text-left">
                                            <div className="input-block">
                                                <input id="check1" type="checkbox" />
                                                <label htmlFor="check1">Remember me</label>
                                            </div>
                                            <Link to={'./forgot'} className="btn-link forgot-password"> Forgot Password</Link>
                                        </div>
                                        <div className="form-group">
                                            <button
                                                className="site-button black m-r10"
                                                type="submit"  >Login</button>
                                            <Link to={'./register'} className="site-button outline">Sign Up</Link>
                                        </div>
                                    </form>
                                </div>


                            </div>
                        </div>
                        <div className="col-lg-8 p-lr0">
                            <Slick3 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login2
