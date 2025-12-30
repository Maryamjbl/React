import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    {
      name: "Fjallraven Backpack",
      category: "men's clothing",
      price: 109.95,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    },
    {
      name: "Slim Fit T-Shirt",
      category: "men's clothing",
      price: 22.3,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    },
    {
      name: "Cotton Jacket",
      category: "men's clothing",
      price: 55.99,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    },
  ];

  return (
    <div className="container my-4">
      <h2 className="mb-4 text-center text-Primary">Product List</h2>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div className="col-md-4 ">
            <ProductCard
              name={product.name}
              category={product.category}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;