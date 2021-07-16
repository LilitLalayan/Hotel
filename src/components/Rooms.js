import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import SocialMedia from "./SocialMedia";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Box } from "@material-ui/core";

function Rooms() {
  const [over, setOver] = useState(false);
  const arrow = useRef(null);

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
        <div
          style={{ height: "41.58vh", width: "17.8vw", marginTop: "10.39vh" }}
        >
          <Box ref={arrow} className="h3-arrow">
            <KeyboardBackspaceIcon />
          </Box>
          <h3
            className="h3"
            onMouseOver={(e) => {
              e.target.style.marginLeft = "3.8vw";
              arrow.current.style.display = "block";
              arrow.current.style.top = "48vh";
            }}
            onMouseOut={(e) => {
              e.target.style.marginLeft = "1.9vw";
              arrow.current.style.display = "none";
            }}
          >
            {" "}
            Standard Twin
          </h3>
          <h3
            className="h3"
            onMouseOver={(e) => {
              e.target.style.marginLeft = "3.8vw";
              arrow.current.style.display = "block";
              arrow.current.style.top = "55.5vh";
            }}
            onMouseOut={(e) => {
              e.target.style.marginLeft = "1.9vw";
              arrow.current.style.display = "none";
            }}
          >
            Standard Double
          </h3>
          <h3
            className="h3"
            onMouseOver={(e) => {
              e.target.style.marginLeft = "3.8vw";
              arrow.current.style.display = "block";
              arrow.current.style.top = "63vh";
            }}
            onMouseOut={(e) => {
              e.target.style.marginLeft = "1.9vw";
              arrow.current.style.display = "none";
            }}
          >
            Family
          </h3>
          <h3
            className="h3"
            onMouseOver={(e) => {
              e.target.style.marginLeft = "3.8vw";
              arrow.current.style.display = "block";
              arrow.current.style.top = "70.5vh";
            }}
            onMouseOut={(e) => {
              e.target.style.marginLeft = "1.9vw";
              arrow.current.style.display = "none";
            }}
          >
            Deluxe
          </h3>
          <h3
            className="h3"
            onMouseOver={(e) => {
              e.target.style.marginLeft = "3.8vw";
              arrow.current.style.display = "block";
              arrow.current.style.top = "78vh";
            }}
            onMouseOut={(e) => {
              e.target.style.marginLeft = "1.9vw";
              arrow.current.style.display = "none";
            }}
          >
            Premium Luxe
          </h3>
        </div>
      </div>
      <div className="rooms-img" />
      <SocialMedia media={"rooms"} />
      <span
        style={{
          position: "absolute",
          width: "3.55vw",
          height: "6.19vh",
          left: "92.5vw",
          top: "415vh",
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

export default Rooms;
