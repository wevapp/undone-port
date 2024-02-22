import React from "react";
import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// import rootlayout
import Rootlayout from "./layout/Rootlayout";
import Test from "./pages/Test";

// import pages
// import Contact from "./pages/Contact";
import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Project from "./pages/Project";
// import Signup from "./pages/Signup";

const LazyContact = React.lazy(()=>import('./pages/Contact'))
// const LazyHome = React.lazy(()=>import('./pages/Home'))
const LazyLogin = React.lazy(()=>import('./pages/Login'))
const LazyProject = React.lazy(()=>import('./pages/Project'))
const LazySignup = React.lazy(()=>import('./pages/Signup'))

// import about content components
// import AboutMe from "./components/about-components/AboutMe";
// import EducationalBackground from "./components/about-components/EducationalBackground";
// import Skills from "./components/about-components/Skills";
// import WorkingExperience from "./components/about-components/WorkingExperience";


const LazyAboutMe = React.lazy(()=>import('./components/about-components/AboutMe'))
const LazySkills = React.lazy(()=>import('./components/about-components/Skills'))
const LazyEducBack = React.lazy(()=>import('./components/about-components/EducationalBackground'))
const LazyWorkExp = React.lazy(()=>import('./components/about-components/WorkingExperience'))

const App = () => {
  return (
    <Routes>
      <Route element={<Rootlayout />}>
        <Route index element={<Home />} />
        <Route path="/undone-port" element={<Home />} />
        <Route path="/about" element={<Suspense fallback={<div className="text-center">
      <span className="border-2 loading loading-bars loading-lg"></span>
      </div>}><LazyAboutMe /></Suspense>} />
        <Route path="/skills" element={<Suspense fallback={<div className="text-center">
      <span className="border-2 loading loading-bars loading-lg"></span>
      </div>}><LazySkills /></Suspense>} />
        <Route path="/educational" element={<Suspense fallback={<div className="text-center">
      <span className="border-2 loading loading-bars loading-lg"></span>
      </div>}><LazyEducBack /></Suspense>} />
        <Route path="/workingexp" element={<Suspense fallback={<div className="text-center">
      <span className="border-2 loading loading-bars loading-lg"></span>
      </div>}><LazyWorkExp /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<div className="text-center">
      <span className="border-2 loading loading-bars loading-lg"></span>
      </div>}><LazyContact /></Suspense>} />
        <Route path="/projects" element={<Suspense fallback={<div className="text-center">
      <span className="border-2 loading loading-bars loading-lg"></span>
      </div>}><LazyProject /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<div className="text-center">
      <span className="border-2 loading loading-bars loading-lg"></span>
      </div>}><LazyLogin /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<div className="text-center">
      <span className="border-2 loading loading-bars loading-lg"></span>
      </div>}><LazySignup /></Suspense>} />

        {/* <Route path="/test" element={<Test />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
