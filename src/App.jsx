import React from "react";
import { Route, Routes } from "react-router-dom";

// import rootlayout
import Rootlayout from "./layout/Rootlayout";

// import pages
import Contact from "./pages/Contact";
import Home from "./pages/Home";

// import about content components
import AboutMe from "./components/about-components/AboutMe";
import EducationalBackground from "./components/about-components/EducationalBackground";
import Skills from "./components/about-components/Skills";
import WorkingExperience from "./components/about-components/WorkingExperience";

const App = () => {
  return (
    <Routes>
      <Route element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/educational" element={<EducationalBackground />} />
        <Route path="/workingexp" element={<WorkingExperience />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default App;
