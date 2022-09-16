import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {Switch,Route} from 'react-router-dom';
import Product from './components/Product';

function App() {
  return (
    <>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Product} />
      </Switch>     
    </>  
  );
}

export default App;
