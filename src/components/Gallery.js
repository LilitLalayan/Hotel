import React, { useState } from "react";
import "../App.css";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

function Gallery() {
  const [currPage, setCurrPage] = useState(1);
  const imgCount = 15;

  return (
    <>
      <div className="gallery">
        <h1 className="gallery-title">photo gallery</h1>
        <div className="gallery-line" />
        <div className="gallery-slide">
          <div className="gallery1" />
          <div className="gallery2" />
          <div className="gallery3" />
          <div className="gallery4" />
          <div className="gallery5" />
        </div>
      </div>
      <div className="pages">
        <KeyboardBackspaceIcon
          className="gal-arrow-left"
          onClick={() => {
            if (currPage === 1) return;
            setCurrPage((prev) => prev - 1);
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
            if (currPage === 15) return;
            setCurrPage((prev) => prev + 1);
          }}
        />
      </div>
    </>
  );
}

export default Gallery;
