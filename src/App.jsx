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
        <Route path="/about" element={<Suspense fallback={<span className="loading loading-bars loading-lg"></span>}><LazyAboutMe /></Suspense>} />
        <Route path="/skills" element={<Suspense fallback={<span className="loading loading-bars loading-lg"></span>}><LazySkills /></Suspense>} />
        <Route path="/educational" element={<Suspense fallback={<span className="loading loading-bars loading-lg"></span>}><LazyEducBack /></Suspense>} />
        <Route path="/workingexp" element={<Suspense fallback={<span className="loading loading-bars loading-lg"></span>}><LazyWorkExp /></Suspense>} />
        <Route path="/contact" element={<Suspense fallback={<span className="loading loading-bars loading-lg"></span>}><LazyContact /></Suspense>} />
        <Route path="/projects" element={<Suspense fallback={<span className="loading loading-bars loading-lg"></span>}><LazyProject /></Suspense>} />
        <Route path="/login" element={<Suspense fallback={<span className="loading loading-bars loading-lg"></span>}><LazyLogin /></Suspense>} />
        <Route path="/register" element={<Suspense fallback={<span className="loading loading-bars loading-lg"></span>}><LazySignup /></Suspense>} />

        {/* <Route path="/test" element={<Test />} /> */}
      </Route>
    </Routes>
  );
};

export default App;
