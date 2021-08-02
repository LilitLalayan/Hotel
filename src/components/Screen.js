import React from "react";
import "../App.css";

function Screen() {
  return (
    <div
      style={{
        height: "117.26vh",
        top: "21vh",
        width: "100%",
        background: `url(
          "https://images.pexels.com/photos/2474063/pexels-photo-2474063.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <h5 className="welcome">WELCOME TO</h5>
      <h1 className="konyak">HOTEL KONYAK</h1>
    </div>
  );
}

export default Screen;
