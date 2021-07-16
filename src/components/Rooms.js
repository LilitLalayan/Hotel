import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import SocialMedia from "./SocialMedia";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { Box } from "@material-ui/core";

function Rooms() {
  const [over, setOver] = useState(false);
  const arrow1 = useRef(null);
  const arrow2 = useRef(null);
  const arrow3 = useRef(null);
  const arrow4 = useRef(null);
  const arrow5 = useRef(null);

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
          <div className="room-box">
            <Box ref={arrow1} className="h3-arrow">
              <KeyboardBackspaceIcon />
            </Box>
            <h3
              className="h3"
              onMouseOver={(e) => {
                arrow1.current.style.display = "block";
              }}
              onMouseOut={(e) => {
                arrow1.current.style.display = "none";
              }}
            >
              Standard Twin
            </h3>
          </div>
          <div className="room-box">
            <Box ref={arrow2} className="h3-arrow">
              <KeyboardBackspaceIcon />
            </Box>
            <h3
              className="h3"
              onMouseOver={(e) => {
                arrow2.current.style.display = "block";
              }}
              onMouseOut={(e) => {
                arrow2.current.style.display = "none";
              }}
            >
              Standard Double
            </h3>
          </div>
          <div className="room-box">
            <Box ref={arrow3} className="h3-arrow">
              <KeyboardBackspaceIcon />
            </Box>
            <h3
              className="h3"
              onMouseOver={(e) => {
                arrow3.current.style.display = "block";
              }}
              onMouseOut={(e) => {
                arrow3.current.style.display = "none";
              }}
            >
              Family
            </h3>
          </div>
          <div className="room-box">
            <Box ref={arrow4} className="h3-arrow">
              <KeyboardBackspaceIcon />
            </Box>
            <h3
              className="h3"
              onMouseOver={(e) => {
                arrow4.current.style.display = "block";
              }}
              onMouseOut={(e) => {
                arrow4.current.style.display = "none";
              }}
            >
              Deluxe
            </h3>
          </div>
          <div className="room-box">
            <Box ref={arrow5} className="h3-arrow">
              <KeyboardBackspaceIcon />
            </Box>
            <h3
              className="h3"
              onMouseOver={(e) => {
                arrow5.current.style.display = "block";
              }}
              onMouseOut={(e) => {
                arrow5.current.style.display = "none";
              }}
            >
              Premium Luxe
            </h3>
          </div>
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
