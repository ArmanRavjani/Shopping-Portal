import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div id="brands">
        <h3>OUR BRANDS</h3>
      </div>
      <div id="brand-images">
        <img id="aoc" src="./public/images/logo5-removebg-preview.png" alt="" />
        <img id="bajaj" src="./public/images/logo6.png" alt="" />
        <img
          id="blackberry"
          src="./public/images/logo4-removebg-preview.png"
          alt=""
        />
        <img id="canon" src="./public/images/logo1.png" alt="" />
        <img
          id="compaq"
          src="./public/images/logo2-removebg-preview.png"
          alt=""
        />
        <img
          id="daikin"
          src="./public/images/logo3-removebg-preview.png"
          alt=""
        />
      </div>
      <div id="footer">
        <div id="footer1">
          <h2>Shopping Portal</h2>
          <p>
            Name libero tempore, cum soluta nobis est eligendi optio cumque{" "}
            <br /> nihil impedit quo minus id quod maxime placeat facere
            possimus.
          </p>
        </div>
        <div id="footer2">
          <h3>OPENING TIME</h3>
          <div id="f-1">
            <p>Monday-Friday</p>
            <p>06:00 To 18:00</p>
          </div>
          <div id="f-2">
            <p>Saturday</p>
            <p>09:00 To 20:00</p>
          </div>
          <div id="f-3">
            <p>Sunday</p>
            <p>10:00 To 20:00</p>
          </div>
        </div>
        <div id="footer-3">
          <h2>INFORMATION</h2>
          <div id="fl-1">
            <i className="fa-solid fa-location-dot"></i>
            <p>New Delhi,Delhi</p>
          </div>
          <div id="fl-2">
            <i className="fa-solid fa-mobile-screen"></i>
            <p>
              (011) 0000000000 <br /> (011) 0000000000
            </p>
          </div>
          <div id="fl-3">
            <i className="fa-solid fa-envelope"></i>
            <p>info@phgurukul.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
