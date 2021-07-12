import React from "react";
import "../App.css";

function Header() {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        height: 138,
        backgroundColor: "#FDF9E5",
        display: "flex",
        width: "100%",
      }}
    >
      <span style={{ top: 60, left: "10vw", position: "absolute" }}>flag</span>
      <img
        style={{
          width: 256,
          marginTop: -22,
          marginLeft: "50%",
          transform: "translate(-128px)",
        }}
        alt="logo"
        src={
          "https://s3-alpha-sig.figma.com/img/7e6e/7ac2/6694b1d2b05b683e9e4f2d2272b0e0e6?Expires=1626652800&Signature=QkQ3LVOeekVu9CAcedvRZYRGAOqrmjAutC39O4~ceusgq~z4eD-JBqXPl8~AAzVRF~xWmIwRE9MKGFLjC6XyHARFtPkGpB-od59lNrC24GY2Za0-jdOHS-m43-YG7sP21QD9a1ifyzEQIgnNsR~wDQCtSA42iKo8P4DVG4p~l2EgQtGI~cQ58w88pE3-mEjlLYiVqBka-vvvS9P0osY-XDhgJY393ZEJLojbAymV8eQTa3GwSMUauyCk5fMsl9G8g6AH4rc14yo0Q9mNqgiLjJd9naz9rdpzEct58Hgz0tOD1IfFQNS0KjtzUsr6h6JR1TalK~AQjdBWUZF4BMzu4Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        }
      />
      <div
        style={{
          display: "flex",
          top: 58,
          right: "10vw",
          position: "absolute",
        }}
      >
        <span
          style={{
            fontSize: 16,

            cursor: "pointer",
            fontFamily: "Inter",
          }}
        >
          USD/
        </span>
        <span
          style={{
            fontSize: 16,
            cursor: "pointer",
            color: "grey",
            fontFamily: "Inter",
          }}
        >
          RUB/AMD
        </span>
        <div className="Burger">
          <div
            style={{ width: 28, height: "1.7px", backgroundColor: "black" }}
          ></div>
          <div
            style={{
              width: 18,
              height: "1.7px",
              backgroundColor: "black",
            }}
          ></div>
          <div
            style={{ width: 28, height: "1.7px", backgroundColor: "black" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
