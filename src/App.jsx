import React from "react";
import { Route, Routes } from "react-router-dom";

// import rootlayout
import Rootlayout from "./layout/Rootlayout";

// import pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

// import about content components

const App = () => {
  return (
    <Routes>
      <Route element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="/about/*" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
