import React from "react";
import "../App.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SocialMedia from "./SocialMedia";

function Pool() {
  return (
    <div>
      <div className="pool">
        <h1 className="pool-title">
          outdoor <br /> swimming pool
        </h1>
        <div className="pool-line" />
        <p className="pool-text">
          Outdoor swimming pool is what you need for full relaxation and a nice
          sunbathe. What if we add some exclusive cocktails? Gorgeous, isn't it?
        </p>
        <buttun className="pool-button">
          MORE <ArrowForwardIosIcon style={{ fontSize: 16, marginLeft: 10 }} />
        </buttun>
      </div>
      <div className="poolImg1" />
      <div className="poolImg2" />
      <SocialMedia media={"pool"} />
      <button
        style={{
          position: "absolute",
          width: 72,
          height: 68,
          left: "87%",
          top: "5290.52px",
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

export default Pool;
