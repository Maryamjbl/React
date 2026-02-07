type Product = {
  id: number;
  name: string;
  price: number;
};

const products: Product[] = [
  { id: 1, name: "T-Shirt", price: 499 },
  { id: 2, name: "Shoes", price: 1499 },
  { id: 3, name: "Backpack", price: 999 },
];

type Props = {
  addToCart: (product: Product) => void;
};

export default function ProductList({ addToCart }: Props) {
  return (
    <div className="row g-3 justify-content-center">
      {products.map((p) => (
        <div key={p.id} className="col-10 col-md-3">
          <div className="card text-center p-3 h-100">
            <h5>{p.name}</h5>
            <p>₹{p.price}</p>
            <button
              className="btn btn-primary mt-auto"
              onClick={() => addToCart(p)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
