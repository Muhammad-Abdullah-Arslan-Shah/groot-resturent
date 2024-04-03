import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import FoodContextProvider from "./context/foodContextProvider";
import Reservation from "./components/Reservation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import MyNav  from "./components/MyNav";
import ContactUs from "./components/ContactUs";




function App() {
  return (
    <>
     <FoodContextProvider>
    <Router>
     
        <MyNav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/reservation" element={<Reservation/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<ContactUs/>} />
       
      </Routes>
      
    </Router>
    </FoodContextProvider>
    </>
  );
}

export default App;
