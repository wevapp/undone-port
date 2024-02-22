import React from "react";
import { Link } from "react-router-dom"

const Project = () => {
  const projects = [
    {
      img: "/project/online.png",
      title: "Online Order",
      link: "https://wevapp.github.io/ordering/"
    },{
      img: "/project/todo.png",
      title: "Todo App",
      link: "https://wevapp.github.io/react-references/"
    },{
      img: "/project/calc.png",
      title: "Calculator",
      link: "https://wevapp.github.io/calculator/"
    },
  ];
  return <div className="p-4">
        <p className="mt-8 pl-20 text-white text-2xl font-bold">Projects</p>
        <div className="grid">
          <small className="pl-20 text-white text-sm font-bold">Use default account</small>
          <small className="pl-20 text-white text-sm font-bold">username: mond</small>
          <small className="pl-20 text-white text-sm font-bold">pass: 123</small>
        </div>
        <div className="grid gap-y-4 p-8 text-white xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          {projects.map((proj, index) => (
            <div key={index} className="relative w-52 card glass m-auto hover:bg-slate-100 hover:text-black transition duration-500 ease-in-out cursor-pointer xs:w-full sm:w-52 md:w-52 lg:w-52 xl:w-52">
              <p className="text-center">Click me to appreciate</p>
              <figure className="relative p-2 hover:bg-white transition duration-500 ease-in-out">
                <Link to={proj.link}>
                  <a href={proj.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-[200px] rounded-lg xs:object-contain sm:object-fill md:object-fill lg:object-fill xl:object-fill"
                    />
                  </a>
                </Link>
              </figure>
              <div className="p-3 font-bold">
                <h2>{proj.title}</h2>
              </div>
              <div className="absolute top-0 left-0 w-0 h-full bg-white transition duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      </div>
};

export default Project;
