import React from "react";
import "./home.css";

export default function Home() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
        integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <div id="hero-img"></div>
      <div id="hero-divs">
        <div id="hero-div-1">
          <h3>
            <i
              style={{ color: "black" }}
              className="fa-solid fa-dollar-sign"
            ></i>
            MONEY BACK
          </h3>
          <br />
          <p>30 DAY MONEY BACK GUARANTEE</p>
        </div>
        <div id="hero-div-2">
          <h3>
            <i style={{ color: "black" }} className="fa-solid fa-truck"></i>FREE
            SHIPPING
          </h3>
          <br />
          <p>FREE-SHIP ON ORDER ABOVE RS.600.00</p>
        </div>
        <div id="hero-div-3">
          <h3>
            <i style={{ color: "black" }} className="fa-solid fa-gift"></i>
            SPECIAL SELL
          </h3>
          <br />
          <p>ALL ITEMS-SALE UP TO 20% OFF</p>
        </div>
      </div>
      <div id="home1">
        <h3>ALL PRODUCTS</h3>
      </div>

      <div className="shop-section">
        <div className="box">
          <div className="box-content">
            <div
              className="box-img"
              style={{
                backgroundImage: "url('./public/images/item1.jpeg')",
                height: "400px",
              }}
            ></div>
            <h4>VIVO T4X 5G</h4>
            <h4 className="price">RS.14500.00</h4>
            <button>Add to cart</button>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div
              className="box-img"
              style={{
                backgroundImage: "url('./public/images/item2.jpeg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "400px",
              }}
            ></div>
            <h4>VIVO T4X 5G</h4>
            <h4 className="price">RS.14500.00</h4>
            <button>Add to cart</button>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div
              className="box-img"
              style={{
                backgroundImage: "url('./public/images/item3.jpeg')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "400px",
              }}
            ></div>
            <h4>VIVO T4X 5G</h4>
            <h4 className="price">RS.14500.00</h4>
            <button>Add to cart</button>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div
              className="box-img"
              style={{
                backgroundImage: "url('./public/images/item4.jpeg')",
                height: "400px",
              }}
            ></div>
            <h4>VIVO T4X 5G</h4>
            <h4 className="price">RS.14500.00</h4>
            <button>Add to cart</button>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div
              className="box-img"
              style={{
                backgroundImage: "url('./public/images/item5.jpeg')",
                height: "400px",
              }}
            ></div>
            <h4>VIVO T4X 5G</h4>
            <h4 className="price">RS.14500.00</h4>
            <button>Add to cart</button>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div
              className="box-img"
              style={{
                backgroundImage: "url('./public/images/item6.jpeg')",
                height: "400px",
              }}
            ></div>
            <h4>VIVO T4X 5G</h4>
            <h4 className="price">RS.14500.00</h4>
            <button>Add to cart</button>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div
              className="box-img"
              style={{
                backgroundImage: "url('./public/images/item7.jpeg')",
                backgroundSize: "auto",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                height: "400px",
              }}
            ></div>
            <h4>VIVO T4X 5G</h4>
            <h4 className="price">RS.14500.00</h4>
            <button>Add to cart</button>
          </div>
        </div>
        <div className="box">
          <div className="box-content">
            <div
              className="box-img"
              style={{
                backgroundImage: "url('./public/images/item8.jpeg')",
                height: "400px",
              }}
            ></div>
            <h4>VIVO T4X 5G</h4>
            <h4 className="price">RS.14500.00</h4>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  );
}
