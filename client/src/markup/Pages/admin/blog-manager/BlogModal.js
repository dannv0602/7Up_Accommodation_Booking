import { yupResolver } from "@hookform/resolvers/yup";
import { userActions } from 'actions';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
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
    fullname: yup
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
    roles: yup
        .string()
        .required("Roles is required")
})
export default function UserModal(props) {
    let user = props.user;
    const alert = useSelector(state => state.alert)
    const updateUser = useSelector(state => state.userReducer.editUser)

    const dispatch = useDispatch();

    const {
        register,
        setValue,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),

    })
    if (!props.isAdd) {
        if (updateUser) {
            setUserValue(updateUser)
        } else {
            setUserValue(user)
        }
    }


    function toggle() {
        return props.toggle()
    }
    function setUserValue(data) {
        const date = new Date(data.dateOfBirth)
        const dateOfBirth = date.toLocaleDateString('en-CA') || "2000-12-16";
        setValue("fullname", data.fullname)
        setValue("username", data.username)
        setValue("email", data.email)
        setValue("password", data.email)
        setValue("dateOfBirth", dateOfBirth)
        setValue("address", data.address)
        setValue("sex", data.sex)
        setValue("phoneNumber", data.phoneNumber)
        setValue("roles", data.roles)
    }
    function handleAdd(data) {
        dispatch(userActions.create(data))
    }
    function handleEdit(data) {
        dispatch(userActions.update(user, data))
    }
    const onSubmit = data => {
        if (!props.isAdd) handleEdit(data)
        else handleAdd(data)
    }
    return (
        <div>
            <Modal
                className="max-w800"
                isOpen={props.isOpen}
                toggle={() => toggle()}
            >

                <ModalHeader>
                    Modal title
                </ModalHeader>
                <ModalBody>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Row>
                            <Col md={6}>
                                <Label for="fullname">
                                    Full Name
                                </Label>
                                <input
                                    className="form-control"
                                    id="fullname"
                                    name="fullname"
                                    type="text"
                                    {...register("fullname")}
                                />
                                {errors?.fullname &&
                                    <div className="alert-warning text-center">{errors.fullname?.message}</div>
                                }
                            </Col>
                            <Col md={6}>

                                <Label for="dateOfBirth">
                                    Date Of Birth
                                </Label>
                                <input
                                    className="form-control"
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    type="date"
                                    {...register("dateOfBirth")}
                                />
                                {errors?.dateOfBirth &&
                                    <div className="alert-warning text-center">{errors.dateOfBirth?.message}</div>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>

                                <Label for="username">
                                    Username
                                </Label>
                                <input
                                    className="form-control"
                                    id="username"
                                    name="username"
                                    type="text"
                                    {...register("username")}
                                />
                                {errors?.username &&
                                    <div className="alert-warning text-center">{errors.username?.message}</div>
                                }
                            </Col>
                            <Col md={6}>

                                <Label for="email">
                                    Email
                                </Label>
                                <input
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    type="email"
                                    {...register("email")}
                                />
                                {errors?.email &&
                                    <div className="alert-warning text-center">{errors.email?.message}</div>
                                }
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>

                                <Label for="password">
                                    Password
                                </Label>
                                <input
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    type="password"
                                    {...register("password")}
                                />
                                {errors?.password &&
                                    <div className="alert-warning text-center">{errors.password?.message}</div>
                                }
                            </Col>
                            <Col md={6}>

                                <Label for="phoneNumber">
                                    Phone Number
                                </Label>
                                <input
                                    className="form-control"
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                    {...register("phoneNumber")}
                                />
                                {errors?.phoneNumber &&
                                    <div className="alert-warning text-center">{errors.phoneNumber?.message}</div>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>

                                <Label for="address">
                                    Address
                                </Label>
                                <input
                                    className="form-control"
                                    id="address"
                                    name="address"
                                    type="text"
                                    {...register("address")}
                                />
                                {errors?.address &&
                                    <div className="alert-warning text-center">{errors.address?.message}</div>
                                }
                            </Col>
                            <Col md={6}>

                                <Label for="sex">
                                    Sex
                                </Label>
                                <select
                                    className="form-control"
                                    id="sex"
                                    name="sex"

                                    type="select"
                                    {...register("sex")}
                                >
                                    <option name="sex" value=''>...Chọn</option>
                                    <option name="sex" value='nam'>Nam</option>
                                    <option name="sex" value='Nữ'>Nữ</option>
                                </select>
                                {errors?.sex &&
                                    <div className="alert-warning text-center">{errors.sex?.message}</div>
                                }

                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>

                                <Label for="roles">
                                    Roles
                                </Label>
                                <select
                                    className="form-control"
                                    id="roles"
                                    name="roles"

                                    type="select"
                                    {...register("roles")}
                                >
                                    <option name="roles" value=''>...Chọn</option>
                                    <option name="roles" value='host'>Host</option>
                                    <option name="roles" value='user'>User</option>
                                    <option name="roles" value='admin'>Admin</option>

                                </select>
                                {errors?.roles &&
                                    <div className="alert-warning text-center">{errors.roles?.message}</div>
                                }

                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col md={6}>
                                <Button
                                    color="primary"
                                    type="submit"
                                >
                                    {user ? 'Edit User' : 'Add new user'}

                                </Button>
                            </Col>

                            {user &&
                                <Col md={6} className="text-right">
                                    <Button
                                        color='primary'
                                        type='button'
                                        onClick={() => reset()}>Reset</Button>
                                </Col>


                            }
                        </Row>

                    </form>

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary" onClick={() => toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}
