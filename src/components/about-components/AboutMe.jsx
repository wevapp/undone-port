import React from "react";

const AboutMe = () => {
  return (
    <div className="w-[700px] text-teal-300">
      <h1 className="text-3xl">about</h1>
      <ul className="border">
        <li className="border px-8 py-4">
          <i className="fa-sharp fa-light fa-input-numeric mr-2"></i>
          Age: <span className="text-white">00</span>
        </li>
        <li className="border px-8 py-4">
          <i className="fa-sharp fa-light fa-cake-candles mr-2"></i>
          Birthday: <span className="text-white">Bday</span>
        </li>
        <li className="border px-8 py-4">
          <i className="fa-sharp fa-light fa-cross mr-2"></i>
          Religion: <span className="text-white">Born Again Christian</span>
        </li>
        <li className="border px-8 py-4">
          <i className="fa-sharp fa-light fa-person mr-2"></i>
          Citizenship: <span className="text-white">Filipino</span>
        </li>
        <li className="border px-8 py-4">
          <i className="fa-sharp fa-light fa-id-card mr-2"></i>
          Civil status: <span className="text-white">Married</span>
        </li>
      </ul>
    </div>
  );
};

export default AboutMe;
