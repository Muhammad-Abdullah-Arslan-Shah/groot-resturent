import React, { useContext } from "react";
import FoodContext from "../context/FoodContext";

function Cart() {
  const { cartItems,setCartItems } = useContext(FoodContext);

  // Calculate total price of all items in the cart
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Function to handle removal of items from the cart
  const handleRemoveFromCart = (indexToRemove) => {
    const newCartItems = cartItems.filter((item, index) => index !== indexToRemove);
    setCartItems(newCartItems);
  };

  return (
    <div className="container">
      <h1 className="font-effect-fire text-center my-5">Checkout</h1>
      {cartItems.length === 0 ? (
        <div>
          <h1 className="text-light">Your cart is empty.</h1>
          <p className="text-light">Please Select Food items from Menu</p>
        </div>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div className="card bg-warning text-dark">
                  <div className="card-body">
                   
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Quantity: {item.quantity}</p>
                    <p className="card-text">Price: Rs.{item.price * item.quantity}</p>
                    <p className="card-text">Special instruction: {item.specialInstructions}</p>
                    <button className="btn btn-sm btn-danger float-left" onClick={() => handleRemoveFromCart(index)}>Remove</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h3 className="mt-3 text-light">Total Amount: Rs.{totalAmount}</h3>
          <button className="btn btn-danger m-2">Confirm Order</button>
        </>
      )}
    </div>
  );
}

export default Cart;
