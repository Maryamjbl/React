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
      <p className="mb-1">
        <strong>Street:</strong> {address.street}
      </p>
      {address.apartment && (
        <p className="mb-1">
          <strong>Apartment:</strong> {address.apartment}
        </p>
      )}
      <p className="mt-0">
        <strong>City:</strong> {address.city}
      </p>
      <p className="mt-2">
        <strong>State:</strong> {address.state}
      </p>
      <p className="mt-2">
        <strong>ZIP Code:</strong> {address.zipCode}
      </p>
      <p className="mt-2">
        <strong>Country:</strong> {address.country}
      </p>
      <button className="btn btn-success" onClick={() => window.print()}>
        Confirm Address
      </button>
    </div>
  );
};

export default OrderPlaced;
