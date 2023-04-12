import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import {TabContent, TabPane} from 'reactstrap';
import classnames from 'classnames';
import {useDispatch, useSelector} from "react-redux";
import {userService} from "../../../services";
import {userActions} from "../../../actions";
import OrderManagerUser from "./OrderManagerUser";


const bg3 = require('../../../images/banner/bnr1.jpg');

function Profile(props) {
    const user = useSelector(state => state.userReducer.item)
    const id = userService.getCurrentUser().id;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.getById(id))
    }, [id, dispatch])
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <div>
            <div className="dlab-bnr-inr overlay-black-middle"
                 style={{backgroundImage: "url(" + bg3 + ")", backgroundSize: 'cover'}}>
                <div className="container">
                    <div className="dlab-bnr-inr-entry">
                        <h1 className="text-white">User profile</h1>
                        <div className="breadcrumb-row">
                            <ul className="list-inline">
                                <li><Link to={''}>Home</Link></li>
                                <li>User Profile</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="listing-details-head">
                <div className="container">
                    <div className="listing-info-box">
                        <div className="listing-theme-logo">
                            <img src={require('../../../images/gallery/img1.jpg')} alt=""/>
                        </div>
                        <div className="listing-info">
                            <div className="listing-info-left">
                                <h3 className="title">{user.fullName}</h3>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="listing-details-nav">
                <div className="container">
                    <ul className="listing-nav nav justify-content-center">
                        <li>
                            <Link className={classnames({active: activeTab === '1'})}
                                  onClick={() => {
                                      toggle('1');
                                  }}><i className="la la-file-text"></i><span>Information</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={classnames({active: activeTab === '2'})}
                                  onClick={() => {
                                      toggle('2');
                                  }}><i className="la la-archive"></i><span>Order History</span>
                            </Link>
                        </li>
                        <li>
                            <Link className={classnames({active: activeTab === '3'})}
                                  onClick={() => {
                                      toggle('3');
                                  }}><i className="la la-heart-o"></i><span>Favorite</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="section-full listing-details-content">
                <div className="container">
                    <TabContent activeTab={activeTab}>
                        <TabPane tabId="1">
                            <div className="row">
                                <div className="container panel panel-primary">
                                    <div className="panel-heading">
                                        <h3 className="panel-title text-center  ">
                                            Username
                                        </h3>
                                    </div>
                                    <div className="panel-body">
                                        <div className="row">
                                            <div className="col-md-3 col-lg-3 " align="center">
                                            </div>
                                            <div className=" col-md-9 col-lg-9 ">
                                                <table className="table table-user-information">
                                                    <tbody>
                                                    <tr>
                                                        <td>Full Name:</td>
                                                        <td>{user.fullName}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Date of Birth:</td>
                                                        <td>{user.dateOfBirth}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Phone Number:</td>
                                                        <td>{user.phoneNumber}</td>
                                                    </tr>

                                                    <tr>
                                                        <td>Gender:</td>
                                                        <td>{user.sex}</td>
                                                    </tr>
                                                    <tr>
                                                        <td>Home Address:</td>
                                                        <td>{user.address}</td>
                                                    </tr>

                                                    </tbody>
                                                </table>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="2">
                            <div className="row">
                                <div >
                                    <OrderManagerUser/>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="3">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title">listing features</h3>
                                        </div>
                                        <div className="content-body">
                                            <ul className="icon-box-list list-col-4">
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-life-buoy"></i>
                                                    </div>
                                                    <span>Expert</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-cutlery"></i>
                                                    </div>
                                                    <span>Restaurant</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-shopping-cart"></i>
                                                    </div>
                                                    <span>Shopping</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-line-chart"></i>
                                                    </div>
                                                    <span>State Street</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-lemon-o"></i>
                                                    </div>
                                                    <span>Tea Tasting</span>
                                                </Link></li>
                                                <li><Link to={''} className="icon-box-info">
                                                    <div className="icon-cell bg-gray">
                                                        <i className="la la-wifi"></i>
                                                    </div>
                                                    <span>Wifi</span>
                                                </Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="4">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title">photos</h3>
                                        </div>
                                        <div className="content-body">
                                            <div className="widget widget_gallery gallery-grid-4 lightgallery">
                                                <ul>
                                                    <li>
                                                        <span className="check-km" title="Light Gallery Grid 1">
                                                            <img src={require('../../../images/gallery/img1.jpg')}
                                                                 alt=""/>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="check-km" title="Light Gallery Grid 1">
                                                            <img src={require('../../../images/gallery/img2.jpg')}
                                                                 alt=""/>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="check-km" title="Light Gallery Grid 1">
                                                            <img src={require('../../../images/gallery/img3.jpg')}
                                                                 alt=""/>
                                                        </span>
                                                    </li>
                                                    <li>
                                                        <span className="check-km" title="Light Gallery Grid 1">
                                                            <img src={require('../../../images/gallery/img4.jpg')}
                                                                 alt=""/>
                                                        </span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="5">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title">videos</h3>
                                        </div>
                                        <div className="content-body">
                                            <div className="widget widget_video video-grid-4">
                                                <ul>
                                                    <li>
                                                        <div className="dlab-post-thum video-bx">
                                                            <img src={require('../../../images/gallery/pic1.jpg')}
                                                                 alt=""/>
                                                            <div className="video-play-icon">
                                                                <Link to={''} className="popup-youtube video"><i
                                                                    className="la la-play"></i></Link>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="6">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title">events</h3>
                                        </div>
                                        <div className="content-body">
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="listing-bx event-listing m-b30">
                                                        <div className="listing-media">
                                                            <Link to={''}>
                                                                <img src={require('../../../images/gallery/pic1.jpg')}
                                                                     alt=""/>
                                                            </Link>
                                                        </div>
                                                        <div className="listing-info">
                                                            <h3 className="title"><Link to={''}>Moments To Remember From
                                                                Directory</Link></h3>
                                                            <ul className="event-meta">
                                                                <li className="event-date"><span
                                                                    className="text-primary">SEP</span>
                                                                    <strong>04</strong></li>
                                                                <li>Tuesday 08:00</li>
                                                                <li>Sydney NSW, Australia</li>
                                                                <li>44 people interested</li>
                                                            </ul>
                                                        </div>
                                                        <div className="event-bottom">
                                                            <ul>
                                                                <li className="event-hosted"><span>Hosted By </span>
                                                                    <Link to={''}>John Smith</Link></li>
                                                                <li><Link to={''}><i
                                                                    className="la la-star-o"></i></Link></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                        <TabPane tabId="7">
                            <div className="row">
                                <div className="col-xl-8">

                                    <div className="comments-review-area">
                                        <div className="comments-review-box">
                                            <div className="review-header">
                                                <div className="review-comment-author">
                                                    <div className="review-avatar">
                                                        <img src={require('../../../images/testimonials/pic1.jpg')}
                                                             alt=""/>
                                                    </div>
                                                    <div className="comment-info">
                                                        <div className="info-group">
                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link>
                                                            </h3>
                                                        </div>
                                                        <span className="comment-date">July 25, 2019</span>
                                                    </div>
                                                </div>
                                                <div className="clearfix d-flex">
                                                    <div className="average-reviews-single">
                                                        <div className="average-reviews-info">
                                                            <h4 className="average-reviews">7.7</h4>
                                                            <div className="clearfix">
                                                                <h4 className="average-reviews-in">/ 10</h4>
                                                                <span>Quality</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown dropdown-btn dropdown-btn-sm">
                                                        <button className="site-button-link button-xl dropdown-toggle"
                                                                type="button" id="dropdownMenuButton"
                                                                data-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false">
                                                            <i className="la la-ellipsis-h"></i>
                                                        </button>
                                                        <div className="dropdown-menu"
                                                             aria-labelledby="dropdownMenuButton">
                                                            <Link className="dropdown-item" data-toggle="modal"
                                                                  data-target="#report-reviews" to={''}><i
                                                                className="la la-flag-o"></i><span> Report Review</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <h3 className="review-title"><Link to={''}>Food & Drink</Link></h3>
                                                <p className="review-content">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting industry</p>
                                                <ul className="review-meta">
                                                    <li>4 Liked</li>
                                                    <li>4 Shared</li>
                                                </ul>
                                            </div>
                                            <div className="review-footer">
                                                <div className="review-btn">
                                                    <ul>
                                                        <li><Link to={''}><i className="la la-thumbs-up"></i>
                                                            <span>Like</span></Link></li>
                                                        <li><Link to={''}><i className="la la-comments-o"></i>
                                                            <span>Comment</span></Link></li>
                                                        <li>
                                                            <div className="dropdown dropdown-btn">
                                                                <button className="site-button-link dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">
                                                                    <i className="la la-share-square-o m-r5"></i> Share
                                                                </button>
                                                                <div className="dropdown-menu"
                                                                     aria-labelledby="dropdownMenuButton">
                                                                    <Link
                                                                        className="dropdown-item site-button-link facebook"
                                                                        to={''}>
                                                                        <i className="fa fa-facebook"></i><span>Facebook</span></Link>
                                                                    <Link
                                                                        className="dropdown-item site-button-link twitter"
                                                                        to={''}>
                                                                        <i className="fa fa-twitter"></i><span> Twitter</span></Link>
                                                                    <Link
                                                                        className="dropdown-item site-button-link pinterest"
                                                                        to={''}>
                                                                        <i className="fa fa-pinterest"></i><span> Pinterest</span></Link>
                                                                    <Link
                                                                        className="dropdown-item site-button-link linkedin"
                                                                        to={''}>
                                                                        <i className="fa fa-linkedin"></i><span> Linkedin</span></Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="review-comments-list">
                                                    <ul>
                                                        <li>
                                                            <div className="review-comment-author">
                                                                <div className="review-avatar">
                                                                    <img
                                                                        src={require('../../../images/testimonials/pic1.jpg')}
                                                                        alt=""/>
                                                                </div>
                                                                <div className="comment-info">
                                                                    <div className="info-group">
                                                                        <h3 className="title"><Link to={''}>Diamond
                                                                            Anderson</Link></h3>
                                                                        <p className="comment-text">Lorem Ipsum is
                                                                            simply dummy text</p>
                                                                    </div>
                                                                    <span className="comment-date">July 25, 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="review-comment-author">
                                                                <div className="review-avatar">
                                                                    <img
                                                                        src={require('../../../images/testimonials/pic1.jpg')}
                                                                        alt=""/>
                                                                </div>
                                                                <div className="comment-info">
                                                                    <div className="info-group">
                                                                        <h3 className="title"><Link to={''}>Diamond
                                                                            Anderson</Link></h3>
                                                                        <p className="comment-text">Lorem Ipsum is
                                                                            simply dummy text</p>
                                                                    </div>
                                                                    <span className="comment-date">July 25, 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="review-comments-form">
                                                    <div className="review-avatar">
                                                        <img src={require('../../../images/testimonials/pic1.jpg')}
                                                             alt=""/>
                                                    </div>
                                                    <div className="form-area">
                                                        <textarea className="form-control"
                                                                  placeholder="Type To Message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comments-review-box">
                                            <div className="review-header">
                                                <div className="review-comment-author">
                                                    <div className="review-avatar">
                                                        <img src={require('../../../images/testimonials/pic1.jpg')}
                                                             alt=""/>
                                                    </div>
                                                    <div className="comment-info">
                                                        <div className="info-group">
                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link>
                                                            </h3>
                                                        </div>
                                                        <span className="comment-date">July 25, 2019</span>
                                                    </div>
                                                </div>
                                                <div className="clearfix d-flex">
                                                    <div className="average-reviews-single">
                                                        <div className="average-reviews-info">
                                                            <h4 className="average-reviews">7.7</h4>
                                                            <div className="clearfix">
                                                                <h4 className="average-reviews-in">/ 10</h4>
                                                                <span>Quality</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown dropdown-btn dropdown-btn-sm">
                                                        <button className="site-button-link button-xl dropdown-toggle"
                                                                type="button" id="dropdownMenuButton"
                                                                data-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false">
                                                            <i className="fa fa-ellipsis-h"></i>
                                                        </button>
                                                        <div className="dropdown-menu"
                                                             aria-labelledby="dropdownMenuButton">
                                                            <Link className="dropdown-item" data-toggle="modal"
                                                                  data-target="#report-reviews" to={''}><i
                                                                className="la la-flag-o"></i><span> Report Review</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <h3 className="review-title"><Link to={''}>Food & Drink</Link></h3>
                                                <p className="review-content">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting industry</p>
                                                <ul className="review-meta">
                                                    <li>4 Liked</li>
                                                    <li>4 Shared</li>
                                                </ul>
                                            </div>
                                            <div className="review-footer">
                                                <div className="review-btn">
                                                    <ul>
                                                        <li><Link to={''}><i className="la la-thumbs-up"></i>
                                                            <span>Like</span></Link></li>
                                                        <li><Link to={''}><i className="la la-comments-o"></i>
                                                            <span>Comment</span></Link></li>
                                                        <li>
                                                            <div className="dropdown dropdown-btn">
                                                                <button className="site-button-link dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">
                                                                    <i className="la la-share-square-o m-r5"></i> Share
                                                                </button>
                                                                <div className="dropdown-menu"
                                                                     aria-labelledby="dropdownMenuButton">
                                                                    <Link
                                                                        className="dropdown-item site-button-link facebook"
                                                                        to={''}>
                                                                        <i className="fa fa-facebook"></i><span>Facebook</span></Link>
                                                                    <Link
                                                                        className="dropdown-item site-button-link twitter"
                                                                        to={''}>
                                                                        <i className="fa fa-twitter"></i><span> Twitter</span></Link>
                                                                    <Link
                                                                        className="dropdown-item site-button-link pinterest"
                                                                        to={''}>
                                                                        <i className="fa fa-pinterest"></i><span> Pinterest</span></Link>
                                                                    <Link
                                                                        className="dropdown-item site-button-link linkedin"
                                                                        to={''}>
                                                                        <i className="fa fa-linkedin"></i><span> Linkedin</span></Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="review-comments-list">
                                                    <ul>
                                                        <li>
                                                            <div className="review-comment-author">
                                                                <div className="review-avatar">
                                                                    <img
                                                                        src={require('../../../images/testimonials/pic1.jpg')}
                                                                        alt=""/>
                                                                </div>
                                                                <div className="comment-info">
                                                                    <div className="info-group">
                                                                        <h3 className="title"><Link to={''}>Diamond
                                                                            Anderson</Link></h3>
                                                                        <p className="comment-text">Lorem Ipsum is
                                                                            simply dummy text</p>
                                                                    </div>
                                                                    <span className="comment-date">July 25, 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="review-comment-author">
                                                                <div className="review-avatar">
                                                                    <img
                                                                        src={require('../../../images/testimonials/pic1.jpg')}
                                                                        alt=""/>
                                                                </div>
                                                                <div className="comment-info">
                                                                    <div className="info-group">
                                                                        <h3 className="title"><Link to={''}>Diamond
                                                                            Anderson</Link></h3>
                                                                        <p className="comment-text">Lorem Ipsum is
                                                                            simply dummy text</p>
                                                                    </div>
                                                                    <span className="comment-date">July 25, 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="review-comments-form">
                                                    <div className="review-avatar">
                                                        <img src={require('../../../images/testimonials/pic1.jpg')}
                                                             alt=""/>
                                                    </div>
                                                    <div className="form-area">
                                                        <textarea className="form-control"
                                                                  placeholder="Type To Message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="comments-review-box">
                                            <div className="review-header">
                                                <div className="review-comment-author">
                                                    <div className="review-avatar">
                                                        <img src={require('../../../images/testimonials/pic1.jpg')}
                                                             alt=""/>
                                                    </div>
                                                    <div className="comment-info">
                                                        <div className="info-group">
                                                            <h3 className="title"><Link to={''}>Diamond Anderson</Link>
                                                            </h3>
                                                        </div>
                                                        <span className="comment-date">July 25, 2019</span>
                                                    </div>
                                                </div>
                                                <div className="clearfix d-flex">
                                                    <div className="average-reviews-single">
                                                        <div className="average-reviews-info">
                                                            <h4 className="average-reviews">7.7</h4>
                                                            <div className="clearfix">
                                                                <h4 className="average-reviews-in">/ 10</h4>
                                                                <span>Quality</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dropdown dropdown-btn dropdown-btn-sm">
                                                        <button className="site-button-link button-xl dropdown-toggle"
                                                                type="button" id="dropdownMenuButton"
                                                                data-toggle="dropdown" aria-haspopup="true"
                                                                aria-expanded="false">
                                                            <i className="fa fa-ellipsis-v"></i>
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right"
                                                             aria-labelledby="dropdownMenuButton">
                                                            <Link className="dropdown-item" data-toggle="modal"
                                                                  data-target="#report-reviews" to={''}><i
                                                                className="la la-flag-o"></i><span> Report Review</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="review-body">
                                                <h3 className="review-title"><Link to={''}>Food & Drink</Link></h3>
                                                <p className="review-content">Lorem Ipsum is simply dummy text of the
                                                    printing and typesetting industry</p>
                                                <ul className="review-meta">
                                                    <li>4 Liked</li>
                                                    <li>4 Shared</li>
                                                </ul>
                                            </div>
                                            <div className="review-footer">
                                                <div className="review-btn">
                                                    <ul>
                                                        <li><Link to={''}><i className="la la-thumbs-up"></i>
                                                            <span>Like</span></Link></li>
                                                        <li><Link to={''}><i className="la la-comments-o"></i>
                                                            <span>Comment</span></Link></li>
                                                        <li>
                                                            <div className="dropdown dropdown-btn">
                                                                <button className="site-button-link dropdown-toggle"
                                                                        type="button" id="dropdownMenuButton"
                                                                        data-toggle="dropdown" aria-haspopup="true"
                                                                        aria-expanded="false">
                                                                    <i className="la la-share-square-o m-r5"></i> Share
                                                                </button>
                                                                <div className="dropdown-menu"
                                                                     aria-labelledby="dropdownMenuButton">
                                                                    <Link
                                                                        className="dropdown-item site-button-link facebook"
                                                                        to={''}>
                                                                        <i className="fa fa-facebook"></i><span>Facebook</span></Link>
                                                                    <Link
                                                                        className="dropdown-item site-button-link twitter"
                                                                        to={''}>
                                                                        <i className="fa fa-twitter"></i><span> Twitter</span></Link>
                                                                    <Link
                                                                        className="dropdown-item site-button-link pinterest"
                                                                        to={''}>
                                                                        <i className="fa fa-pinterest"></i><span> Pinterest</span></Link>
                                                                    <Link
                                                                        className="dropdown-item site-button-link linkedin"
                                                                        to={''}>
                                                                        <i className="fa fa-linkedin"></i><span> Linkedin</span></Link>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="review-comments-list">
                                                    <ul>
                                                        <li>
                                                            <div className="review-comment-author">
                                                                <div className="review-avatar">
                                                                    <img
                                                                        src={require('../../../images/testimonials/pic1.jpg')}
                                                                        alt=""/>
                                                                </div>
                                                                <div className="comment-info">
                                                                    <div className="info-group">
                                                                        <h3 className="title"><Link to={''}>Diamond
                                                                            Anderson</Link></h3>
                                                                        <p className="comment-text">Lorem Ipsum is
                                                                            simply dummy text</p>
                                                                    </div>
                                                                    <span className="comment-date">July 25, 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="review-comment-author">
                                                                <div className="review-avatar">
                                                                    <img
                                                                        src={require('../../../images/testimonials/pic1.jpg')}
                                                                        alt=""/>
                                                                </div>
                                                                <div className="comment-info">
                                                                    <div className="info-group">
                                                                        <h3 className="title"><Link to={''}>Diamond
                                                                            Anderson</Link></h3>
                                                                        <p className="comment-text">Lorem Ipsum is
                                                                            simply dummy text</p>
                                                                    </div>
                                                                    <span className="comment-date">July 25, 2019</span>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="review-comments-form">
                                                    <div className="review-avatar">
                                                        <img src={require('../../../images/testimonials/pic1.jpg')}
                                                             alt=""/>
                                                    </div>
                                                    <div className="form-area">
                                                        <textarea className="form-control"
                                                                  placeholder="Type To Message"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-xl-4">
                                    <div className="content-box">
                                        <div className="content-header">
                                            <h3 className="title">24 REVIEWS FOR triper</h3>
                                        </div>
                                        <div className="content-body">
                                            <div className="average-reviews-list bar-rating">
                                                <ul>
                                                    <li>
                                                        <div className="average-reviews-info">
                                                            <span>Quality</span>
                                                            <div className="bar">
                                                                <div className="bar-rat bg-primary"></div>
                                                            </div>
                                                            <h4 className="average-reviews">8.5</h4>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="average-reviews-info">
                                                            <span>Location</span>
                                                            <div className="bar">
                                                                <div className="bar-rat bg-primary"></div>
                                                            </div>
                                                            <h4 className="average-reviews">7.5</h4>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="average-reviews-info">
                                                            <span>Space</span>
                                                            <div className="bar">
                                                                <div className="bar-rat bg-primary"></div>
                                                            </div>
                                                            <h4 className="average-reviews">7.4</h4>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="average-reviews-info">
                                                            <span>Service</span>
                                                            <div className="bar">
                                                                <div className="bar-rat bg-primary"></div>
                                                            </div>
                                                            <h4 className="average-reviews">7.9</h4>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="average-reviews-info">
                                                            <span>Price</span>
                                                            <div className="bar">
                                                                <div className="bar-rat bg-primary"></div>
                                                            </div>
                                                            <h4 className="average-reviews">7.4</h4>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPane>
                    </TabContent>
                </div>
            </div>
        </div>
    )
        ;
}

export default Profile;