import React from "react";
import { Link } from "react-router-dom"

// Import Zustand
import useImageStore from "../store/useStore";

const Project = () => {
  const projectImages = useImageStore((state) => state.projects)
  
  return (
    <div className="p-4">
        <p className="mt-8 pl-20 text-white text-2xl font-bold">Projects</p>
        <div className="grid gap-y-4 p-8 text-white xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {projectImages.map((proj, index) => (
            <div key={index} className="relative w-52 card glass m-auto hover:bg-slate-100 hover:text-black transition duration-500 ease-in-out cursor-pointer xs:w-full sm:w-52 md:w-52 lg:w-52 xl:w-52">
              <p className="text-center">Click me to appreciate</p>
              <figure className="relative p-2 hover:bg-white transition duration-500 ease-in-out">
                <Link to={proj.link}>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={proj.img}
                      alt={proj.name}
                      className="w-full h-[200px] rounded-lg xs:object-contain sm:object-fill md:object-fill lg:object-fill xl:object-fill"
                    />
                  </a>
                </Link>
              </figure>
              <div className="p-3 font-bold">
                <h2>{proj.name}</h2>
              </div>
              <div className="absolute top-0 left-0 w-0 h-full bg-white transition duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
  )};

export default Project;
