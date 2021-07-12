import React from "react";
import "../App.css";
import SocialMedia from "./SocialMedia";

function Rooms() {
  return (
    <div>
      <div className="rooms">
        <h1 className="rooms-title">rooms & suites</h1>
        <div className="line" />
        <p className="rooms-text">
          The elegant and modern hotel offers Premium luxe, Deluxe and standard
          guest rooms with all the required facilities to make you stay
          comfortable and pleasant.
        </p>
        <h3 className="h3">Standard Twin</h3>
        <h3 className="h3">Standard Double</h3>
        <h3 className="h3">Family</h3>
        <h3 className="h3">Deluxe</h3>
        <h3 className="h3">Premium Luxe</h3>
      </div>
      <div className="rooms-img" />
      <SocialMedia media={"rooms"} />
      <button
        style={{
          position: "absolute",
          width: 72,
          height: 68,
          left: 1185,
          top: "3180px",
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

export default Rooms;
