import React from "react";
import "../App.css";

function Header() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        height: "14.9vh",
        backgroundColor: "#FDF9E5",
        display: "flex",
        width: "100%",
      }}
    >
      <span
        style={{
          top: "8.82vh",
          left: "8.43vw",
          position: "absolute",
          width: "2.27vw",
          height: "3.34vh",
        }}
      >
        flag
      </span>
      <div className="header-logo" />

      <span
        style={{
          top: "8.88vh",
          left: "79.83vw",
          position: "absolute",
          fontSize: "0.83vw",
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
          fontSize: "0.83vw",
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
            height: "0.25vh",
            backgroundColor: "black",
          }}
        ></div>
        <div
          style={{
            width: "0.94vw",
            height: "0.25vh",
            backgroundColor: "black",
          }}
        ></div>
        <div
          style={{
            width: "1.46vw",
            height: "0.25vh",
            backgroundColor: "black",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Header;
