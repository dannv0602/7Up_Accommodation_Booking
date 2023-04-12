import { yupResolver } from "@hookform/resolvers/yup";
import { userActions } from "actions";
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as yup from 'yup';

const schema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(6, "At least 6 characters"),
    email: yup
        .string()
        .required("Email is required"),
    fullName: yup
        .string()
        .required("Full name is required"),
    sex: yup
        .string()
        .required("Gender is required"),
    dateOfBirth: yup
        .string()
        .required("Date Of Birth is required"),
    phoneNumber: yup
        .string()
        .required("Phone Number is required")
        .matches(/(?=.*?[0-9])/, "Phone Number must be number")
        .min(10, "Phone Number must be have 10-11 number")
        .max(11, "Phone Number must be have 10-11 number"),
    address: yup
        .string()
        .required("Address is required"),
})
function Register(props) {
    const dispatch = useDispatch();
    const alert = useSelector(state => state.alert)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema),
        mode: 'onBlur',
        reValidateMode:'onChange'
    }); 
    const onSubmit = data => {
        dispatch(userActions.register(data))
    };
    return (
        <div className="section-full content-inner-2 shop-account bg-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <h3 className="font-weight-700 m-t0 m-b20">Create An Account</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="p-a30 border-1  max-w1000 m-auto">
                            <div className="tab-content">
                                <form onSubmit={handleSubmit(onSubmit)} className="tab-pane active">
                                    <h4 className="font-weight-700 text-center">PERSONAL INFORMATION</h4>
                                    <p className="font-weight-600 text-center">If you have an account with us, login
                                        <Link to={'/login'} className="site-button-link ml-2"> HERE</Link>
                                        .</p>
                                    {alert.message &&
                                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                                    }
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <label className="font-weight-700">Full Name *</label>
                                                <input
                                                    className="form-control"
                                                    placeholder="Full Name"
                                                    {...register("fullName")}
                                                    type="text" />
                                                {errors?.fullName &&
                                                    <div className="alert-warning text-center">{errors.fullName?.message}</div>
                                                }
                                            </div>

                                            <div className="form-group">
                                                <label className="font-weight-700">E-MAIL *</label>
                                                <input
                                                    name="email"
                                                    className="form-control"
                                                    placeholder="Your Email Id"
                                                    {...register("email")}
                                                    type="email" />
                                                {errors?.email &&
                                                    <div className="alert-warning text-center">{errors.email?.message}</div>
                                                }
                                            </div>

                                            <div className="form-group">
                                                <label className="font-weight-700">USERNAME *</label>
                                                <input
                                                    name="username"
                                                    className="form-control"
                                                    placeholder="Username"
                                                    {...register("username")}
                                                    type="text" />
                                                {errors?.username &&
                                                    <div className="alert-warning text-center">{errors.username?.message}</div>
                                                }
                                            </div>

                                            <div className="form-group">
                                                <label className="font-weight-700">PASSWORD *</label>
                                                <input
                                                    name="password"
                                                    className="form-control "
                                                    placeholder="Type Password"
                                                    {...register("password")}
                                                    type="password" />
                                                {errors?.password &&
                                                    <div className="alert-warning text-center">{errors.password?.message}</div>
                                                }
                                            </div>

                                        </div>
                                        <div className="col-lg-6">

                                            <div className="form-group">
                                                <label className="font-weight-700">Date Of Birth *</label>
                                                <input
                                                    name="dateOfBirth"
                                                    className="form-control"
                                                    {...register("dateOfBirth")}
                                                    type="date" />
                                                {errors?.dateOfBirth &&
                                                    <div className="alert-warning text-center">{errors.dateOfBirth?.message}</div>
                                                }
                                            </div>

                                            <div className="form-group">
                                                <label className="font-weight-700">Sex *</label>

                                                <select className="form-control" name="sex" {...register("sex")} >
                                                    <option value='nam'> Nam
                                                    </option>
                                                    <option value='nu'> Nữ
                                                    </option>
                                                </select>

                                                {errors?.sex &&
                                                    <div className="alert-warning text-center">{errors.sex?.message}</div>
                                                }
                                            </div>

                                            <div className="form-group">
                                                <label className="font-weight-700">Phone Number *</label>
                                                <input
                                                    name="phoneNumber"
                                                    className="form-control"
                                                    placeholder="Phone Number"
                                                    {...register("phoneNumber")}
                                                    type="text" />
                                                {errors?.phoneNumber &&
                                                    <div className="alert-warning text-center">{errors.phoneNumber?.message}</div>
                                                }
                                            </div>

                                            <div className="form-group">
                                                <label className="font-weight-700">Address *</label>
                                                <input
                                                    name="address"
                                                    className="form-control"
                                                    placeholder="Address"
                                                    {...register("address")}
                                                    type="text" />
                                                {errors?.address &&
                                                    <div className="alert-warning text-center">{errors.address?.message}</div>
                                                }
                                            </div>
                                        </div>
                                    </div>



                                    <div className="text-left">
                                        <button
                                            className="site-button button-lg radius-no outline outline-2"
                                            type="submit"
                                        >Sign Up
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register ;