import './App.css';
import Shop from './pages/Shop';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<Shop/>}/>
        <Route path = '/mens' element = {<ShopCategory category='mens'/>}/>
        <Route path = '/womens' element = {<shopCategory category='womens'/>}/>
        <Route path = '/kids' element = {<shopCatergory category='kids'/>}/>
        <Route path = '/product' element = {<Product/>}>
          <Route path = ':productId' element = {<Product/>}/>
        </Route>
        <Route path = '/cart' element = {<Cart/>}/>
        <Route path = '/login' element = {<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
