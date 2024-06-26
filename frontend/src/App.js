import './App.css';
import Shop from './pages/Shop';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Shop/>}/>
        <Route path = '/clothes' element = {<ShopCategory category='clothes'/>}/>
        <Route path = '/tech' element = {<ShopCategory category='tech'/>}/>
        <Route path = '/product' element = {<Product/>}>
          <Route path = ':productId' element = {<Product/>}/>
        </Route>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/login' element = {<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
