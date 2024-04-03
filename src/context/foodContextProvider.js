import React, { useState } from "react";
import FoodContext from "./FoodContext";
const FoodContextProvider = ({ children }) => {
 const [cartItems,setCartItems] = useState([]);
 const [alert,setAlert] = useState(null);
 const showAlert = (message,type)=>{
   
 setAlert(
   {  msg:message,
      type:type
   }
 )
 setTimeout(()=>{
 setAlert(null);}
 ,1000);
 }
  // Burgur Array
  // eslint-disable-next-line
  const [burgerArray, setBurgerArray] = useState([
    {
      title: "Big Dady Burger",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTShCnRn0y2LiQfy84xgEMPuCVzG-7UPtgUSA&usqp=CAU",
      description:
        "Undercut Beef, Double patties, 2 Cheese slices, Caramelised Onion, Beef Sauce, Mustard Sauce, Butter, The Groot Special, Injected Cheese Meal serves with fries and drink",
      price: 850,
    },

    {
      title: "The Mighty Burger",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8gTKfdb7k4m0w7VsKT5O2-kMsP4-CtxSzOw&usqp=CAU",
      description:
        "Double Zinger Pieces, Cheese Slice, Mustard Sauce, The Groot Special Sauce *Meal serves with fries and drink",
      price: 600,
    },
    {
      title: "Chicken Grill Burger",
      imgUrl:
        "https://www.skinnytaste.com/wp-content/uploads/2023/06/Grilled-Chicken-Sandwiches-5-1.jpg",
      description:
        "Grill Chicken Pieces, Olives,, Jalapeño, The Groot Special Sauce, Mustard Sauce, Bun Meal serves with fries and drink",
      price: 540,
    },
  ]);

// Fries Array
// eslint-disable-next-line
const [friesArray, setFraiesArray] = useState([
  {
    title: "Plain Fries",
    imgUrl:
      "https://mirchihut.pk/wp-content/uploads/2020/09/French-fries.jpg",
    description:
      "Salt Flavour",
    price: 120,
  },

  {
    title: "Masala Fries",
    imgUrl:
      "https://img.buzzfeed.com/video-api-prod/assets/7ef6b04ce0564135a2dd1d96c8eaf3c9/Masala_Fries_FB_Thumbnail.jpg",
    description:
      "serves with The Groot Special Masala",
    price: 150,
  },
  {
    title: "Loaded Fries",
    imgUrl:
      "https://www.spendwithpennies.com/wp-content/uploads/2022/08/Loaded-Cheese-Fries-SpendWithPennies-4.jpg",
    description:
      "Fries, Grill Chicken, Cheese, Olives, Jalapeños, The Groot Special Masala",
    price: 390
  },
]);
// sandwichs
// eslint-disable-next-line
const [sandArray, setSanwichArray] = useState([
  {
    title: "Cheese Sandwich",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFoL8q-Icp-dsEELkE8vLOVpvNm2WYutlcBg&s",
    description:
      "",
    price: 330
  },

  {
    title: "Chicken Grill Sandwich",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH0Jjo_9xnJG0rIApfxxktuepp8XXuXukJMwVcA3DqVw&s",
    description:
      "",
    price: 410
  }
 
]);
// Wraps Array
// eslint-disable-next-line
const [wrapArray, setWrapArray] = useState([
  {
    title: "Grill Beef Wrap",
    imgUrl:
      "https://www.midwestliving.com/thmb/de5C_Q1UGb590PvvmRMkFOQybD8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/p_RU198023-edf0e7c845b647069b40c38179a509b3.jpg",
    description:
      "Meal serves with fries and drink",
    price: 420
  },

  {
    title: "Grill Chicken Wrap",
    imgUrl:
      "https://dudethatcookz.com/wp-content/uploads/2022/09/BBQ_Chicken_Wraps_2.jpg",
    description:
      "Meal serves with fries and drink",
    price: 410
  },
  {
    title: "Jalapeños Wrap",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwkc-7xMF6nDPCwhLdpRhs-8o6x2tVr0zE0Q&usqp=CAU",
    description:
      "Meal serves with fries and drink",
    price: 530
  }

]);


  return (
    <FoodContext.Provider value={{ burgerArray ,friesArray,sandArray,wrapArray,cartItems,setCartItems,alert,showAlert}}>
      {children}
    </FoodContext.Provider>
  );
};

export default FoodContextProvider;
