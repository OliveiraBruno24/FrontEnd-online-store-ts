import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Search from './pages/Search';
import Cart from './pages/Cart';
import Layout from './pages/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route path="/cart" element={ <Cart /> } />
        <Route index element={ <Search /> } />
      </Route>
    </Routes>
  );
}

export default App;
