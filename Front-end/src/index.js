import React from 'react';
import ReactDOM from 'react-dom/client';
import Routes from './routes'
import GlobalStyles from './styles/globalStyles'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <GlobalStyles />
    <Routes />
  </>
);


