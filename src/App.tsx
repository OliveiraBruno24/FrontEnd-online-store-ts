import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Search from './pages/Search';
import Checkout2 from './pages/Checkout';
import Layout from './pages/Layout';
import ProductDetail from './pages/ProductDetail';
import Close from './pages/Close';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Search /> } />
        <Route path="/:productName" element={ <Search /> } />
        <Route path="/c/:category" element={ <Search /> } />
        <Route path="/product/:productId" element={ <ProductDetail /> } />
        <Route path="/checkout" element={ <Checkout2 /> } />
        <Route path="/close" element={ <Close /> } />
      </Route>
    </Routes>
  );
}

export default App;
