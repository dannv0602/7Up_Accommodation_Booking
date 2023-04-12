import React from "react";
import { Link } from "react-router-dom";
const bg3 = require('images/banner/bnr1.jpg');

function OrderCreateSuccess(props) {
    return (
        <>
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Create Order</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link>Home</Link></li>
                                <li>Create Order</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full bg-white content-inner dlab-about-1 promotions">

                <div className="container">
                    <p>Creat order successfully, back to home 
                        <Link to='/'>HERE</Link>
                    </p>
                </div>
            </div>
        </>
    )
}
export default OrderCreateSuccess;
