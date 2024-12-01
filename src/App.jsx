
import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { createContext } from 'react';

import Navbar from './components/navbar';
import carBackgorund from './components/carBackground';
import Home from './pages/Home';
import OrderCar from './pages/OrderCar';
import Support from './pages/Support';
import Model3 from './pages/Model3';
import ModelY from './pages/ModelY';
import CarSpecs from './pages/Car Data Specs/CarSpecs';

import './App.css'

export const Model3Specs = createContext();

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='mainContent container-fluid'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orderCar" element={<OrderCar />} />

          <Route path="/model3" element={<Model3 />} />
          <Route path="/support" element={<Support />} />
          <Route path="/modely" element={<ModelY/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
