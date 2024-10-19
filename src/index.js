import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from '../src/components/header';
import LangingPage from './pages/landingpage';
import Footer from './components/footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <LangingPage/>
    <Footer/>
  </React.StrictMode>
);
