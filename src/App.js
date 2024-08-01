import './App.css';
import About from './about/about';
import All from './all';
import { Route, Routes, } from 'react-router-dom';
import JoinUs from './join-us/join-us';
import { CartProvider } from 'react-use-cart';
import ProductFilter from './product/product_filter';
import Cart from './cart/cart';


function App() {
  return (
    <div className="App">
    <CartProvider>
    <Routes>
    <Route exact path='/' element={<All/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/joinus' element={<JoinUs/>}/>
    <Route path='/product' element={<ProductFilter/>}/>
    <Route path='/cart' element={<Cart/>}/>
    </Routes>
    </CartProvider>
    </div>
  );
}

export default App;
