import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import MainRoutes from './routing/MainRoutes';
import { BrowserRouter, BrowserRouter as router } from 'react-router-dom';


const App = () => {
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <MainRoutes />
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App