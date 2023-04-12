import React from "react";
import {useSelector} from "react-redux";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";

function OrderDetailModal(props) {

    const itemById = useSelector(state => state.orderReducer.itemById)


    function toggle() {
        return props.toggle()
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
                                    <div className="body-greeting" style={{fontWeight: 'bold', marginBottom: '1rem'}}>
                                        Hi, " +
                                        itemById.getUser().name !
                                    </div>
                                    Your order has been successfully completed and delivered to You!
                                </div>
                                <div className="body-table" style={{textAlign: 'left'}}>
                                    <table style={{width: '100%', fontSize: '1.1rem', padding: '10px'}}>
                                        <tbody>
                                        <tr>
                                            <td>Room name:</td>
                                            <td style={{textAlign: 'right', paddingBottom: '15px', color: 'red'}}> " +

                                                itemById.room.name
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Price:</td>
                                            <td style={{textAlign: 'right', paddingBottom: '15px'}}> " +

                                                itemById.room.getPrice()
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Check in:</td>
                                            <td style={{textAlign: 'right', paddingBottom: '15px'}}>" +

                                                itemById.checkIn
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Check out:</td>
                                            <td style={{textAlign: 'right', paddingBottom: '15px'}}>" +
                                                itemById.checkOut
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Customer name:</td>
                                            <td style={{textAlign: 'right', paddingBottom: '15px'}}> " +

                                                itemById.customerName
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Customer phone :</td>
                                            <td style={{textAlign: 'right', paddingBottom: '15px'}}> " +

                                                itemById.customerPhone
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Tax price:</td>
                                            <td style={{textAlign: 'right', paddingBottom: '15px'}}> " +
                                                itemById.taxPrice

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Payment method:</td>
                                            <td style={{textAlign: 'right', paddingBottom: '15px'}}> " +

                                                itemById.paymentMethod
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Status:</td>
                                            <td style={{textAlign: 'right', paddingBottom: '15px'}}> " +
                                                itemById.status
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Num of guest:</td>
                                            <td style={{textAlign: 'right', paddingBottom: '15px'}}> " +
                                                {itemById.child +
                                                    itemById.adults +
                                                    itemById.infants()}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Adults:</td>
                                            <td style={{textAlign: 'right', paddingBottom: '15px'}}>" +
                                                itemById.adults()
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Child</td>
                                            <td style={{textAlign: 'right', paddingBottom: '15px'}}> " +
                                                itemById.child
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Infants</td>
                                            <td style={{textAlign: 'right', paddingBottom: '15px'}}> " +
                                                itemById.infants
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Total:</td>
                                            <td style={{textAlign: 'right', paddingBottom: '15px', color: 'red'}}>
                                                <strong>

                                                    itemById.totalPrice </strong></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="body-text bottom-text"
                                     style={{padding: '2rem 0 1rem', textAlign: 'center', fontSize: '0.8rem'}}>
                                    Thank You
                                </div>
                            </div>
                            <div className="email-footer" style={{borderTop: '1px solid rgba(0, 0, 0, 0.2)'}}>
                                <div className="footer-text"
                                     style={{fontSize: '0.8rem', textAlign: 'center', paddingTop: '1rem'}}>
                                    © <a href="https://localhost:3000/" target="_blank"
                                         style={{color: '#d74034'}}>nlu.booking.com</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary" onClick={() => toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default OrderDetailModal