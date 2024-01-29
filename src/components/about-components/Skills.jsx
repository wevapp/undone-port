import React from "react";

const Skills = () => {
  const cards = [
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
      img: "Icons/tailwind.PNG",
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
      img: "Icons/mongo.PNG",
      title: "MongoDB",
    },
  ];
  return (
    <div className="grid gap-3 grid-cols-4 p-8 border text-white">
      {cards.map((card) => (
        <div className="card w-52 glass m-auto">
          <figure className="border">
            <img src={card.img} alt="html" className="w-full h-[200px]" />
          </figure>
          <div className="card-body">
            <h2>{card.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
