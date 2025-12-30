import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";

import Navbar from "./Components/NavBar";
import Products from "./Components/Products";
import Cart from "./Components/Cart";
import AddressForm from "./Components/AddressForm";
import OrderPlaced from "./Components/OrderPalaced";

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/address" element={<AddressForm />} />
        <Route path="/order" element={<OrderPlaced />} />
      </Routes>
    </CartProvider>
  );
}

export default App;