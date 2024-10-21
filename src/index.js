import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from '../src/components/secoes/header';
import LangingPage from './pages/landingpage';
import Footer from './components/secoes/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <LangingPage/>
    <Footer/>
  </React.StrictMode>
);
