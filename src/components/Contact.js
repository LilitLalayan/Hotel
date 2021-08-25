import React from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SocialMedia from "./SocialMedia";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-img" />
        <div className="contact-box">
          <p className="contact-box-text">
            IF YOU HAVE ANY QUESTIONS FEEL FREE TO CONTACT US
          </p>
          <button className="contact-box-btn">
            <span className="contact-btn-span">
              contact us{" "}
              <ArrowForwardIosIcon
                style={{ fontSize: "0.8vw", marginLeft: "1.1vw" }}
              />
            </span>
          </button>
        </div>
      </div>
      <SocialMedia media={"contact"} />
      <span
        style={{
          position: "absolute",
          width: "3.55vw",
          height: "6.19vh",
          left: "92.5vw",
          top: " 1029.4vh",
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
          zIndex: 1,
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

export default Contact;
