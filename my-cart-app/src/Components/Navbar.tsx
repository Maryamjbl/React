import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";

function Navbar() {
  let context = useCart();
  return (
    <nav className="navbar navbar-expand navbar-light bg-primary px-4">
      <Link className="navbar-brand" to="/">
        Shop
      </Link>
      <div className="navbar-nav">
        <Link className="nav-link" to="/">
          Products
        </Link>
        <Link className="nav-link" to="/cart">
          Cart
          <sup className="badge text-bg-info small">{context.cartCount}</sup>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;