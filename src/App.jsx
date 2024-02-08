import React from "react";
import { Route, Routes } from "react-router-dom";

// import rootlayout
import Rootlayout from "./layout/Rootlayout";
import Test from "./pages/Test";

// import pages
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Project from "./pages/Project";
import Signup from "./pages/Signup";

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
        <Route path="/projects" element={<Project />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />

        <Route path="/test" element={<Test />} />
      </Route>
    </Routes>
  );
};

export default App;
