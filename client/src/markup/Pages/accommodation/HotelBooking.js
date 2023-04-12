import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import BookNowModal from '../book-now-modal/BookNowModal';
import { roomActions } from 'actions';
import { useDispatch, useSelector } from 'react-redux';
import { Image, Transformation } from 'cloudinary-react';
import { roomsService } from 'services';
import GoogleMaps from "simple-react-google-maps"


const bg3 = require('../../../images/banner/bnr1.jpg');
function HotelBooking(props) {
    const id = props.match.params.id;
    const room = useSelector(state => state.roomReducer.item)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(roomActions.getById(id))
    }, [dispatch, id])

    const [isOpenModal, setIsOpenModal] = useState(false);
    const handleOpenModal = () => {
        setIsOpenModal(!isOpenModal)
    }
    const settings = {
        dots: false,
        slidesToShow: 1,
        infinite: true,
    };
    const { country, ward, street } = room.address || {}
    return (
        <div>
            <div className="dlab-bnr-inr overlay-black-middle" style={{ backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover' }}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Hotal Booking</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link to={'/'}>Home</Link></li>
                                <li>Hotal Booking</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {room &&
                <div className="content-block">
                    <div className="section-full content-inner bg-white">
                        <div className="container">
                            <div className="row m-b30">
                                <div className="col-lg-8">
                                    <div className="d-flex info-bx m-b30">
                                        <div className="tour-title">
                                            <h2>{room.name}</h2>
                                            {room.address && <p><i className="fa fa-map-marker m-r5"></i>{country}, {ward.pathWithType}, {street}</p>}
                                            <p><span className="site-button button-sm button-gray">{room.category?.name}</span> </p>
                                        </div>
                                        <div className="tour-price ml-auto">
                                            <span>Per Room Per Night</span>
                                            <h2 className="price">{roomsService.formatPrice(room.price)}</h2>
                                            {/* <h4 className="actual-price">4000000</h4> */}
                                        </div>
                                    </div>
                                    <div className="product-gallery on-show-slider">
                                        <Slider {...settings}>
                                            {room.images && room.images.map((item, index) => (
                                                <div className="item" key={index}>
                                                    <div className="dlab-box">
                                                        <div className="dlab-thum-bx">
                                                            <Image cloudName="dmtwoqysj" publicId={item.url} >
                                                                <Transformation width="650" height="425" gravity="south" />
                                                            </Image>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Slider>

                                    </div>
                                    <div className="tour-days">
                                        <h2 className="m-b10">About Hotel</h2>
                                        <p>{room.description}</p>
                                        <h2 className="m-b10">Hotel details</h2>
                                        <p>{room.shortDescription}</p>
                                        <div className="row">
                                            <GoogleMaps
                                                apiKey={"AIzaSyAgDuz2Nd_tVY0H-h0xUimE25_-O85-mdM"}
                                                style={{ height: "500px", width: "100%" }}
                                                zoom={6}
                                                center={{ lat: 37.4224764, lng: -122.0842499 }}
                                                markers={{ lat: 37.4224764, lng: -122.0842499 }} //optional
                                            />
                                            {/* <div className="col-md-12 col-lg-12 col-sm-12">
                                                <ul className="list-hand-point primary">
                                                    <li>Closeness to ISRO (1.6 km) and BEL (2.4 km)</li>
                                                    <li>Cozy rooms with modern interiors</li>
                                                    <li>In-house restaurant serving tasty dishes</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                <h5>Where we are Located</h5>
                                                <ul className="list-hand-point primary">
                                                    <li>The FabHotel RMS Comforts is situated on 5th Main in the Mathikere Extension area</li>
                                                    <li>Yeshwantpur Junction Railway Station is 1.8 km, while Krantivira Sangolli Rayanna Railway Station is 7.3 km from the hotel</li>
                                                    <li>Sandal Soap Factory Metro Station is 2.6 km and Kempegowda International Airport is a 40-minute drive (30.5 km)</li>
                                                    <li>Some of the prominent landmarks near the hotel include BBMP Office (700 m), Ramaiah Institute of Technology (750 m), Indian Institute of Science (950 m), BEL-THALES Systems Limited (1.5 km), ISRO (1.6 km), RTO Office Yeshwanthpura (1.8 km), Antrix Corporation Limited (1.9 km), Bharat Electronics Limited (2.1 km) and Professional Tax Office (2.5 km)</li>
                                                    <li>Sandal Soap Factory Metro Station is 2.6 km and Kempegowda International Airport is a 40-minute drive (30.5 km)</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-12 col-lg-12 col-sm-12">
                                                <h5>Where to Eat</h5>
                                                <ul className="list-hand-point primary">
                                                    <li>The hotel has a restaurant that treats you with a wide range of dishes across multiple cuisines</li>
                                                    <li>Sri Krishna Bhavan (53 m), Shree Sagar (63 m), Delight (72 m), Reddy Mess (140 m), Star Biryani Center (290 m) and Indira Canteen (300 m) are among many dining options around the hotel</li>
                                                </ul>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="sticky-top">
                                        <form className="hotel-booking">
                                            <div className="row">
                                                <div className="col-md-12 col-lg-12 col-xl-12 col-sm-12 col-12">
                                                    <button type="button" className="site-button btn-block" onClick={() => handleOpenModal()}>Book Now</button>
                                                </div>
                                            </div>
                                        </form>

                                        {/*<div className="m-t30">*/}
                                        {/*    <img src={require('../../../images/add/add-bnr.jpg')} className="d-md-none d-xl-block d-lg-block" alt="" />*/}
                                        {/*</div>*/}
                                    </div>
                                </div>
                            </div>
                            <div className="row m-b30">
                                <div className="col-md-12 col-lg-12">
                                    <div className="day-details-bx">
                                        <div className="row">
                                            <div className="col-md-12 col-lg-4">
                                                <h4 className="m-b5">Utilities </h4>
                                                <div className="m-b10">
                                                    <ul className="rating-star">
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                        <li><i className="fa fa-star"></i></li>
                                                    </ul>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <ul className="list-check primary">
                                                            <li>Wifi</li>
                                                            <li>Ti vi</li>

                                                        </ul>
                                                    </div>
                                                    {/* <div className="col-md-6">
                                                        <ul className="list-check primary">
                                                            <li>Bathroom</li>
                                                            <li>Study table</li>
                                                            <li>LCD TV</li>
                                                            <li>Study table</li>
                                                        </ul>
                                                    </div> */}
                                                </div>

                                            </div>
                                            <div className="col-md-7 col-lg-4">
                                                <div className="info-bx ">
                                                    <p>The hotel has a restaurant that treats you with a wide range of dishes across multiple cuisines</p>
                                                    <div className="tour-price">
                                                        <span>Per Room Per Night</span>
                                                        <h2 className="price">{roomsService.formatPrice(room.price)}</h2>
                                                        <h4 className="actual-price">400,000,000 VND</h4>
                                                    </div>
                                                    <div className="m-t20 m-b30">
                                                        <Link to='/remove' className="site-button red">Remove</Link>
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="col-md-5 col-lg-4">
                                                {/* <img src={images[room.image]} className="radius-sm" alt="" /> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <BookNowModal
                            room={room}
                            isOpen={isOpenModal}
                            toggle={handleOpenModal}
                        />
                    </div>

                </div>
            }
        </div>
    )
}
export default HotelBooking;