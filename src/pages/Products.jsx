import React from "react";
import Content from "../components/Content";
import { imagesArray } from "../assets/products";

const Products = () => {
  return (
    <div className="products__container">
      {imagesArray
        .filter((item) => [4, 5, 6, 8, 9, 10].includes(item.id))
        .map((item, index) => (
          <Content
            key={item.id}
            title={item.name}
            image={item.image}
            description={item.description}
            size={item.size}
            value={item.value}
            composition={item.composition}
            variant={index % 2 === 0 ? "product-left" : "product-right"}
          />
        ))}
    </div>
  );
};

export default Products;
