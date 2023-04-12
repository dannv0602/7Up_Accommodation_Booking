import React, {useEffect, useRef} from 'react';
import {orderActions} from "../../../actions";
import {useDispatch} from "react-redux";

function PayPal(props) {
    const {order}= props
    const dispatch =useDispatch();
    const paypal = useRef();
    const price = Math.floor(order.totalPrice/23000);
    const product ={
        description:order.room.name,
        price:price
    }


    const handleSubmitPayOnline = () => {
        let data = order
        data.paymentMethod = "PAYPAL ONLINE"
        data.status = "PAID"
        data.userId = order.user.id
        data.price = order.room.price
        data.roomId = order.room.id
        dispatch(orderActions.create(data))
    }


    useEffect(() => {
        window.paypal.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: "CAPTURE",
                    purchase_units: [
                        {
                            description: product.description,
                            amount: {
                                currency_code: "USD",
                                value: product.price,
                            },
                        },
                    ],
                });
            },
            onApprove: async (data, actions) => {
                const order = await actions.order.capture();
                handleSubmitPayOnline();
                console.log(order);
            },
            onError: (err) => {
                console.log(err);
            },
        })
            .render(paypal.current);
    }, [product]);
    return (
        <div>
            <div ref={paypal}></div>
        </div>
    );
}

export default PayPal;