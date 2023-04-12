import Accommodation from 'markup/Pages/accommodation/Accommodation';
import BookingDetails from 'markup/Pages/accommodation/BookingDetails';
import Hotel from 'markup/Pages/accommodation/Hotel';
import HotelBooking from 'markup/Pages/accommodation/HotelBooking';
import BlogDetails from 'markup/Pages/blog/BlogDetails';
import BlogLeftSidebar from 'markup/Pages/blog/BlogLeftSidebar';
import Error404 from 'markup/Pages/Error';
import ForgotPass from 'markup/Pages/forgot/ForgotPass';
import ResetPassword from 'markup/Pages/forgot/ResetPassword';
import GarbageRoom from 'markup/Pages/admin/room-manager/GarbageRoom';
import RoomsManager from 'markup/Pages/admin/room-manager/RoomsManager';
import Login2 from 'markup/Pages/login/Login2';
import Order from 'markup/Pages/order/Order';
import OrderCreateSuccess from 'markup/Pages/order/OrderCreateSuccess';
import Payment from 'markup/Pages/payment/Payment';
import Register from 'markup/Pages/register/Register-react-hook-form';
import Register2 from 'markup/Pages/register/Register2';
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Homepage2 from "../../markup/Pages/homepage/Homepage2";
import Profile from "../../markup/Pages/profile/Profile";
import ResetPasswordCheck from "../../markup/Pages/forgot/ResetPasswordCheck";
import ForgotSuccess from "../../markup/Pages/forgot/ForgotSuccess";
import Contact from "../../markup/Pages/contact/Contact";
import About from "../../markup/Pages/about/About";
import RegisterVerified from "../../markup/Pages/register/Register-verify";

function PublicRoutes() {
    return (
        <Switch>
            <Route path={['/', '/home']} exact component={Homepage2}/>
            <Route path='/login' exact component={Login2}/>
            <Route path='/register' exact component={Register}/>
            <Route path='/register2' exact component={Register2}/>
            <Route path='/forgot' exact component={ForgotPass}/>
            <Route path='/hotel' exact component={Hotel}/>
            <Route path='/booking/:id' exact component={BookingDetails}/>
            <Route path='/accommodation' exact component={Accommodation}/>
            <Route path='/error' exact component={Error404}/>
            <Route path='/profile' exact component={Profile}/>
            <Route path='/contact' exact component={Contact}/>
            <Route path='/register-verify/:e&:v' exact component={RegisterVerified}/>
            <Route path='/about' exact component={About}/>
            <Route path='/forgot' exact component={ForgotPass}/>
            <Route path='/forgot-success' exact component={ForgotSuccess}/>
            <Route path='/hotelbooking/:id' exact component={HotelBooking}/>
            <Route path='/blogleftsidebar' exact component={BlogLeftSidebar}/>
            <Route path='/blogdetails' exact component={BlogDetails}/>
            <Route path='/reset-password/:id&:token' exact component={ResetPasswordCheck}/>
            <Route path='/reset' exact component={ResetPassword}/>
            <Route path='/order' exact component={Order}/>
            <Route path='/payment' exact component={Payment}/>
            <Route path='/order/success' exact component={OrderCreateSuccess}/>
            <Route path='/host/rooms-manager' exact component={RoomsManager}/>
            <Route path='/host/rooms-manager/garbage' exact component={GarbageRoom}/>
        </Switch>
    )
}

export default PublicRoutes;