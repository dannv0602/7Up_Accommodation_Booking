import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link, Redirect} from "react-router-dom";
import {roomsService} from "services";
import {orderActions} from "../../../actions";
import PayPal from "./PayPal";

const bg3 = require('images/banner/bnr1.jpg');

function Payment(props) {
    const dispatch = useDispatch();

    const item = useSelector(state => state.orderReducer.item)
    useEffect(() => {

    }, [item])

    const handleSubmitPayAfter = () => {
        let data = item
        data.paymentMethod = "Offline"
        data.status = "UNPAID"
        data.userId = item.user.id
        data.price = item.room.price
        data.roomId = item.room.id
        dispatch(orderActions.create(data))
    }


    if (!item.user) return <Redirect to='/accommodation'/>
    return (
        <>
            <div className="dlab-bnr-inr overlay-black-middle"
                 style={{backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover'}}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Payment</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link>Home</Link></li>
                                <li>Payment</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full bg-white content-inner dlab-about-1 promotions">

                <div className="container">

                    <div className="border bg-light">
                        <div style={{color: 'black'}}>
                            <div className="email" style={{
                                maxWidth: '480px',
                                margin: '1rem auto',
                                borderRadius: '10px',
                                borderTop: '#d74034 2px solid',
                                borderBottom: '#d74034 2px solid',
                                boxShadow: '0 2px 18px rgba(0, 0, 0, 0.2)',
                                padding: '1.5rem',
                                fontFamily: 'Arial, Helvetica, sans-serif'
                            }}>
                                <div className="email-head"
                                     style={{borderBottom: '1px solid rgba(0, 0, 0, 0.2)', paddingBottom: '1rem'}}>
                                    <div className="head-img" style={{
                                        maxWidth: '240px',
                                        padding: '0 0.5rem',
                                        display: 'block',
                                        margin: '0 auto',
                                        fontWeight: 'bolder',
                                        textAlign: 'center'
                                    }}>
                                        TRIPPER | Booking
                                    </div>
                                </div>
                                <div className="email-body">
                                    <div className="body-text"
                                         style={{padding: '2rem 0 1rem', textAlign: 'center', fontSize: '1.15rem'}}>
                                        <div className="body-greeting"
                                             style={{fontWeight: 'bold', marginBottom: '1rem'}}>
                                            Hi, {item.user.fullName || item.user.username}!
                                        </div>
                                        Your order has been successfully completed and delivered to You!
                                    </div>
                                    <div className="body-table" style={{textAlign: 'left'}}>
                                        <table style={{width: '100%', fontSize: '1.1rem', padding: '10px'}}>
                                            <tbody>
                                            <tr>
                                                <td>Room name:</td>
                                                <td style={{
                                                    textAlign: 'right',
                                                    paddingBottom: '15px',
                                                    color: 'red'
                                                }}> {item.room.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Price:</td>
                                                <td style={{
                                                    textAlign: 'right',
                                                    paddingBottom: '15px'
                                                }}>{item.room.price}</td>
                                            </tr>
                                            <tr>
                                                <td>Check in:</td>
                                                <td style={{
                                                    textAlign: 'right',
                                                    paddingBottom: '15px'
                                                }}>{item.checkIn}</td>
                                            </tr>
                                            <tr>
                                                <td>Check out:</td>
                                                <td style={{
                                                    textAlign: 'right',
                                                    paddingBottom: '15px'
                                                }}>{item.checkOut}</td>
                                            </tr>
                                            <tr>
                                                <td>Customer name:</td>
                                                <td style={{
                                                    textAlign: 'right',
                                                    paddingBottom: '15px'
                                                }}>{item.customerName}</td>
                                            </tr>
                                            <tr>
                                                <td>Customer phone:</td>
                                                <td style={{
                                                    textAlign: 'right',
                                                    paddingBottom: '15px'
                                                }}>{item.customerPhone}</td>
                                            </tr>
                                            <tr>
                                                <td>Adults:</td>
                                                <td style={{
                                                    textAlign: 'right',
                                                    paddingBottom: '15px'
                                                }}>{item.adults}</td>
                                            </tr>
                                            <tr>
                                                <td>Childs</td>
                                                <td style={{
                                                    textAlign: 'right',
                                                    paddingBottom: '15px'
                                                }}>{item.child}</td>
                                            </tr>
                                            <tr>
                                                <td>Infants</td>
                                                <td style={{
                                                    textAlign: 'right',
                                                    paddingBottom: '15px'
                                                }}>{item.infants}</td>
                                            </tr>
                                            <tr>
                                                <td>Total:</td>
                                                <td style={{textAlign: 'right', paddingBottom: '15px', color: 'red'}}>
                                                    <strong>{roomsService.formatPrice(item.taxPrice || 0)}</strong></td>
                                            </tr>
                                            <tr>
                                                <td>Total:</td>
                                                <td style={{textAlign: 'right', paddingBottom: '15px', color: 'red'}}>
                                                    <strong>{roomsService.formatPrice(item.totalPrice)}</strong></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div className="body-text bottom-text"
                                         style={{padding: '2rem 0 1rem', textAlign: 'center', fontSize: '0.8rem'}}>
                                        Thank You
                                    </div>
                                </div>

                            </div>
                        </div>


                        <div className="text-center">
                            <PayPal order={item}/>
                            <button className="btn bg-red" onClick={handleSubmitPayAfter}>Pay after</button>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )

}


export default Payment;
