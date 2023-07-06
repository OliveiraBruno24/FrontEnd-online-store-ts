import { Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import Search from './pages/Search';
import Checkout from './pages/Checkout';
// import Layout from './pages/Layout';

function App() {
  return (
    <Routes>
      {/* <Route path="/" element={ <Layout /> }> */}
      <Route path="/" element={ <Search /> } />
      <Route path="/checkout" element={ <Checkout /> } />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
