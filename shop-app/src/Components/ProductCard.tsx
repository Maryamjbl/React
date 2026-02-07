import { type Product } from "../App";

export default function ProductCard({
  product,
  addToCart,
}: {
  product: Product;
  addToCart: (p: Product) => void;
}) {
  return (
    <div className="card h-100">
      <img src={product.image} className="card-img-top" />
      <div className="card-body text-center">
        <h5>{product.title}</h5>
        <p>₹{product.price}</p>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}
