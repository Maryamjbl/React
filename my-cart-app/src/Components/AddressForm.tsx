import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddressForm = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const navigate = useNavigate();

  const submit = (e: any) => {
    e.preventDefault();
    localStorage.setItem("orderAddress", JSON.stringify(address));
    navigate("/order");
  };

  return (
    <div className="container mt-4">
      <h3>Delivery Address</h3>
      <form onSubmit={submit}>
        <input
          className="form-control mb-2"
          placeholder="Street"
          onChange={(e) =>
            setAddress({ ...address, street: e.target.value })
          }
          required
        />
        <input
          className="form-control mb-2"
          placeholder="City"
          onChange={(e) =>
            setAddress({ ...address, city: e.target.value })
          }
          required
        />
        <button className="btn btn-primary">Continue your Order</button>
      </form>
    </div>
  );
};

export default AddressForm;