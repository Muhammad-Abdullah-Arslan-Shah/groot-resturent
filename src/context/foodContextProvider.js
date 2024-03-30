import React,{useState} from "react";
import FoodContext from "./FoodContext";

const FoodContextProvider = ({children}) => {
   
    
    
    return(
        <FoodContext.Provider value={{ }}>
        {children}
        </FoodContext.Provider>
    )
}

export default FoodContextProvider