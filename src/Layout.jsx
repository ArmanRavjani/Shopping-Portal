import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/HeaderTemp/HeaderTemp.jsx";
import Footer from "./components/Footer/FooterTemp.jsx";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
