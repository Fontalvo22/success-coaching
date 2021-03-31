import { createContext } from 'react';

import { Redirect } from 'react-router-dom';

const AttemptLogin = (email, password, setter) => {
  const users = [{
    email: 'franklin.fontalvo@gmail.com',
    password: '12345678',
    name: 'Franklin',
    lastname: 'Valera',
    userName: 'Fontalvo22',
  },
  {
    email: 'prueba@test.com',
    password: '12345678',
    name: 'Franklin',
    lastname: 'Fontalvo',
    userName: 'Valera22',
  },
  {
    email: 'usuario@prueba.com',
    password: '12345678',
    name: 'Franklin',
    lastname: 'Lopez',
    userName: 'Val25',
  },
  {
    email: 'hola@mundo.com',
    password: '12345678',
    name: 'Franklin',
    lastname: 'Valera',
    userName: 'Fontalvo22',
  }];

  //Este es solo un login de prueba

  for (let i = 0; i < users.length; i++) {

    if (users[i].email == email && users[i].password == password) {

      let token = 'Bearer-12345678';

      let userContext = createContext({ token: token, user: users[i], logged: true });

      console.log(users[i]);

      localStorage.setItem('user', JSON.stringify(users[i]));
      localStorage.setItem('authToken', 'Bearer - 12345678');

      return true;

      break;
    }

    if (i == users.length - 1) {
      return false;
    }
  }
}

export { AttemptLogin };