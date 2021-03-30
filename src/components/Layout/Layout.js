import React, { useContext, createContext, useState } from "react";
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

import "./Layout.scss";
function prueba() {
    console.log('listo');
}

function Layout(props) {
    let toggleMenu = null;
    return (
        <>
            <Router>
                <NavBar isLoged={false} toggleMenu={toggleMenu} />

                <Switch>

                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route path="/my-account">
                        <MyAccount />
                    </Route>

                    <Route path="/events">
                        <EventsIndex />
                    </Route>
                    <Route path="/my-profile">
                        <MyAccountProfile />
                    </Route>

                    <Route path="/my-refers">
                        <MyAccountRefers />
                    </Route>

                    <Route path="/my-classroom">
                        <MyAccountClassRoom />
                    </Route>

                    <Route path="/my-config">
                        <MyConfig />
                    </Route>
                    <Route path="/gift-codes">
                        <GiftCodes />
                    </Route>


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