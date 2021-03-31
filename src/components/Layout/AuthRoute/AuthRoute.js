import React from 'react';

import { Route, Redirect } from "react-router-dom";

const AuthRoute = (props) => {

    let token = localStorage.getItem('authToken');

    if (props.auth) {
        return (<Route path={props.path}>
            {props.children}
        </Route>)
    } else {
        return <Redirect to="/login" />

    }


}

export default AuthRoute;