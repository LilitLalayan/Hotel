import React from "react";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-group1">
        <h5 className="footer-room">Standard Twin</h5>
        <h5 className="footer-room">Standard Double</h5>
        <h5 className="footer-room">Family</h5>
        <h5 className="footer-room">Deluxe</h5>
        <h5 className="footer-room">Premium Luxe</h5>
      </div>
      <div className="footer-group2">
        <h5 className="footer-page">Booking</h5>
        <h5 className="footer-page">Restaurant</h5>
        <h5 className="footer-page">Spa</h5>
        <h5 className="footer-page">News</h5>
        <h5 className="footer-page">About</h5>
        <h5 className="footer-page">Contact</h5>
      </div>
      <div className="footer-logo">
        <h3 className="logo-title">Konyak Hotel</h3>
      </div>
      <div className="footer-address">
        <p className="address-info">Armenia, Yerevan, Rostomi 24</p>
        <p className="address-info">+374 (60) 44-27-77</p>
        <a href="mailto: info@konyakhotel.am" className="address-info">
          info@konyakhotel.am
        </a>
      </div>
      <div className="copyright">
        © Konyak Hotel {new Date().getFullYear()}. All Rights Reserved
      </div>
      <div className="tripadviser-logo" />
      <div className="credit-cards" />
      <div className="design">
        <span className="design-span">Design and development</span>
        <span className="design-weflex">WeFlex</span>
      </div>
    </div>
  );
}

export default Footer;
