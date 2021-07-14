import React, { useState } from "react";
import "../../App.css";

function Children({ childCount, setChildCount }) {
  const increment = () => {
    setChildCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    if (childCount === 0) return;
    setChildCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="children">
      <h6 className="h6-text">CHILDREN</h6>
      <div
        style={{
          width: "6.2vw",
          height: "5.4vh",
          marginTop: "2.1vh",
          boxSizing: "border-box",
          border: "0.5px solid #6F4F28",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <span
          style={{
            fontSize: "0.83vw",
            color: "#201B13",
            cursor: "pointer",
          }}
          onClick={decrement}
        >
          -
        </span>
        <span
          style={{
            fontSize: "0.83vw",
            fontFamily: "Ogg",
            color: "#201B13",
          }}
        >
          {childCount}
        </span>
        <span
          style={{
            fontSize: "0.83vw",
            color: "#201B13",
            cursor: "pointer",
          }}
          onClick={increment}
        >
          +
        </span>
      </div>
    </div>
  );
}

export default Children;
