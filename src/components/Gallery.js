import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import SocialMedia from "./SocialMedia";

function Gallery() {
  const [currPage, setCurrPage] = useState(1);
  const [count, setCount] = useState(0);
  const images = useRef(null);
  const imgCount = 7;

  useEffect(() => {
    const size = images.current.children[0].clientWidth + 20;
    images.current.style.transition = "transform 1s ease-in-out";
    images.current.style.transform = "translateX(" + -size * count + "px)";
  }, [count, currPage]);

  return (
    <>
      <div className="gallery">
        <h1 className="gallery-title">photo gallery</h1>
        <div className="gallery-line" />
        <div ref={images} className="gallery-slide">
          <div className="gallery1" />
          <div className="gallery2" />
          <div className="gallery3" />
          <div className="gallery4" />
          <div className="gallery5" />
          <div className="gallery6" />
          <div className="gallery7" />
          <div className="gallery8" />
          <div className="gallery9" />
          <div className="gallery10" />
        </div>
      </div>
      <div className="pages">
        <KeyboardBackspaceIcon
          className="gal-arrow-left"
          onClick={() => {
            if (currPage === 1) return;
            setCurrPage((prev) => prev - 1);
            setCount((prev) => prev - 1);
          }}
        />
        <div style={{ width: "1.7vw", height: "3.5vh" }}>
          <span className="current-page">{currPage}</span>
          <span className="gal-page-slash">/</span>
          <span className="last-page">{imgCount}</span>
        </div>
        <KeyboardBackspaceIcon
          className="gal-arrow-right"
          onClick={() => {
            if (currPage === imgCount) {
              setCurrPage(0);
              setCount(-1);
            }
            setCurrPage((prev) => prev + 1);
            setCount((prev) => prev + 1);
          }}
        />
      </div>
      <SocialMedia media={"gallery"} />
      <span
        style={{
          position: "absolute",
          width: "3.55vw",
          height: "6.19vh",
          left: "92.5vw",
          top: "757.6vh",
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
    </>
  );
}

export default Gallery;
