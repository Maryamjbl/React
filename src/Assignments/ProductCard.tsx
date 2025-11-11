import "./ProductCard.css";

type ProductProps = {
  name: string;
  category: string;
  price: number;
  image: string;
};

function ProductCard({ name, category, price, image }: ProductProps) {
  return (
    <div className="card bg-light mb-3 product-card">
      <img src={image} className="card-img-top product-image" alt={name} />
      <div className="card-body shadow-sm border-2">
        <h5 className="card-title text-primary">{name}</h5>
        <h6 className="card-subtitle text-info mb-2">{category}</h6>
        <p className="card-text">Price: ₹{price}</p>
      </div>
    </div>
  );
}

export default ProductCard;