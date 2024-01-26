import React from "react";
import { Link, Routes } from "react-router-dom";
// import AboutMe from "../components/about-components/AboutMe";
// import EducationalBackground from "../components/about-components/EducationalBackground";
// import WorkingExperience from "../components/about-components/WorkingExperience";

const About = () => {
  return (
    <div className="border w-[600px]">
      <div>
        <ul className="flex font-semibold text-white">
          <li className="cursor-pointer border px-3 py-1 ">
            <Link to="1">About Me</Link>
          </li>
          <li className="cursor-pointer border px-3 py-1 ">
            <Link to="2">Working Exp.</Link>
          </li>
          <li className="cursor-pointer border px-3 py-1 ">
            <Link to="3">Educational Background</Link>
          </li>
        </ul>
      </div>
      <Routes>
        {/* <Route path="1" element={<AboutMe />} />
        <Route path="2" element={<WorkingExperience />} />
        <Route path="3" element={<EducationalBackground />} /> */}
        {/* Add more sub-routes as needed */}
      </Routes>
    </div>
  );
};

export default About;
