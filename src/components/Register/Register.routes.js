import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Register from './Register';

function RegisterRoutes() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Register />
                </Route>
            </Switch>
        </Router>
    );

}


export default RegisterRoutes;