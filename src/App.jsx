import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './components/products/Products';
import Slider from './components/slider/Slider';

function App() {
  return (
    <Router>
      <div id="root">
        <NavBar />
        <Slider/>
        <Routes>
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
