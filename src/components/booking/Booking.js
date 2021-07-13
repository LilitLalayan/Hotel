import React, { useState } from "react";
import "../../App.css";
import Adults from "./Adults";
import Children from "./Children";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Booking() {
  const [promCode, setPromCode] = useState("");
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const data = {
    arrival: startDate,
    departure: endDate,
    adults: adultCount,
    children: childCount,
    promoCode: promCode,
  };

  return (
    <form
      id="Booking"
      onSubmit={(e) => {
        e.preventDefault();
        if (
          startDate === null ||
          endDate === null ||
          adultCount === 0 ||
          childCount === 0 ||
          promCode === ""
        ) {
          alert("PLEASE FILL IN THE FORM");
        } else {
          setStartDate(null);
          setEndDate(null);
          setAdultCount(0);
          setChildCount(0);
          setPromCode("");
          console.log(JSON.stringify(data));
          alert("YOU BOOKED A STAY!");
        }
      }}
    >
      <div className="arrival">
        <h6 className="h6-text">CHECK IN</h6>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          isClearable
          placeholderText="Choose date"
        />
      </div>
      <div className="departure">
        <h6 className="h6-text">CHECK OUT</h6>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          isClearable
          placeholderText="Choose date"
        />
      </div>
      <Adults adultCount={adultCount} setAdultCount={setAdultCount} />
      <Children childCount={childCount} setChildCount={setChildCount} />
      <div className="prmotional-code ">
        <h6 className="h6-text">PROMOTIONAL CODE</h6>
        <input
          type="text"
          value={promCode}
          style={{
            width: 200,
            height: 50,
            border: "0.5px solid #6F4F28",
            boxSizing: "border-box",
            marginTop: 14,
            outline: "none",
          }}
          onChange={(e) => setPromCode(e.target.value)}
        />
      </div>
      <button className="btn">BOOK NOW</button>
    </form>
  );
}

export default Booking;
