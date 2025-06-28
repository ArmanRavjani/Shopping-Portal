import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div id="navbar">
        <div id="nav1">
          <div id="btn1">
            <i className="fa-solid fa-user"></i>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              Account
            </Link>
          </div>
          <div id="btn2">
            <i className="fa-solid fa-heart"></i>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              Wishlist
            </Link>
          </div>
          <div id="btn3">
            <i className="fa-solid fa-cart-shopping"></i>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              My Cart
            </Link>
          </div>
          <div id="btn4">
            <i className="fa-solid fa-right-to-bracket"></i>
            <Link to="/" style={{ textDecoration: "none", color: "black" }}>
              {" "}
              Login
            </Link>
          </div>
        </div>
        <div id="nav2">
          <h4>Track Order</h4>
        </div>
      </div>
      <div id="nav-center">
        <h2>Shopping Portal</h2>
        <div id="nav-search">
          <input placeholder="Search here.." className="input" />
          <div id="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div id="cart">
          <h4 id="cart1">Cart - </h4>
          <h4 id="cart1" style={{ color: "red" }}>
            RS.00.00
          </h4>
          <div id="cart2">
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>
      <div id="nav-end">
        <div id="nav-end-div">
          <h4 id="home">
            <NavLink
              to="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              HOME
            </NavLink>
          </h4>

          <h4 id="books">
            <NavLink
              to="/Books"
              style={{ color: "white", textDecoration: "none" }}
            >
              BOOKS{" "}
            </NavLink>
          </h4>

          <h4 id="electronics">
            <NavLink
              to="/Electronics"
              style={{ color: "white", textDecoration: "none" }}
            >
              ELECTRONICS
            </NavLink>
          </h4>

          <h4 id="furniture">
            <NavLink
              to="/Furniture"
              style={{ color: "white", textDecoration: "none" }}
            >
              FURNITURE
            </NavLink>
          </h4>

          <h4 id="fashion">
            <NavLink
              to="/Fashion"
              style={{ color: "white", textDecoration: "none" }}
            >
              FASHION{" "}
            </NavLink>
          </h4>
        </div>
      </div>
    </header>
  );
}
