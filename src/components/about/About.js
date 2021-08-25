import React from "react";
import "../../App.css";
import SocialMedia from "../SocialMedia";

function About() {
  return (
    <div>
      <SocialMedia media={"about"} />
      <div className="about">
        <h1 className="about-title">about us</h1>
        <div className="line" />
        <div style={{ width: "32.7vw", height: "67.9vh", marginTop: "4.29vh" }}>
          <p className="about-text">
            Being located quite close to the downtown Konyak hotel offers a cosy
            and peaceful corner for both business and leisure travellers. Just a
            short 10-minute walk and you are already in the centre of Yerevan
            from where you have easy access to all esential locations․
          </p>
          <p className="about-text">
            In modern and well furnished rooms there are all conditions needed
            for productive work and ideal leisure.
          </p>
          <p className="about-text">
            You can arrange board meetings and exclusive events at our
            restaurant on the rooftop, enjoying Armenian food and beverages.
          </p>
          <p className="about-text">
            If you visit us during the summer season you will have the
            opportunity to relax in our outdoor pool and enjoy the evenings in
            “SkyLand” rooftop open-air restaurant-bar, especially the marvellous
            scene through the glass floor.
          </p>
          <p className="about-text">
            For the most curious guests we’ll organize a little degustation at
            our wine cellar, where barrels full of cognac and wine are aged.
            Sure you’ll be amazed with the taste of legendary Armenian brandy.
          </p>
        </div>
      </div>
      <div className="about-img1" />
      <div className="about-img2" />
      <span
        style={{
          position: "absolute",
          width: "3.55vw",
          height: "6.19vh",
          left: "92.5vw",
          top: "170.8vh",
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
    </div>
  );
}

export default About;
