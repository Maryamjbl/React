import type { CartItem } from "../App";

export default function CartPage({
  cart,
  removeFromCart,
  changeQty,
}: any) {
  const total = cart.reduce(
    (sum: number, i: CartItem) => sum + i.price * i.qty,
    0
  );

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((i: CartItem) => (
        <div
          key={i.id}
          className="d-flex justify-content-between border p-2 mb-2"
        >
          <div>
            {i.title} — ₹{i.price}
          </div>

          <div>
            <button onClick={() => changeQty(i.id, -1)}>-</button>
            <span className="mx-2">{i.qty}</span>
            <button onClick={() => changeQty(i.id, 1)}>+</button>
            <button
              className="btn btn-sm btn-danger ms-2"
              onClick={() => removeFromCart(i.id)}
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      <h4 className="text-end">Total: ₹{total}</h4>
    </div>
  );
}
