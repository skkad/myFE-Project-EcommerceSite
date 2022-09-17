import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Product from './components/Product';
import ProductSelected from './components/ProductSelected';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  exact path="/product" element={<Product />} />
        <Route  exact path="/product/:id" element={<ProductSelected />} />
      </Routes>  
    </>  
  );
}

export default App;
