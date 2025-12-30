import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Components/Product";
import { CartProvider } from "./Context/CartContext";
import Cart from "./Components/Cart";
import AddressForm from "./Components/AddressForm1";
import OrderPlaced from "./Components/OrderPlaced";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<AddressForm />} />
          <Route path="/order" element={<OrderPlaced />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;