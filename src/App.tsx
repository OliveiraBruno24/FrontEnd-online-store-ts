import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Search from './pages/Search';
import Cart from './pages/Cart';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Search /> } />
      <Route path="/cart" element={ <Cart /> } />
    </Routes>
  );
}

export default App;
