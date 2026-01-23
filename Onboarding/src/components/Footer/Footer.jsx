import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" id="contact-us">
      <div className="footer-content">
        <div className="footer-content-left">
          <h2>Tomato</h2>
          <p>dummy text is all i ask for, lord of Chrisiti</p>
          <div className="icons">
            <p>ONE ICON</p>
            <p>TWO ICON</p>
            <p>THREE ICON</p>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>1223443543</li>
            <li>companycontact@tomTA.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2025 Tomato</p>
    </div>
  );
};

export default Footer;
