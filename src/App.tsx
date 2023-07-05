import { Routes, Route } from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './pages/Search';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Search /> } />
    </Routes>
  );
}

export default App;
