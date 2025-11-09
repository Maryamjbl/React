import "./ProductCard.css";
type Product = {
  name: string;
  detailsPage: string;
  description: string;
  price: number;
  image: string;
};
let sampleProduct: Product = {
  name: "Wireless Headphones",
  detailsPage: "products/wireless-headphones",
  description:
    "Comfortable over-ear wireless headphones with 30 hours battery life and active noise cancellation.",
  price: 129.99,
  image:
    "https://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121205-airpods-max.pnghttps://cdsassets.apple.com/live/7WUAS350/images/tech-specs/121205-airpods-max.png",
};
function ProductCard() {
  return (
    <div className="card">
      <img
        src={sampleProduct.image}
        className="card-img-top"
        alt={sampleProduct.name}
      />
      <div className="card-body">
        <h4 className="card-title text-warning">{sampleProduct.name}</h4>
        <h5 className="card-subtitle text-secondary small mb-2">
          Price: ${sampleProduct.price}
        </h5>
        <p className="card-text">{sampleProduct.description}</p>
        <a
          href={sampleProduct.detailsPage}
          className="btn btn-primary w-100"
          target="_blank"
        >
          View Details
        </a>
      </div>
    </div>
  );
}
export default ProductCard;
