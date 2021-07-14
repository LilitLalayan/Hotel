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
      <img
        style={{
          position: "absolute",
          width: "16.39vw",
          height: "26.20vh",
          top: "-3.22vh",
          left: "40.35vw",
        }}
        alt="logo"
        src={
          "https://s3-alpha-sig.figma.com/img/7e6e/7ac2/6694b1d2b05b683e9e4f2d2272b0e0e6?Expires=1626652800&Signature=QkQ3LVOeekVu9CAcedvRZYRGAOqrmjAutC39O4~ceusgq~z4eD-JBqXPl8~AAzVRF~xWmIwRE9MKGFLjC6XyHARFtPkGpB-od59lNrC24GY2Za0-jdOHS-m43-YG7sP21QD9a1ifyzEQIgnNsR~wDQCtSA42iKo8P4DVG4p~l2EgQtGI~cQ58w88pE3-mEjlLYiVqBka-vvvS9P0osY-XDhgJY393ZEJLojbAymV8eQTa3GwSMUauyCk5fMsl9G8g6AH4rc14yo0Q9mNqgiLjJd9naz9rdpzEct58Hgz0tOD1IfFQNS0KjtzUsr6h6JR1TalK~AQjdBWUZF4BMzu4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        }
      />

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
