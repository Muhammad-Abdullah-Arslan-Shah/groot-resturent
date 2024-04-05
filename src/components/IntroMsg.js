import React, { useState, useEffect } from "react";
import introback from "../pictures/intro-back.jpg";

const IntroMsg = () => {
  const [text, setText] = useState("");
  const message =
    "Welcome to Our Restaurant! Explore our diverse menu with fresh, delightful ingredients. Join us for an unforgettable dining experience";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(message.substring(0, index));
      index++;
      if (index > message.length) clearInterval(interval);
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className=" p-3"
      style={{
         backgroundImage: `url('${introback}')`,
        backgroundSize: "cover",
        // backgroundColor:"black",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <h1 style={{ fontFamily: "Arial" }} className="font-effect-fire-animation text-danger">
          <b>{text}</b>
        </h1>
      </div>
    </div>
  );
};

export default IntroMsg;
