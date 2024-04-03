import React, { useContext } from "react";
import FoodItem from "./FoodItem";
import FoodContext from "../context/FoodContext";

const Menu = () => {
  const { burgerArray, friesArray, sandArray, wrapArray } = useContext(FoodContext);
  return (
    <div className="container">
      <h1 className="font-effect-fire text-center my-5" style={{ fontSize: "100px" }}>Menu</h1>

      {/* Burgers */}
      <h1 className="text-light m-3 font-effect-outline">Burgers</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {burgerArray.map((item, index) => (
          <div className="col mb-4" key={index}>
            <FoodItem
              imageSrc={item.imgUrl}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>

      {/* Fries */}
      <h1 className="text-light m-3 font-effect-outline">Fries</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {friesArray.map((item, index) => (
          <div className="col mb-4" key={index}>
            <FoodItem
              imageSrc={item.imgUrl}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>

      {/* Sandwiches */}
      <h1 className="text-light m-3 font-effect-outline">Sandwiches</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {sandArray.map((item, index) => (
          <div className="col mb-4" key={index}>
            <FoodItem
              imageSrc={item.imgUrl}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>

      {/* Wraps */}
      <h1 className="text-light m-3 font-effect-outline">Wraps</h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3">
        {wrapArray.map((item, index) => (
          <div className="col mb-4" key={index}>
            <FoodItem
              imageSrc={item.imgUrl}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
