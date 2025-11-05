function ProductListA() {
  const products = [
    "Smartphone",
    "Laptop",
    "Wireless Headphones",
    "Smartwatch",
    "Bluetooth Speaker",
    "Gaming Console",
  ];

  return (
    <div>
      <h4 className="text-success"> Available Products</h4>
      <ul className="list-group">
        {products.map((item) => (
          <li className="list-group-item">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListA;
