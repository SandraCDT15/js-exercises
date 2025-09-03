import CardElm from "./Card";

const ProductsElm = () => {
  const products = [
    {
      id: 0,
      title: "Product 1",
      price: 5,
      image: "/assets/logo192.png",
    },
  ];

  return (
    <div>
      <CardElm
        title={products[0].title}
        price={products[0].price}
        image={products[0].image}
      />
    </div>
  );
};

export default ProductsElm;
