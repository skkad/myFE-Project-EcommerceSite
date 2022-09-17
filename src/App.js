import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Product from './components/Product';
import ProductSelected from './components/ProductSelected';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  exact path="/product" element={<Product />} />
        <Route  exact path="/product/:id" element={<ProductSelected />} />
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>  
    </>  
  );
}

export default App;
