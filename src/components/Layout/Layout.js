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

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <AuthRoute path="/my-account" auth={logged}>
                        <MyAccount user={user} />
                    </AuthRoute>

                    <Route path="/events">
                        <EventsIndex />
                    </Route>

                    <AuthRoute path="/my-profile" auth={logged} >
                        <MyAccountProfile user={user} />
                    </AuthRoute>

                    <AuthRoute path="/my-refers" auth={logged}>
                        <MyAccountRefers />
                    </AuthRoute>

                    <AuthRoute path="/my-classroom" auth={logged}>
                        <MyAccountClassRoom />
                    </AuthRoute>

                    <AuthRoute path="/my-config" auth={logged}>
                        <MyConfig />
                    </AuthRoute>
                    <AuthRoute path="/gift-codes" auth={logged}>
                        <GiftCodes />
                    </AuthRoute>

                    <AuthRoute path="/my-banks" auth={logged}>
                        <MyBanks />
                    </AuthRoute>

                    <AuthRoute path="/support" auth={logged}>
                        <Support />
                    </AuthRoute>


                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/login">
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