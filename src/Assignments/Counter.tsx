import { useState } from "react";

function ProductCounter() {
  const [quantity, setQuantity] = useState(1);
  const unitPrice = 1000;

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = unitPrice * quantity;

  return (
    <div className="container mx-auto text-center">
      <h2 className="text-danger"> Product: iPhone 15 Pro</h2>
      <h4 className="text-secondary">Price: ${unitPrice}</h4>

      <div className="p-3 mb-4">
        <button className="btn btn-warning mx-3" onClick={decrementQuantity}>
          ➖
        </button>
        <span className="badge text-bg-success fs-5">{quantity}</span>
        <button className="btn btn-primary mx-3" onClick={incrementQuantity}>
          ➕
        </button>
      </div>

      <h3>
        Total: <span className="badge text-bg-danger">${totalPrice}</span>
      </h3>
    </div>
  );
}

export default ProductCounter;