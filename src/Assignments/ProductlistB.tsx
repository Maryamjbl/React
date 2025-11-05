function ProductListB() {
  const products = [
    {
      name: "Smartphone",
      price: 599,
      description: "Latest 5G smartphone with high-resolution camera.",
    },
    {
      name: "Laptop",
      price: 999,
      description: "Lightweight laptop with Intel i7 processor.",
    },
    {
      name: "Bluetooth Speaker",
      price: 49,
      description: "Portable speaker with deep bass and long battery life.",
    },
  ];

  return (
    <div>
      <h4 className="text-primary"> Product Catalog</h4>
      <ul className="list-group">
        {products.map((item) => (
          <li className="list-group-item">
            <h5>{item.name}</h5>
            <p className="text-success">{item.price}</p>
            <small className="text-muted">{item.description}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductListB;
