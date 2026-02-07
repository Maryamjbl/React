import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Home";
import CartPage from "./Components/Cart";

export type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export type CartItem = Product & { qty: number };

export default function App() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const found = cart.find((i) => i.id === product.id);

    if (found) {
      setCart(
        cart.map((i) =>
          i.id === product.id ? { ...i, qty: i.qty + 1 } : i
        )
      );
    } else {
      setCart([...cart, { ...product, qty: 1 }]);
    }
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((i) => i.id !== id));
  };

  const changeQty = (id: number, val: number) => {
    setCart(
      cart.map((i) =>
        i.id === id ? { ...i, qty: Math.max(1, i.qty + val) } : i
      )
    );
  };

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              changeQty={changeQty}
            />
          }
        />
      </Routes>
    </>
  );
}
