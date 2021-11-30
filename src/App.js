import React from 'react';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import Footer from './Components/Footer';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const App = () => {
  return (
    <>
      <BrowserRouter>
      <Header />
      <Body />
      <Footer />
      <ToastContainer position="top-right" />
      </BrowserRouter>
      
    </>
  );
}

export default App;
