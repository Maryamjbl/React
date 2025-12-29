import { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";

type AddressData = {
  street: string;
  apartment?: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
};

const OrderPlaced = () => {
  const [address, setAddress] = useState<AddressData | null>(null);
  const { emptyCart } = useCart();

  useEffect(() => {
    const storedAddress = localStorage.getItem("orderAddress");

    if (storedAddress) {
      const parsedAddress: AddressData = JSON.parse(storedAddress);
      setAddress(parsedAddress);
    }
    emptyCart();

    const storedCart = localStorage.getItem("cart");
    if (storedAddress && storedCart) {
      const parsedAddress: AddressData = JSON.parse(storedAddress);
      const parsedCart = JSON.parse(storedCart);
      fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cart: parsedCart, address: parsedAddress }),
      })
        .then((res) => {
          if (res.ok) {
            localStorage.removeItem("cart");
            localStorage.removeItem("orderAddress");
          } else {
            console.warn("Order API returned", res.status);
          }
        })
        .catch((err) => {
          console.error("Failed to place an order, retry!", err);
        });
    }
  }, []);

  if (!address) {
    return (
      <div className="container mt-4">
        <div className="alert alert-warning">
          <h4>No Address Found</h4>
          <p>Please complete the address form to complete your order.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white">
              <h3 className="fw-bold mb-0">Order Confirmation</h3>
            </div>
            <div className="card-body">
              <h5 className="fw-semibold mb-3">Delivery Address</h5>

              <div className="bg-light p-3 rounded">
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
              </div>

              <div className="mt-4">
                <button
                  className="btn btn-success"
                  onClick={() => window.print()}
                >
                   Confirm the Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPlaced;
