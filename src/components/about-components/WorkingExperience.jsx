import React from "react";

const WorkingExperience = () => {
  const myWorkExp = [
    {
      company: "Primewater Infrastructure Corp.",
      position: "Internship for Computer Hardware and Software ",
      address: "Brgy.Sumapang Matanda, City of Malolos",
      date: "January 2020 – March 2020",
    },
    {
      company: "Trendzoid X Fiber Solutions",
      position: "Assistant Computer Technician",
      address: "Brgy. Catmon, City of Malolos, Bulacan",
      date: "April 2021 – December 2022",
    },
  ];
  return (
    <div className="max-w-[1000px] px-6 py-1 m-auto grid gap-6">
      <span className="collapse-title text-white text-2xl font-bold">
        Working Experience
      </span>
      {myWorkExp.map((work, index) => (
        <div
          key={index}
          className="collapse collapse-plus text-yellow-50 rounded-sm"
          style={{ boxShadow: "2px 2px 10px 4px rgba(251, 255, 188, 0.3)" }}
        >
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-2xl font-bold">
            {work.company}
          </div>
          <div className="collapse-content text-white mt-3">
            <p className="text-[20px]">{work.position}</p>
            <p className="text-[14px]">{work.address}</p>
            <small className="text-[12px]">{work.date}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkingExperience;
