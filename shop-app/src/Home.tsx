import ProductCard from "./Components/ProductCard";
import type { Product } from "./App";

const products: Product[] = [
  {
    id: 1,
    title: "T-Shirt",
    price: 499,
    image: "https://picsum.photos/200?1",
  },
  {
    id: 2,
    title: "Shoes",
    price: 1499,
    image: "https://picsum.photos/200?2",
  },
  {
    id: 3,
    title: "Bag",
    price: 999,
    image: "https://picsum.photos/200?3",
  },
];

export default function Home({ addToCart }: any) {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {products.map((p) => (
          <div key={p.id} className="col-md-4">
            <ProductCard product={p} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
}
