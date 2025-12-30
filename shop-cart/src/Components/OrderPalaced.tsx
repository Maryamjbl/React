import { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";

const OrderPlaced = () => {
  const [address, setAddress] = useState<any>(null);
  const { emptyCart } = useCart();

  useEffect(() => {
    const saved = localStorage.getItem("orderAddress");
    if (saved) setAddress(JSON.parse(saved));
    emptyCart();
  }, []);

  if (!address) return <p>No address found</p>;

  return (
    <div className="container mt-4">
      <h3>Order Confirmed ✅</h3>
      <div className="container border "> <p>
        <strong>{address.street}</strong>
      </p></div>
     <div className="container border mb-1"><p>
        <strong>{address.city}</strong>
      </p></div>
      <div className="container border mb-1"> <p>
        <strong>{address.zip}</strong>
      </p></div>
     <div className="container border mb-1"> <p>
        <strong>{address.country}</strong>
      </p></div>
     <div className="container border mb-1"><p>
        <strong>{address.state}</strong>
      </p></div>
      

      <button className="btn btn-success mt-2" onClick={() => window.print()}>
        Print The Receipt 
      </button>
    </div>
  );
};

export default OrderPlaced;
