import React, { memo, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import Auth from './Auth';
import { history } from 'helpers';
import Header from 'markup/Layout/Header';
import Footer from 'markup/Layout/Footer';
import { useDispatch } from 'react-redux';
import { alertActions } from 'actions';
import ScrollToTop from "../../markup/Element/ScrollToTop";

function Routes(props) {

    const dispatch = useDispatch();
    useEffect(() => {
        history.listen((location, action) => {
            dispatch(alertActions.clear());
        }, []);
    });
    return (
        <Router history={history}>
            <Header />
            <Switch>
                <ScrollToTop>
                <Route path='/admin'>
                    <PrivateRoutes />
                </Route>
                <Route path="">
                    <Auth />
                </Route>
                </ScrollToTop>
            </Switch>
            <Footer />
        </Router>
    )
}

export default memo(Routes);