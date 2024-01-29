import React from "react";

const AboutMe = () => {
  return (
    <div className="max-w-[700px] px-6 m-auto text-white">
      <h1 className="text-3xl px-8 my-8 font-bold">About</h1>
      <ul className="grid gap-y-2">
        <li className="flex justify-between items-center border px-8 py-4 hover:bg-gray-400">
          <div className="w-full">
            <i className="fa-light fa-user mr-2"></i>
            Name:
          </div>
          <span className="text-yellow-50 w-full">Raymond M. Estrella</span>
        </li>
        <li className="flex justify-between items-center border px-8 py-4 hover:bg-gray-400">
          <div className="w-full">
            <i className="fa-sharp fa-light fa-input-numeric mr-2"></i>
            Age:
          </div>
          <span className="text-yellow-50 w-full">00</span>
        </li>
        <li className="flex justify-between items-center border px-8 py-4 hover:bg-gray-400">
          <div className="w-full">
            <i className="fa-sharp fa-light fa-cake-candles mr-2"></i>
            Birthday:
          </div>
          <span className="text-yellow-50 w-full">Bday</span>
        </li>
        <li className="flex justify-between items-center border px-8 py-4 hover:bg-gray-400">
          <div className="w-full">
            <i className="fa-sharp fa-light fa-cross mr-2"></i>
            Religion:
          </div>
          <span className="text-yellow-50 w-full">Born Again Christian</span>
        </li>
        <li className="flex justify-between items-center border px-8 py-4 hover:bg-gray-400">
          <div className="w-full">
            <i className="fa-sharp fa-light fa-person mr-2"></i>
            Citizenship:
          </div>
          <span className="text-yellow-50 w-full">Filipino</span>
        </li>
        <li className="flex justify-between items-center border px-8 py-4 hover:bg-gray-400">
          <div className="w-full">
            <i className="fa-sharp fa-light fa-id-card mr-2"></i>
            Civil status:
          </div>
          <span className="text-yellow-50 w-full">Married</span>
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
