import React from 'react';
import Feed from './pages/Feed';
import Landing from './pages/landing';
import GlobalStyle from './styles/global';

function App() {
  /*apaga essa div e coloca o <Routes/> */
  return (
    <div className="App">
      <Landing />
      <GlobalStyle />
    </div>
  );
}

export default App;
