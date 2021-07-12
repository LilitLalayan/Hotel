import React from "react";
import "../App.css";
import InstagramIcon from "@material-ui/icons/Instagram";

function SocialMedia({ media }) {
  let className = "";
  if (media === "home") {
    className = "mediaHome";
  } else if (media === "about") {
    className = "mediaAbout";
  } else if (media === "rooms") {
    className = "mediaRoom";
  } else if (media === "bars") {
    className = "mediaBar";
  }
  return (
    <div className={className}>
      <div
        style={{
          width: 38,
          height: 38,
          backgroundColor: "#6F4F28",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#FAF6F2",
          cursor: "pointer",
        }}
      >
        <a
          href="https://www.facebook.com/"
          target="_blank"
          style={{ textDecoration: "none", color: "#FAF6F2" }}
        >
          f
        </a>
      </div>
      <div
        style={{
          width: 38,
          height: 38,
          backgroundColor: "#6F4F28",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#FAF6F2",
          cursor: "pointer",
        }}
      >
        <a
          href="https://www.instagram.com/"
          target="_blank"
          style={{
            textDecoration: "none",
            color: "#FAF6F2",
          }}
        >
          <InstagramIcon />
        </a>
      </div>
      <div
        style={{
          width: 38,
          height: 38,
          backgroundColor: "#6F4F28",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#FAF6F2",
          cursor: "pointer",
        }}
      >
        <a
          href="https://www.tripadvisor.com/"
          target="_blank"
          style={{ textDecoration: "none", color: "#FAF6F2" }}
        >
          <img
            alt="tripAdvider logo"
            src="http://localhost:3000/tripadvisor-24.png"
          />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
