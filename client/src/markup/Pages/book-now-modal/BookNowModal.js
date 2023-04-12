import React from 'react'
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup';
import {orderActions} from "../../../actions";
import {useDispatch} from "react-redux";

const schema = yup.object().shape({
    child: yup.string().required('child is required'),
    adults: yup.string().required('adults is required'),
    infants: yup.string().required('infants is required')
})
export default function BookNowModal(props) {

    const room = props.room

    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema)
    })
    const dispatch = useDispatch()
    const onSubmit = (data) => {
        data.room = room
        dispatch(orderActions.initBookNowItem(data))
    }

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
                    Get the Best Holiday Planned by Experts!
                </ModalHeader>
                <ModalBody>
                    <h5 className="text-center">Enter your contact details and we will plan the best holiday suiting all
                        your requirements.</h5>
                    <form className="row" id="bookNowModal" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-6">
                            <div className="form-group">
                                <div className="input-group">
                                    <input required="" className="form-control" {...register("checkIn")} placeholder="" type="date"/>
                                </div>
                                <span className="font-12">From</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-6 col-6">
                            <div className="form-group">
                                <div className="input-group">
                                    <input required="" className="form-control" {...register("checkOut")} placeholder="" type="date"/>
                                </div>
                                <span className="font-12">To</span>

                            </div>
                        </div>
                        <div className="row col-6">
                            <div className="col-md-4">
                                <div className="quantity btn-quantity">
                                    <input
                                        id="demo_vertical2"
                                        className="form-control"
                                        type="number"
                                        name="demo_vertical2"
                                        {...register("adults")} />
                                    <span className="font-12">Adult (12yrs +)</span>
                                    {errors?.adults &&
                                        <div className="alert-warning text-center">{errors.adults?.message}</div>
                                    }
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="quantity btn-quantity">
                                    <input
                                        id="demo_vertical2"
                                        className="form-control"
                                        type="number"
                                        name="demo_vertical2"
                                        {...register("child")} />

                                    <span className="font-12">Child (2-12yrs)</span>
                                    {errors?.child &&
                                        <div className="alert-warning text-center">{errors.child?.message}</div>
                                    }
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="quantity btn-quantity">
                                    <input
                                        id="demo_vertical2"
                                        className="form-control"
                                        type="number"
                                        name="demo_vertical2"
                                        {...register("infants")} />
                                    <span className="font-12">Infant (0-2yrs)</span>
                                    {errors?.infants &&
                                        <div className="alert-warning text-center">{errors.infants?.message}</div>
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button form="bookNowModal" type="submit" className="site-button">Submit</button>
                    <Button
                        color="primary" onClick={() => toggle()}>
                        Cancel
                    </Button>

                </ModalFooter>
            </Modal>
        </div>
    );
}