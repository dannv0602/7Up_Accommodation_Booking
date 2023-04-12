import {orderActions} from 'actions';
import React, {useEffect} from 'react';
import DataTable from 'react-data-table-component';
import {useDispatch, useSelector} from 'react-redux';
import {Button} from 'reactstrap';
import {userService} from "../../../services";


function OrderManagerUser(props) {
    const id = userService.getCurrentUser().id
    const alert = useSelector(state => state.alert)
    const orders = useSelector(state => state.orderReducer.items)
    const pending = useSelector(state => state.orderReducer.loading)
    const dispatch = useDispatch();
    const columns =
        [
            {
                name: 'Room Name',
                selector: row => row.room.name
            },
            {
                name: 'Adults',
                selector: row => row.adults
            },
            {
                name: 'status',
                selector: row => row.status
            },
            {
                name: 'Total Price',
                selector: row => row.totalPrice
            },

            {
                name: 'Check In ',
                selector: row => row.checkIn
            },
            {
                name: 'Check out ',
                selector: row => row.checkOut
            },
            {
                name: 'Payment',
                selector: row => row.paymentMethod
            },
            {
                buttons: true,
                cell: (column) =>
                    (<>
                            <Button onClick={(column)=>handeSeeOrderDetails}>Details</Button>

                        </>
                    ),
                ignoreRowClick: true,
                allowOverflow: true,
            },
        ]

    useEffect(() => {
        dispatch(orderActions.getByUserId(id))
    }, [dispatch,id])

    const handeSeeOrderDetails =(order)=>{
        dispatch(orderActions.getByUserId(order.id))
    }


    return (
        <div>
            <div className="mt-5 mx-5 mb-5">

                {alert.message &&
                    <div className={`alert ${alert.type}`}>{alert.message}</div>
                }

                <DataTable
                    title='Order Store'
                    columns={columns}
                    data={orders}
                    theme="dark"
                    selectableRows
                    pagination
                    progressPending={pending}/>
            </div>


        </div>
    )
}

export default OrderManagerUser