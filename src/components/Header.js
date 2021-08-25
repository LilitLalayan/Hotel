import React from "react";
import "../App.css";
import Flag from "./Flag";

function Header() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        height: "14.9vh",
        backgroundColor: "#FDF9E5",
        width: "100%",
      }}
    >
      <section
        style={{
          top: "8.82vh",
          left: "8.43vw",
          position: "absolute",
          width: "2.27vw",
          height: "3.34vh",
        }}
      >
        <Flag />
      </section>
      <div className="header-logo" />
      <span
        style={{
          top: "8.88vh",
          left: "79.83vw",
          position: "absolute",
          fontSize: "0.6em",
          cursor: "pointer",
          fontFamily: "Inter",
          lineHeight: "150%",
        }}
      >
        USD/
      </span>
      <span
        style={{
          position: "absolute",
          top: "8.88vh",
          left: "81.86vw",
          fontSize: "0.6em",
          cursor: "pointer",
          color: "grey",
          fontFamily: "Inter",
          lineHeight: "150%",
        }}
      >
        RUB/AMD
      </span>
      <div className="Burger">
        <div
          style={{
            width: "1.46vw",
            height: "1px",
            backgroundColor: "black",
          }}
        />
        <div className="burger-medium-line" />
        <div
          style={{
            width: "1.46vw",
            height: "1px",
            backgroundColor: "black",
          }}
        />
      </div>
    </div>
  );
}

export default Header;
