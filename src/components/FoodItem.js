import React, { useState, useContext } from "react";
import FoodContext from "../context/FoodContext";

import Alert from "./Alert";

const FoodDetails = ({ imageSrc, title, description, price }) => {
  const { cartItems, setCartItems } = useContext(FoodContext);

  // State variables for quantity, special instructions, and alert
  const [quantity, setQuantity] = useState(1);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [localAlert, setLocalAlert] = useState(null);  // local alert ka logic

  // Function to handle quantity change
  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
   if(newQuantity<1){setQuantity(1)}
   else{setQuantity(newQuantity)}
      
    
  };

  // Function to handle special instructions change
  const handleSpecialInstructionsChange = (e) =>
    setSpecialInstructions(e.target.value);

  // Calculate total price
  const totalPrice = ()=>{
    if(quantity>1 )
    {return quantity*price}
    else
    {return price};
  };

  // Function to handle "Add to Cart" button click
  const handleAddToCart = () => {
    const newCartItem = {
      title: title,
      quantity: quantity,
      price: totalPrice(),
      specialInstructions: specialInstructions,
    };
    setCartItems([...cartItems, newCartItem]); // Add the new item to the existing cartItems array
    setLocalAlert("Success");
    setTimeout(() => {
      setLocalAlert(null);
    }, 1000);
  };

  return (
    <div>
      <div className="card h-100 text-dark" style={{ backgroundColor: "orange" }}>
        <img
          src={imageSrc}
          className="card-img-top"
          alt={title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <h4 className="card-text text-danger "><b>Rs.{totalPrice()}</b></h4>
          <div className="form-group">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              className="form-control"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="specialInstructions">Special Instructions:</label>
            <input
              type="text"
              id="specialInstructions"
              className="form-control"
              value={specialInstructions}
              onChange={handleSpecialInstructionsChange}
            />
          </div>
          <button className="btn btn-danger m-2" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <div style={{height:'50px'}}>
          {localAlert && <Alert alert={{ msg: "Added to Cart Successfully", type: "Success" }} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
