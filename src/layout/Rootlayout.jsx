import React from "react";
import { Outlet } from "react-router-dom";
import FooterSvg from "../components/FooterSVG";
import Navigation from "../components/Navigation";
const Rootlayout = () => {
  return (
    <div
      className="container m-auto shadow-md bg-gradient-to-r overflow-hidden"
      style={{
        background: "linear-gradient(to right, #818fb4, #435585, #363062)",
      }}
    >
      <Navigation />
      <Outlet />
      <FooterSvg />
    </div>
  );
};

export default Rootlayout;
