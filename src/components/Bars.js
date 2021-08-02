import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import SocialMedia from "./SocialMedia";

function Bars() {
  const [imgCount, setImgCount] = useState(1);
  const images = useRef(null);
  const line = useRef(null);
  const [count, setCount] = useState(0);
  const pageNum = 6;
  const lineWidth = 12.58;
  const [lineMargin, setLineMargin] = useState(16.3);

  useEffect(() => {
    const size = images.current.children[0].clientWidth + 20;
    images.current.style.transition = "transform 1s ease-in-out";
    images.current.style.transform = "translateX(" + -size * count + "px)";
    line.current.style.left = `${lineMargin}vw`;
  }, [count, imgCount]);

  return (
    <div>
      <h1 className="barWelcome">welcome to</h1>
      <h1 className="barTitle">RESTAURANTS & BARS</h1>
      <div className="barLine-title" />
      <div
        style={{
          width: "90vw",
          overflow: "hidden",
          height: 595,
          position: "absolute",
          left: "8.4vw",
          top: "446.5vh",
        }}
      >
        <div ref={images} style={{ width: "237vw", display: "flex" }}>
          <div className="barImg1" />
          <div className="barImg2" />
          <div className="barImg3" />
          <div className="barImg4" />
          <div className="barImg5" />
          <div className="barImg6" />
          <div className="barImg7" />
          <div className="barImg8" />
        </div>
      </div>
      <div ref={line} className="small-line" />
      <span className="page1">{imgCount}</span>
      <span className="slash">/</span>
      <span className="lastPage">{pageNum}</span>
      <KeyboardBackspaceIcon
        className="arrowLeft"
        onClick={() => {
          if (count === 0) return;
          setCount((prev) => prev - 1);
          setImgCount((prev) => prev - 1);
          setLineMargin((prev) => prev - lineWidth);
        }}
      />
      <KeyboardBackspaceIcon
        className="arrowRight"
        onClick={() => {
          if (count === pageNum - 1) return;
          setCount((prev) => prev + 1);
          setImgCount((prev) => prev + 1);
          setLineMargin((prev) => prev + lineWidth);
        }}
      />

      <div className="barLine" />
      <SocialMedia media={"bars"} />
      <span
        style={{
          position: "absolute",
          width: "3.55vw",
          height: "6.19vh",
          left: "92.5vw",
          top: "506vh",
          background: "#6F4F28",
          border: "0.5px solid #6F4F28",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          verticalAlign: "center",
          letterSpacing: "0.05em",
          textTransform: "uppercase",
          color: "#FFFFFF",
          fontFamily: "Inter",
          fontSize: "0.73vw",
          lineHeight: "150%",
          cursor: "pointer",
        }}
      >
        <a
          href="#Booking"
          style={{
            textDecoration: "none",
            color: "#FFFFFF",
            textAlign: "center",
          }}
        >
          book now
        </a>
      </span>
    </div>
  );
}

export default Bars;
