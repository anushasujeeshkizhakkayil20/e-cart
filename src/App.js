
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';
import WishList from './pages/WishList';
import Header from './component/Header';
import Footer from './component/Footer';

function App() {
  return (
    <div >
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<WishList/>}/>
    </Routes>
     <Footer/>
     </div>
  );
}

export default App;
