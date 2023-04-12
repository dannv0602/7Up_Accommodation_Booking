import { userActions } from 'actions';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormGroup, Input, Label } from 'reactstrap';

function Register(props) {

    const [registedUser, setRegistedUser] = useState({
        fullName: {
            formatString: 'Full Name',
            name: 'fullName',
            value: '',
            errorMessage: ''
        },
        email: {
            formatString: 'Email',
            name: 'email',
            value: '',
            errorMessage: ''
        },
        username: {
            formatString: 'Username',
            name: 'username',
            value: '',
            errorMessage: ''
        },
        password: {
            formatString: 'Password',
            name: 'password',
            value: '',
            errorMessage: ''
        },
        dateOfBirth: {
            formatString: 'Date Of Birth',
            name: 'dateOfBirth',
            value: '',
            errorMessage: ''
        },
        sex: {
            formatString: 'Sex',
            name: 'sex',
            value: 'nam',
            errorMessage: ''
        },
        phoneNumber: {
            formatString: 'Phone Number',
            name: 'phoneNumber',
            value: '',
            errorMessage: ''
        },
        address: {
            formatString: 'Address',
            name: 'address',
            value: '',
            errorMessage: ''
        },

    })
    const [isValidationForm, setIsValidationForm] = useState(false)
    const validationForm = () => {
        let state = registedUser;
        let stateArr = [];
        for (let i in state) {
            stateArr.push(state[i]);
        }
        let isValidated = true;
        stateArr.forEach((value) =>{
            if  (value.errorMessage.length > 0 || value.value.length === 0)
            isValidated = false; return;
        })
        setIsValidationForm(isValidated)
    }
    const validationInput = (name, value) => {
        let errorMessage = '';
        if (value === '') {
            errorMessage = registedUser[name].formatString + ' is required'
        } else {
            if (name === 'phoneNumber') {
                const digitsRegExp = /(?=.*?[0-9])/;
                if (!digitsRegExp.test(value)) errorMessage = 'Phone Number must be number'
                else if (value.length < 10 || value.length > 11) errorMessage = 'Phone Number must be have 10-11 number'
            }
            if (name === 'password') {
                const uppercaseRegExp = /(?=.*?[A-Z])/;
                const digitsRegExp = /(?=.*?[0-9])/;
                const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
                const uppercasePassword = uppercaseRegExp.test(value);
                const digitsPassword = digitsRegExp.test(value);
                const specialCharPassword = specialCharRegExp.test(value);
                if (!uppercasePassword) errorMessage = 'At least one Uppercase'
                else if (!digitsPassword) errorMessage = 'At least one digit character'
                else if (!specialCharPassword) errorMessage = 'At least one special Char (!,@,...)'
                if (value.length < 6) errorMessage = 'Password minimum 6 characters'
            }
        }
        return { errorMessage};
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        const { formatString } = registedUser[name]
       setRegistedUser({
           ...registedUser,
            [name]: {
                formatString,
                value
            }
        })
        handleValidationInput(e)
     
    }
    const handleValidationInput = (e) => {
        const { name, value } = e.target;
        const { formatString } = registedUser[name]
        const { errorMessage } = validationInput(name, value);
       setRegistedUser({
           ...registedUser,
            [name]: {
                formatString,
                value,
                errorMessage
            }
        })
        validationForm();
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const state = registedUser;
        const user = {
            fullName: state.fullName.value,
            email: state.email.value,
            username: state.username.value,
            password: state.password.value,
            dateOfBirth: state.dateOfBirth.value,
            sex: state.sex.value,
            phoneNumber: state.phoneNumber.value,
            address: state.address.value
        }
        console.log(user);
        // props.register(user);  
    }

    const {
        fullName,
        email,
        username,
        password,
        dateOfBirth,
        phoneNumber,
        address,
    } = registedUser
    const { alert } = props
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
                        <div className="p-a30 border-1  max-w500 m-auto">
                            <div className="tab-content">
                                <form id="register" onSubmit={handleSubmit} className="tab-pane active">
                                    <h4 className="font-weight-700">PERSONAL INFORMATION</h4>
                                    <p className="font-weight-600">If you have an account with us, please log in.</p>
                                    {alert.message &&
                                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                                    }

                                    <div className="form-group">
                                        <label className="font-weight-700">Full Name *</label>
                                        <input
                                            name="fullName"
                                            required=""
                                            className="form-control"
                                            placeholder="Full Name"
                                            onChange={handleChange}
                                            onBlur={handleValidationInput}
                                            value={fullName.value}
                                            type="text" />
                                        {fullName.errorMessage !== '' &&
                                            <div className="alert-warning text-center">{fullName.errorMessage}</div>}

                                    </div>

                                    <div className="form-group">
                                        <label className="font-weight-700">E-MAIL *</label>
                                        <input
                                            name="email"
                                            required=""
                                            className="form-control"
                                            placeholder="Your Email Id"
                                            onChange={handleChange}
                                            onBlur={handleValidationInput}
                                            value={email.value}
                                            type="email" />
                                        {email.errorMessage !== '' &&
                                            <div className="alert-warning text-center">{email.errorMessage}</div>}
                                    </div>

                                    <div className="form-group">
                                        <label className="font-weight-700">USERNAME *</label>
                                        <input
                                            name="username"
                                            required=""
                                            className="form-control"
                                            placeholder="Username"
                                            onChange={handleChange}
                                            onBlur={handleValidationInput}
                                            value={username.value}
                                            type="text" />
                                        {username.errorMessage !== '' &&
                                            <div className="alert-warning text-center">{username.errorMessage}</div>}
                                    </div>

                                    <div className="form-group">
                                        <label className="font-weight-700">PASSWORD *</label>
                                        <input
                                            name="password"
                                            required=""
                                            className="form-control "
                                            placeholder="Type Password"
                                            onChange={handleChange}
                                            onBlur={handleValidationInput}
                                            value={password.value}
                                            type="password" />
                                        {password.errorMessage !== '' &&
                                            <div className="alert-warning text-center">{password.errorMessage}</div>

                                        }
                                    </div>

                                    <div className="form-group">
                                        <label className="font-weight-700">Date Of Birth *</label>
                                        <input
                                            name="dateOfBirth"
                                            required=""
                                            className="form-control"
                                            onChange={handleChange}
                                            onBlur={handleValidationInput}
                                            type="date" />
                                        {dateOfBirth.errorMessage !== '' &&
                                            <div className="alert-warning text-center">{dateOfBirth.errorMessage}</div>

                                        }
                                    </div>

                                    <div className="form-group">
                                        <label className="font-weight-700">Sex *</label>
                                        <FormGroup check inline>
                                            <Input
                                                name="sex"
                                                onChange={handleChange}
                                                value="nữ"
                                                type="checkbox" />
                                            <Label
                                                check>Nữ</Label>
                                        </FormGroup>

                                    </div>

                                    <div className="form-group">
                                        <label className="font-weight-700">Phone Number *</label>
                                        <input
                                            name="phoneNumber"
                                            required=""
                                            className="form-control"
                                            placeholder="Phone Number"
                                            onChange={handleChange}
                                            onBlur={handleValidationInput}
                                            value={phoneNumber.value}
                                            type="text" />
                                        {phoneNumber.errorMessage &&
                                            <div className="alert-warning text-center">{phoneNumber.errorMessage}</div>
                                        }

                                    </div>

                                    <div className="form-group">
                                        <label className="font-weight-700">Address *</label>
                                        <input
                                            name="address"
                                            required=""
                                            className="form-control"
                                            placeholder="Address"
                                            onChange={handleChange}
                                            onBlur={handleValidationInput}
                                            value={address.value}
                                            type="text" />
                                        {address.errorMessage !== '' &&
                                            <div className="alert-warning text-center">{address.errorMessage}</div>}
                                    </div>

                                    <div className="text-left">
                                        <button
                                            className="site-button button-lg radius-no outline outline-2"
                                            disabled={isValidationForm? false : true}
                                        >{isValidationForm ? "Sign Up" : " Not "}
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



function mapState(state) {
    const { alert } = state;
    return { alert };
}
const actionCreators = {
    register: userActions.register,

};
const connectedLoginPage = connect(mapState, actionCreators)(Register);
export { connectedLoginPage as Register };
