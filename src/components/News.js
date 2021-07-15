import React from "react";
import "../App.css";
import SocialMedia from "./SocialMedia";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";

function News() {
  return (
    <>
      <h1 className="news-title">Hotels news</h1>
      <div className="news-line" />
      <div className="news1" />
      <span className="news1-date">Sep 13, 2019</span>
      <span className="news1-title">Borjomi Palace</span>
      <span className="readMore1">Read more</span>
      <KeyboardBackspaceIcon className="arrow1" />
      <div className="news2" />
      <span className="news2-date">Sep 13, 2019</span>
      <span className="news2-title">Spring Travel in Full Swing</span>
      <span className="readMore2">Read more</span>
      <KeyboardBackspaceIcon className="arrow2" />
      <div className="news3" />
      <span className="news3-date">Sep 13, 2019</span>
      <span className="news3-title">FAUCHON L’Hotel Kyoto Opens In Japan</span>
      <span className="readMore3">Read more</span>
      <KeyboardBackspaceIcon className="arrow3" />
      <div className="news4" />
      <span className="news4-date">Sep 13, 2019</span>
      <span className="news4-title">Hilton Alpharetta Atlanta Hotel Opens</span>
      <span className="readMore4">Read more</span>
      <KeyboardBackspaceIcon className="arrow4" />
      <SocialMedia media={"news"} />
      <span
        style={{
          position: "absolute",
          width: "3.55vw",
          height: "6.19vh",
          left: "92.5vw",
          top: "868.08vh",
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

export default News;
