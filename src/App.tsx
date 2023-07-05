import { Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Search from './pages/Search';
import Layout from './pages/Layout';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Layout /> }>
        <Route index element={ <Search /> } />
      </Route>
    </Routes>
  );
}

export default App;
