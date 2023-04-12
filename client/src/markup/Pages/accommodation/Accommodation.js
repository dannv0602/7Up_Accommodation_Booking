import {addressActions, roomActions} from 'actions';
import {Image, Transformation} from 'cloudinary-react';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {roomsService} from 'services';
import Paginator from "react-hooks-paginator";
import {useForm} from "react-hook-form";
import './toggle.css'

const bg3 = require('../../../images/banner/bnr1.jpg');


function Accommodation(props) {
    const dispatch = useDispatch();
    const pageLimit = useSelector(state => state.roomReducer.pageLimit);
    const rooms = useSelector(state => state.roomReducer.items)

    //Pagination hook , modify max item in page limit
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(pageLimit)
    const [data, setData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const handleSubmitPageLimit = (data) => {
        const maxPageItem = parseInt(data.limit, 10);
        if (maxPageItem > 0) {
            if (maxPageItem !== pageLimit) {
                //destroy pagination
                setLimit(null);
                //set new page limit by redux
                dispatch(roomActions.setPageLimit(maxPageItem))
            }
        } else {
            alert("Page limit must to be bigger than 0")
        }
    }


    const {register, handleSubmit} = useForm();


    useEffect(() => {
        //re create pagination
        setLimit(pageLimit)
    }, [pageLimit])
    useEffect(() => {
        dispatch(addressActions.getAllProvince())
        dispatch(roomActions.getAll())
    }, [dispatch])

    useEffect(() => {
        setData(rooms)
    }, [rooms])

    useEffect(() => {
        setCurrentData(data.slice(offset, offset + pageLimit));
    }, [offset, pageLimit, data]);

    const handleSortChange = (e) => {
        dispatch(roomActions.sortByPrice(e.target.value))
    }

    return (
        <div>
            <div className="dlab-bnr-inr overlay-black-middle"
                 style={{backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover'}}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">Packages</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link>Home</Link></li>
                                <li>Accommodation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-full bg-white content-inner dlab-about-1 promotions">
                <div className="container">

                    <div className="row packages">
                        <div className="col-3 mr-3">
                            <ul style={{"listStyle": "none"}}>
                                <li>
                                    <div className="input-group mb-3">
                                        <input type="text" className="form-control" placeholder="Search"/>
                                        <div className="input-group-append">
                                            <button className="btn btn-outline-secondary" type="button"><i
                                                className="fa fa-search"/>
                                            </button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <h2>Sort by price</h2>
                            <ul>
                                <li>
                                    <div className="input-block">
                                        <input id="increase" name="price" value="increase" type="radio"
                                               onChange={handleSortChange}/>
                                        <label htmlFor="increase">Low to high</label>
                                    </div>
                                </li>
                                <li>
                                    <div className="input-block">
                                        <input id="decrease" name="price" value="decrease" type="radio"
                                               onChange={handleSortChange}/>
                                        <label htmlFor="decrease">High to low</label>
                                    </div>
                                </li>
                            </ul>

                        </div>
                        <div className="col-9 row ">

                            {currentData && currentData.map((item, index) => (
                                <div className="col-md-6 col-xl-3 col-sm-6 m-b20" key={index}>
                                    <div className="dlab-box">
                                        <div className="dlab-media">
                                            <Link to={`/hotelbooking/${item.id}`}>
                                                <Image cloudName="dmtwoqysj" publicId={item.images[0].url}>
                                                    <Transformation width="400" height="250" gravity="south"
                                                                    crop="fill"/>
                                                </Image>
                                            </Link>
                                        </div>
                                        <div className="dlab-info p-a15 border-1">
                                            <h4 className="dlab-title m-t0"><Link
                                                href="booking-details.html">{item.name}</Link></h4>
                                            <span className="location">{item.address.ward.pathWithType}</span>
                                            <div className="package-content">
                                                <ul className="package-meta">
                                                    <li><span
                                                        className="fa fa-comment"></span> Reviews: {item.numRating}
                                                    </li>
                                                    <li><span className="fa fa-star"></span> Star: {item.rating} </li>
                                                </ul>
                                                <div className="clearfix">
                                                    <span
                                                        className="package-price pull-left text-primary">{roomsService.formatPrice(item.price)}</span>
                                                    <Link to={`/hotelbooking/${item.id}`}
                                                          className="site-button pull-right w-100">View
                                                        details</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>))}
                        </div>
                    </div>
                    {limit &&
                        <Paginator
                            totalRecords={data.length}
                            pageLimit={limit}
                            pageNeighbours={2}
                            setOffset={setOffset}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                    }
                    <div className="text-center">
                        <form onSubmit={handleSubmit(handleSubmitPageLimit)}>
                            <label className="mr-1">Max Item On Page: </label>
                            <input className="max-w50 mr-2"
                                   type="number"
                                   defaultValue={pageLimit}
                                   {...register("limit")}
                            />
                            <button className="btn-dark"> Ok</button>
                        </form>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Accommodation;