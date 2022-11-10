import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "../Home";
import Info from "../Project";
import Contact from "../Contact";
import Navbars from "../Navbars/nav";
import Footers from "../Footers/footers";
import About from "../about";
import Resume from "../resume";

const RouterComponent = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/project" element={<Info />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footers />
      </BrowserRouter>
    </div>
  );
};

export default RouterComponent;
