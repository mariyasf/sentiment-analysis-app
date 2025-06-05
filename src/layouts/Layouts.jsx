import React from "react";
import Navbar from "../page/Shared/Navbar";
import Footer from "../page/Shared/Footer";
import { Outlet } from "react-router-dom";

const Layouts = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layouts;
