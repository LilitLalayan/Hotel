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
        <button className="pool-button">
          MORE{" "}
          <ArrowForwardIosIcon
            style={{ fontSize: "1vw", marginLeft: "0.7vw" }}
          />
        </button>
      </div>
      <div className="poolImg1" />
      <div className="poolImg2" />
      <SocialMedia media={"pool"} />
      <span
        style={{
          position: "absolute",
          width: "3.55vw",
          height: "6.19vh",
          left: "92.5vw",
          top: "623vh",
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
          fontSize: "0.7em",
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

export default Pool;
