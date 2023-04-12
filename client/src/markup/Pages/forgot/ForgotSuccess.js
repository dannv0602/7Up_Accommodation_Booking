import React from "react";
import {Link} from "react-router-dom";
import Slick3 from "../component-part/Slick3";
import {useSelector} from "react-redux";

function ForgotSuccess(props) {
    const alert = useSelector(state=>state.alert)

    return (
        <div>
            <div className="page-content dlab-login font-roboto">
                <div className="container-fluid p-lr0">
                    <div className="row m-lr0 login-form-box">
                        <div className="col-lg-4 p-lr0">
                            <div className="login-form">
                                <div className="logo logo-header">
                                    <Link to={'./'}><img src={require('images/logo-2.png')} alt=""/></Link>
                                </div>
                                <div id="forgot-password" className="tab-pane">
                                    {alert.message &&
                                        <div className={`alert ${alert.type}`}>{alert.message}</div>
                                    }
                                    <p>Please wait, server is progressing</p>
                                    <Link to='/login' className="site-button outline">Login</Link>
                                    <Link to={'/forgot'} class="site-button outline">Back</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 p-lr0">
                            <Slick3/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ForgotSuccess;
