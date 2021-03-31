import React, { createContext } from 'react';

const UserContext = createContext(JSON.parse(localStorage.getItem('user')));


export default UserContext;