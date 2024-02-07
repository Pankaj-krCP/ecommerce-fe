import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <h3 style={{ color: "red", textAlign: "center" }}>
        Page is Under Progress...
      </h3>
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
