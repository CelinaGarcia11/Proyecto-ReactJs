
import ItemListConteiner from './pages/itemListContainer/ItemListConteiner'
import Navbar from './components/NavBar/NavBar'
import ItemDetailContainer from './pages/itemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Cart from "./pages/cart/Cart";
import Footer from './components/Footer/Footer';
import Layout from './components/layout/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/category/:name" element={<ItemListConteiner />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        </Route>

        <Route path="*" element={<h1> 484 Not found</h1>} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App

