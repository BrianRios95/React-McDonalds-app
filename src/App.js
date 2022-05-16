import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { CartContextProvider } from './Context/CartContext';
import Home from './components/Home/Home';

function App() {
  return (
    <div className='app--container'>
      <div className="App">
        <CartContextProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ItemListContainer />} />
              <Route path="/category/:category" element={<ItemListContainer />} />
              <Route path="/detail/:itemID" element={<ItemDetailContainer />} />
            </Routes>
          </BrowserRouter>
          <Cart />
        </CartContextProvider>
      </div>
    </div>
  );
}

export default App;
