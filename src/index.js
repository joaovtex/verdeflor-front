import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LangingPage from './pages/landingpage';
import Login from './pages/login'
import Nav from './rotas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
  </React.StrictMode>
);
