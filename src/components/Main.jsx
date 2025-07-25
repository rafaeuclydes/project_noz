import React from "react";
import MainLink from "./MainLink";
import { imagesArray } from "../assets/products";

const Main = () => {
  return (
    <div className="main">
      <div className="main_container">
        {imagesArray
          .filter((item) => [1, 2, 3].includes(item.id))
          .map((item) => (
            <MainLink
              key={item.id}
              title={item.name}
              image={item.image}
              path={item.path}
            />
          ))}
      </div>
    </div>
  );
};

export default Main;
