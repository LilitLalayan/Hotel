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
  } else if (media === "pool") {
    className = "mediaPool";
  }
  return (
    <div className={className}>
      <div
        style={{
          width: "1.97vw",
          height: "4.09vh",
          backgroundColor: "#6F4F28",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#FAF6F2",
          cursor: "pointer",
          fontSize: "1.3vw",
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
          width: "1.97vw",
          height: "4.09vh",
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
          <InstagramIcon style={{ fontSize: "1.3vw" }} />
        </a>
      </div>
      <div
        style={{
          width: "1.97vw",
          height: "4.09vh",
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
            style={{ width: "1.3vw", height: "3vh" }}
          />
        </a>
      </div>
    </div>
  );
}

export default SocialMedia;
