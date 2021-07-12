import React from "react";
import "../App.css";

function Screen() {
  return (
    <div
      style={{
        height: 1080,
        top: 138,
        width: "100%",
        background: `url(
          "https://s3-alpha-sig.figma.com/img/796a/2b74/5a0c73b50c815626a01b05f1321b785a?Expires=1626652800&Signature=V~r~0bmZ2IgEGFC9fOqsFqpVEuNgHNNULoDg2UUkQhjdSDz-tdconBK2ofg~dHnD3YHiCVUqgqexGsDypj6NlliotZuciK73G15uMjS0oOeGW5QS3e5eo-BTHGNIO8htLGqlp4311O5TbgSZlsjW9Su0kSbVscEBFE-26uuCHLHZSNsecpuHOEeqovTTvagNzqaYYG4eUmfq7z77UDmdHCHaSViVBN7GptpMmy9hcgZZr-Yj9ek65B~cepNA1W1tFHZ0Vh4mec8~Ddm8LUS3WUS7vn~7x1AK1gHJraDHmv~yOaHXILssJiGJdusOI99fAPg-imQDoIdZ7uP7OmtyvQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        )`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        position: "absolute",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="text">
        <h5 className="welcome">WELCOME TO</h5>
        <h1 className="konyak">
          HOTEL KONYAK <br /> IN YEREVAN
        </h1>
      </div>
    </div>
  );
}

export default Screen;
