import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import introback from "../pictures/intro-back.jpg";

const IntroMsg = () => {
  const [text, setText] = useState("");
  const [animationRan, setAnimationRan] = useState(false);
  const message =
    "Welcome to Our Restaurant! Explore our diverse menu with fresh, delightful ingredients. Join us for an unforgettable dining experience";
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animationRan) {
          let index = 0;
          const interval = setInterval(() => {
            setText(message.substring(0, index));
            index++;
            if (index > message.length) {
              clearInterval(interval);
              setAnimationRan(true); // Mark animation as ran
            }
          }, 70); // Adjust the delay here (in milliseconds) for typing speed

          return () => clearInterval(interval);
        }
      });
    });

    observer.observe(containerRef.current);

    // Clean up
    return () => observer.disconnect();
  }, [message, animationRan]);

  return (
    <div
      ref={containerRef}
      className=" p-3"
      style={{
        backgroundImage: `url('${introback}')`,
        backgroundSize: "cover",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container">
      <h1
        style={{ fontFamily: "Arial" }}
        className="font-effect-fire text-danger"
      >
        <b>{text}</b>
      </h1>
      </div>
    </div>
  );
};

export default IntroMsg;
