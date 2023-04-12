import React, { useEffect } from 'react'
import Slider from "react-slick";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { roomActions } from 'actions';
import { Image, Transformation } from 'cloudinary-react';

function Slick(props) {
    const rooms = useSelector(state => state.roomReducer.itemsGroupByProvine)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(roomActions.groupByProvince())
    }, [dispatch])
    const settings = {
        dots: false,
        slidesToShow: 4,
        infinite: true,
        autoplay: false,
        speed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };
    return (
        <div>
            <div className="bg-white content-inner-1">
                <div className="container">
                    <div className="section-head d-flex text-black">
                        <div className="flex-grow-1">
                            <h2 className="text-uppercase m-b0">Popular Destinations</h2>
                            <p className="m-b0">CHOOSE YOUR NEXT DESTINATION</p>
                        </div>
                        <div className="align-self-center">
                            <Link to={'/packages'} className="site-button button-md pull-right m-t5">View All</Link>
                        </div>
                    </div>
                </div>
                <div className="section-content">
                    <Slider className="destination" {...settings}>
                        {rooms &&
                            rooms.map((item, index) => (
                                <div className="item" key={index}>
                                    <div className="dlab-box">
                                        <div className="dlab-media dlab-img-effect zoom-slow dlab-img-overlay2">
                                            <Image cloudName="dmtwoqysj" publicId={item.image}>
                                                <Transformation width="400" height="250" gravity="south" crop="fill" />
                                            </Image>
                                            <div className="dlab-info-has p-a20 no-hover ">
                                                <div className="dlab-info-has-text">
                                                    <h3 className="text-white">{item.id} <span className="text-primary pull-right">{item.total} places</span></h3>
                                                    <Link to={`/packages/${item.id}`} className="site-button-link">View All Tours</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))

                        }
                    </Slider>
                </div>
            </div>
        </div>

    )

}
export default Slick;