import React from "react";
import "../../App.css";

function Adults({ adultCount, setAdultCount }) {
  const increment = () => {
    setAdultCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    if (adultCount === 0) return;
    setAdultCount((prevCount) => prevCount - 1);
  };
  return (
    <div className="adults">
      <h6 className="h6-text">ADULTS</h6>
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
            color: "#201B13",
            cursor: "pointer",
            fontSize: "0.83em",
          }}
          onClick={decrement}
        >
          -
        </span>
        <span
          style={{
            fontSize: "0.83em",
            fontFamily: "Ogg",
            color: "#201B13",
          }}
        >
          {adultCount}
        </span>
        <span
          style={{
            fontSize: "0.83em",
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

export default Adults;
