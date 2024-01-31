import React from "react";

const Skills = () => {
  const cards = {
    software: [
      {
        img: "/Icons/html1.PNG",
        title: "HTML",
      },
      {
        img: "/Icons/css.PNG",
        title: "CSS",
      },
      {
        img: "/Icons/js.png",
        title: "Javascript",
      },
      {
        img: "/Icons/react.png",
        title: "ReactJS",
      },
      {
        img: "/Icons/tailwind.PNG",
        title: "Tailwind-CSS",
      },
      {
        img: "/Icons/express.png",
        title: "ExpressJS",
      },
      {
        img: "/Icons/nodejs.png",
        title: "NodeJS",
      },
      {
        img: "/Icons/mongo.PNG",
        title: "MongoDB",
      },
    ],
    hardware: [
      {
        img: "/Icons/pc.png",
        title: "Upgrade Laptop",
      },
      {
        img: "/Icons/laptop.png",
        title: "Upgrade PC",
      },
      {
        img: "/Icons/trouble.png",
        title: "Troubleshooting",
      },
      {
        img: "/Icons/install.jpg",
        title: "Installing Application",
      },
    ],
  };

  return (
    <div className="p-4">
      {/* Hardware */}
      <p className="mt-8 pl-20 text-white text-2xl font-bold">Hardware</p>
      <div className="grid gap-y-4 p-8 text-white xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {cards.hardware.map((card) => (
          <div className="relative w-52 card glass m-auto hover:bg-slate-100 hover:text-black transition duration-500 ease-in-out cursor-not-allowed xs:w-full sm:w-52 md:w-52 lg:w-52 xl:w-52">
            <figure className="relative p-2 hover:bg-white transition duration-500 ease-in-out">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-[200px] rounded-lg xs:object-contain sm:object-fill md:object-fill lg:object-fill xl:object-fill"
              />
            </figure>
            <div className="p-3">
              <h2>{card.title}</h2>
            </div>
            {/* Pseudo-elements for the background transition */}
            <div className="absolute top-0 left-0 w-0 h-full bg-white transition duration-500 ease-in-out opacity-0 group-hover:opacity-100"></div>
          </div>
        ))}
      </div>

      {/* Software */}
      <p className="mt-8 pl-20 text-white text-2xl font-bold">Software</p>
      <div className="grid gap-y-4 p-8 text-white xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
        {cards.software.map((card) => (
          <div className="card glass m-auto hover:bg-slate-100 hover:text-black transition duration-500 ease-in-out cursor-not-allowed xs:w-full sm:w-52 md:w-52 lg:w-52 xl:w-52">
            <figure className="p-2 hover:bg-black transition duration-500 ease-in-out">
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-[200px] rounded-lg xs:object-contain sm:object-fill md:object-fill lg:object-fill xl:object-fill"
              />
            </figure>
            <div className="py-3 pl-10">
              <h2>{card.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
