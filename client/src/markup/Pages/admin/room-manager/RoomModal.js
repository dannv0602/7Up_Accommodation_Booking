import {yupResolver} from "@hookform/resolvers/yup";
import {addressActions, alertActions, roomActions} from 'actions';
import {Image} from "cloudinary-react";
import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from 'react-redux';
import {Button, Col, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row} from 'reactstrap';
import {uploadService} from "services/uploadService";
import * as yup from 'yup';


const schema = yup.object().shape({
    name: yup
        .string().required("Name room is required"),
    categoryId: yup
        .string().required("Type room is required"),
    description: yup
        .string().required("Description is required"),
    shortDescription: yup
        .string().required("Short Description is required")
        .min(10, "At least 10 characters"),
    price: yup
        .string()
        .matches(/(?=.*?[0-9])/, "Phone Number must be number")
        .required("Price is required"),
    address: yup.object({
        country: yup
            .string().required("Country is required"),
        province: yup
            .number().required("Province is required"),
        ward: yup
            .number().required("Ward is required"),
        district: yup
            .number().required("District is required"),
        street: yup
            .string().required("Street is required"),
    }),
    file: yup
        .string("Images is required")
})
export default function RoomModal(props) {

    const room = props.room
    const alert = useSelector(state => state.alert)


    const newRoom = useSelector(state => state.roomReducer.editRoom)


    const provinces = useSelector(state => state.addressReducer.provinces)
    const districts = useSelector(state => state.addressReducer.districts)
    const wards = useSelector(state => state.addressReducer.wards)

    const dispatch = useDispatch();
    useEffect(() => {
        if (props.isAdd) {
            dispatch(addressActions.getAllProvince())
        } else {
            dispatch(addressActions.getProvince(room.address.province.id))
            dispatch(addressActions.getDistrict(room.address.district.id))
            dispatch(addressActions.getWard(room.address.ward.id))
        }

    }, [dispatch, props.isAdd, room])

    const {
        register,
        setValue,
        handleSubmit,
        reset,
        formState: {errors}
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })

    const [selectedImages, setSeletedImages] = useState([])

    if (!props.isAdd) {
        if (newRoom) {
            setRoom(newRoom)
        } else {
            setRoom(room)
        }
    }

    function toggle() {
        setSeletedImages([])
        return props.toggle()
    }

    function setRoom(data) {
        setValue("name", data.name)
        setValue("categoryId", data.category.id)
        setValue("description", data.description)
        setValue("shortDescription", data.shortDescription)
        setValue("price", data.price)
        setValue("address.country", data.address.country)
        setValue("address.province", data.address.province.id)
        setValue("address.district", data.address.district.id)
        setValue("address.ward", data.address.ward.id)
        setValue("address.street", data.address.street)

    }

    function handleAdd(data) {
        const uploadData = new FormData();
        data.images.forEach(item => {
            uploadData.append("file", item, item.name);
        })
        uploadService.uploadMultiImage(uploadData)
            .then(
                res => {
                    console.log(res)
                    data.images = [res.data]
                    data.address.googleAddress = "googleAddress"
                    data.reviews = []
                    dispatch(roomActions.create(data))
                }
            ).catch(
            err => {
                dispatch(alertActions.error(err.message))
            }
        )
        console.log(data)
    }

    function handleEdit(data) {
        // data.images = selectedImages
        data.images = room.images
        data.reviews = []
        data.address.googleAddress = "googleAddress"
        const uploadData = new FormData();
        if (data.image) {
            data.images.forEach(item => {
                uploadData.append("file", item, item.name);
            })
            uploadService.uploadMultiImage(uploadData)
                .then(
                    res => {
                        data.images = room.images.concat(res.data)
                        dispatch(roomActions.update(room, data))
                    }
                ).catch(
                err => {
                    dispatch(alertActions.error(err.message))
                }
            )
        } else {
            dispatch(roomActions.update(room, data))
        }

    }

    const onSubmit = data => {
        console.log(data)
        if (!props.isAdd)
            handleEdit(data)
        else
            handleAdd(data)
    }

    const handleImageChange = (e) => {
        if (e.target.files) {
            let images = [];
            let imagesPreview = []
            Array.from(e.target.files).forEach(
                item => {
                    images.push(item)
                    imagesPreview.push(URL.createObjectURL(item))
                }
            )
            setValue("images", images)
            setSeletedImages(imagesPreview);
        } else {
            setSeletedImages([]);
        }
    };


    const handleProvinceChange = (e) => {
        const {value} = e.target;
        dispatch(addressActions.getAllDistrict(value))
    }
    const handleDistrictChange = (e) => {
        const {value} = e.target;
        dispatch(addressActions.getAllWard(value))
    }

    return (
        <div>
            <Modal
                className="max-w800"
                isOpen={props.isOpen}
                toggle={() => toggle()}
            >
                <ModalHeader>
                    Form
                </ModalHeader>
                <ModalBody className="maxw-900">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Row>
                            <Col md={6}>
                                <Label for="name"> Name Room:</Label>
                                <input className="form-control" type="text" id='name' {...register("name")}></input>
                                {errors?.name &&
                                    <div className="alert-warning text-center">{errors.name?.message}</div>
                                }
                                <Label> Category: </Label>
                                <select className="form-control"  {...register("categoryId")}>
                                    <option value=''>...Chọn</option>
                                    <option value='4'>Homestay</option>
                                    <option value='2'>Resort</option>
                                    <option value='1'>Villa</option>
                                    <option value='3'>Hotel</option>
                                </select>
                                {errors?.category &&
                                    <div className="alert-warning text-center">{errors.category?.message}</div>
                                }
                                <Label> Short Description:</Label>
                                <textarea className="form-control" rows="7" name="shortDescription"
                                          id='shortDescription' {...register("shortDescription")}></textarea>
                                {errors?.shortDescription &&
                                    <div className="alert-warning text-center">{errors.shortDescription?.message}</div>
                                }
                            </Col>
                            <Col md={6}>
                                <Label for='price'> Price: </Label>
                                <input className="form-control" type="text" id='price' {...register("price")}></input>
                                {errors?.price &&
                                    <div className="alert-warning text-center">{errors.price?.message}</div>
                                }
                                <Label> Description:</Label>
                                <textarea className="form-control"
                                          id='description' {...register("description")}></textarea>
                                {errors?.description &&
                                    <div className="alert-warning text-center">{errors.description?.message}</div>
                                }
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Label name="country"> Country:
                                    <input
                                        value="Việt Nam"
                                        className="form-control"
                                        type="text"
                                        readOnly
                                        {...register("address.country")}
                                    ></input>
                                    {errors?.address?.country &&
                                        <div
                                            className="alert-warning text-center">{errors.address?.country?.message}</div>
                                    }
                                </Label>

                            </Col>
                            <Col>
                                <Label for='province' name="province"> Province:
                                    {props.isAdd &&
                                        <select className="form-control mb-3"
                                                {...register("address.province")}
                                                onChange={handleProvinceChange}
                                                disabled={districts.length === 1 ? true : false}
                                        >
                                            {provinces.length > 0 &&
                                                <option checked>Chọn tỉnh</option>
                                            }
                                            {(provinces.length > 0 &&
                                                    provinces.map((item, index) => (
                                                        <option key={item.id} value={item.id}>{item.nameWithType}</option>
                                                    ))) ||
                                                <option>Đang load dữ liệu</option>
                                            }
                                        </select>
                                    }
                                    {!props.isAdd &&
                                        <select className="form-control mb-3"
                                                {...register("address.province")}
                                                disabled={districts.length === 1 ? true : false}
                                        >
                                            <option key={room.address.province.id}
                                                    value={room.address.province.id}>{room.address.province.nameWithType}</option>
                                        </select>}
                                    {errors?.address?.province &&
                                        <div
                                            className="alert-warning text-center">{errors.address?.province?.message}</div>
                                    }
                                </Label>
                            </Col>
                            <Col>
                                <Label for='district' name="district"> District:
                                    {props.isAdd && <select className="form-control mb-3"
                                                            {...register("address.district")}
                                                            onChange={handleDistrictChange}
                                                            disabled={districts.length === 1 ? true : false}
                                    >
                                        {districts.length > 0 &&
                                            <option checked> Chọn Quận/huyện</option>
                                        }
                                        {(districts.length > 0 &&
                                                districts.map((item, index) => (
                                                    <option key={item.id} value={item.id}>{item.nameWithType}</option>
                                                ))) ||
                                            <option>Vui lòng chọn tỉnh</option>}
                                    </select>
                                    }
                                    {!props.isAdd &&
                                        <select className="form-control mb-3"
                                                {...register("address.district")}
                                                disabled={districts.length === 1 ? true : false}
                                        >
                                            <option key={room.address.district.id}
                                                    value={room.address.district.id}>{room.address.district.nameWithType}</option>
                                        </select>}
                                    {errors?.address?.district &&
                                        <div
                                            className="alert-warning text-center">{errors.address?.district?.message}</div>
                                    }
                                </Label>
                            </Col>
                            <Col>
                                <Label for='ward' name="ward">Ward:
                                    {props.isAdd && <select className="form-control mb-3"
                                                            {...register("address.ward")}
                                                            disabled={districts.length === 1 ? true : false}
                                    >
                                        {wards.length > 0 &&
                                            <option checked> Chọn phường/xã</option>
                                        }
                                        {(wards.length > 0 &&
                                                wards.map((item, index) => (
                                                    <option key={item.id} value={item.id}>{item.nameWithType}</option>
                                                ))) ||
                                            <option>Vui lòng chọn huyện</option>}
                                    </select>
                                    }
                                    {!props.isAdd &&
                                        <select className="form-control mb-3"
                                                {...register("address.ward")}
                                                disabled={districts.length === 1 ? true : false}
                                        >
                                            <option key={room.address.ward.id}
                                                    value={room.address.ward.id}>{room.address.ward.nameWithType}</option>
                                        </select>}
                                    {errors?.address?.ward &&
                                        <div className="alert-warning text-center">{errors.address?.ward?.message}</div>
                                    }
                                </Label>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={12}>
                                <Label for='street' name="street">Street:
                                </Label>
                                <input className="form-control" type="text" {...register("address.street")} />

                                {errors?.address?.street &&
                                    <div className="alert-warning text-center">{errors.address?.street?.message}</div>
                                }
                            </Col>
                        </Row>
                        <Row className=" mt-3">
                            <Col md={12}>
                                <Label htmlFor="file" className="label">
                                    Images
                                </Label>
                                <input className="form-control" type="file" id="file" multiple {...register("file")}
                                       onChange={(e) => handleImageChange(e)}/>
                            </Col>
                        </Row>
                        <Row>
                            {room && room.images.map((item, index) => (
                                <Col className="mb-3" key={index} md={2}>
                                    <Image cloudName="dmtwoqysj" publicId={item.url}/>
                                </Col>
                            ))}
                            {selectedImages.map((item, index) => (
                                <Col className="mb-3" key={index} md={2}>
                                    <img src={item} alt={item.filename}/>
                                </Col>
                            ))}
                        </Row>

                        <Row className="mt-3">
                            <Col md={6}>
                                <Button
                                    color="primary"
                                    type="submit"
                                >
                                    {room ? 'Edit Room' : 'Add new room'}
                                </Button>
                            </Col>

                            {room &&
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
    )

}