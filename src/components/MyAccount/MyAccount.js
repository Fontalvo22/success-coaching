import React from 'react';

import NavSections from './NavSections/NavSections';
import Courses from '../Courses/Courses';
import MyInfo from './MyInfo/MyInfo';
import Events from '../Home/Events/Events';
import './MyAccount.scss';

function MyAccount(props) {

    return (
        <div className="MyAccount">
            <div className="container">
                <NavSections />
                <MyInfo user={props.user} />
                <Courses />
                <Events />
            </div>
        </div>
    );

}

export default MyAccount;