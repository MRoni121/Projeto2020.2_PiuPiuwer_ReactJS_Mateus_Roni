import React from 'react';
import Routes from './routes'
import GlobalStyle from './styles/global';
import {AuthProvider} from './hooks/useAuth';
import { BrowserRouter } from 'react-router-dom';

function App() {
  /*apaga essa div e coloca o <Routes/> */
  return (
        <AuthProvider>
          <BrowserRouter>
            <Routes />
            <GlobalStyle />
          </BrowserRouter>
        </AuthProvider>
  );
}

export default App;
