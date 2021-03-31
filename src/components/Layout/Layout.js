import React, { useContext, useState, createContext } from "react";
import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Register from '../Register/Register';
import Home from '../Home/Home';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import MyAccount from '../MyAccount/MyAccount';
import GiftCodes from '../MyAccount/GiftCodes/GiftCodes';
import EventsIndex from '../EventsIndex/EventsIndex';
import MyAccountProfile from '../MyAccount/MyAccountProfile/MyAccountProfile';
import MyAccountRefers from '../MyAccount/MyAccountRefers/MyAccountRefers';
import MyAccountClassRoom from '../MyAccount/MyAccountClassRoom/MyAccountClassRoom';
import MyConfig from '../MyAccount/MyConfig/MyConfig';
import AuthRoute from './AuthRoute/AuthRoute';
import MyBanks from '../MyAccount/MyBanks/MyBanks';
import Support from '../MyAccount/Support/Support';

import "./Layout.scss";

function Layout(props) {
    let toggleMenu = null;


    let logged = false;
    const user = localStorage.getItem('user');


    if (user != null) {
        logged = true;
    } else {
        logged = false;
    }

    return (
        <>
            <Router>
                <NavBar isLoged={logged} user={user} toggleMenu={toggleMenu} />

                <Switch>
                    <Route exact path="success-coaching/">
                        <Home />
                    </Route>

                    <AuthRoute path="success-coaching/my-account" auth={logged}>
                        <MyAccount user={user} />
                    </AuthRoute>

                    <Route path="success-coaching/events">
                        <EventsIndex />
                    </Route>

                    <AuthRoute path="success-coaching/my-profile" auth={logged} >
                        <MyAccountProfile user={user} />
                    </AuthRoute>

                    <AuthRoute path="success-coaching/my-refers" auth={logged}>
                        <MyAccountRefers />
                    </AuthRoute>

                    <AuthRoute path="success-coaching/my-classroom" auth={logged}>
                        <MyAccountClassRoom />
                    </AuthRoute>

                    <AuthRoute path="success-coaching/my-config" auth={logged}>
                        <MyConfig />
                    </AuthRoute>
                    <AuthRoute path="success-coaching/gift-codes" auth={logged}>
                        <GiftCodes />
                    </AuthRoute>

                    <AuthRoute path="success-coaching/my-banks" auth={logged}>
                        <MyBanks />
                    </AuthRoute>

                    <AuthRoute path="success-coaching/support" auth={logged}>
                        <Support />
                    </AuthRoute>


                    <Route path="success-coaching/register">
                        <Register />
                    </Route>
                    <Route path="success-coaching/login">
                        <Login />
                    </Route>

                    <Route path="*">
                        <NotFound />
                    </Route>

                </Switch>
                <Footer />

            </Router>
        </>
    );

}
export default Layout;