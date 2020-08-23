import React from 'react';
import {GlobalStyle} from './styles/GlobalStyle';

import { Login } from './pages/Login';
import { Register } from './pages/Register';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Register />
    </>
  );
};
