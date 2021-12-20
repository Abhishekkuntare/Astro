import React from "react";
import "./FooterBottom.css";

const FooterBottom = () => {
  return (
    <div className="footerDiv">
      <div className="footer0">
        <i className="fas fa-box-open" />
        <div className="footer1">
          <p>Free delivery all over India</p>
          <h3>No minimum order value</h3>
        </div>
      </div>

      <div className="footer0">
        <i className="fas fa-shopping-cart" />
        <div className="footer1">
          <p> Free exchanges</p>
          <h3>15 days no questions asked me</h3>
        </div>
      </div>

      <div className="footer0">
        <i className="fas fa-user" />
        <div className="footer1">
          <p>Top-notch support</p>
          <h3>+91 9156075536<br /> abhishekkuntare7@gmail.com</h3>
        </div>
      </div>

      <div className="footer0">
      <i class="fas fa-credit-card"></i>
        <div className="footer1">
          <p>Secure payments</p>
          <h3>All transactions are processed</h3>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;
