import React, { useState, useEffect } from "react";
// import introback from "../pictures/intro-back.jpg";

const IntroMsg = () => {
  const [text, setText] = useState("");
  const message =
    "Welcome! Discover fresh ingredients, diverse flavors, and an unforgettable dining experience!";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(message.substring(0, index));
      index++;
      if (index > message.length) clearInterval(interval);
    }, 10);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className=" p-3"
      style={{
          // backgroundImage: `url('${introback}')`,
        backgroundSize: "contain",
        backgroundColor:"black",
        height: "25vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
        <h1 style={{ fontFamily: "Arial" }} className="font-effect-fire-animation text-danger fs-3">
          <b>{text}</b>
        </h1>
      </div>
    </div>
  );
};

export default IntroMsg;
