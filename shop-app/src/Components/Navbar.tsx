import { Link } from "react-router-dom";

export default function Navbar({ cartCount }: { cartCount: number }) {
  return (
    <nav className="navbar navbar-dark bg-dark px-3">
      <Link to="/" className="navbar-brand">
        🛍 My Shop
      </Link>

      <Link to="/cart" className="btn btn-outline-light">
        <i className="bi bi-cart"></i> Cart ({cartCount})
      </Link>
    </nav>
  );
}
