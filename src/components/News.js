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
      <section className="section1">
        <span className="readMore">Read more</span>
        <KeyboardBackspaceIcon className="arrow" />
      </section>
      <div className="news2" />
      <span className="news2-date">Sep 13, 2019</span>
      <span className="news2-title">Spring Travel in Full Swing</span>
      <section className="section2">
        <span className="readMore">Read more</span>
        <KeyboardBackspaceIcon className="arrow" />
      </section>
      <div className="news3" />
      <span className="news3-date">Sep 13, 2019</span>
      <span className="news3-title">FAUCHON L’Hotel Kyoto Opens In Japan</span>
      <section className="section3">
        <span className="readMore">Read more</span>
        <KeyboardBackspaceIcon className="arrow" />
      </section>
      <div className="news4" />
      <span className="news4-date">Sep 13, 2019</span>
      <span className="news4-title">Hilton Alpharetta Atlanta Hotel Opens</span>
      <section className="section4">
        <span className="readMore">Read more</span>
        <KeyboardBackspaceIcon className="arrow" />
      </section>
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
    </>
  );
}

export default News;
