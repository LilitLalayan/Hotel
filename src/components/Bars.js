import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import SocialMedia from "./SocialMedia";

function Bars() {
  const [imgCount, setImgCount] = useState(1);
  const images = useRef();
  const line = useRef();
  const [count, setCount] = useState(0);
  const pageNum = 3;

  useEffect(() => {
    const size = images.current.children[0].clientWidth + 20;
    images.current.style.transition = "transform 1s ease-in-out";
    images.current.style.transform = "translateX(" + -size * count + "px)";
  }, [imgCount, count]);

  return (
    <div>
      <h1 className="barWelcome">welcome to</h1>
      <h1 className="barTitle">RESTAURANTS & BARS</h1>
      <div className="barLine-title" />
      <div
        style={{
          width: 1185,
          overflow: "hidden",
          height: 595,
          position: "absolute",
          left: 162,
          top: 3750.82,
        }}
      >
        <div ref={images} style={{ width: "2275px", display: "flex" }}>
          <div className="barImg1" />
          <div className="barImg2" />
          <div className="barImg3" />
        </div>
      </div>
      <span className="page1">{imgCount}</span>
      <span className="slash">/</span>
      <span className="lastPage">{pageNum}</span>
      <KeyboardBackspaceIcon
        className="arrowLeft"
        onClick={() => {
          if (count === 0) return;
          setCount((prev) => prev - 1);
          setImgCount((prev) => prev - 1);
        }}
      />
      <KeyboardBackspaceIcon
        className="arrowRight"
        onClick={() => {
          if (count === pageNum - 1) return;
          setCount((prev) => prev + 1);
          setImgCount((prev) => prev + 1);
        }}
      />
      <div ref={line} className="small-line" />
      <div className="barLine" />
      <SocialMedia media={"bars"} />
      <button
        style={{
          position: "absolute",
          width: 72,
          height: 68,
          left: 1185,
          top: "4300.89px",
          background: "#6F4F28",
          border: "0.5px solid #6F4F28",
          boxSizing: "border-box",
          textAlign: "center",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          fontFamily: "Inter",
          fontSize: "16px",
          lineHeight: "150%",
          cursor: "pointer",
        }}
      >
        <a href="#Booking" style={{ textDecoration: "none", color: "#FFFFFF" }}>
          book now
        </a>
      </button>
    </div>
  );
}

export default Bars;
