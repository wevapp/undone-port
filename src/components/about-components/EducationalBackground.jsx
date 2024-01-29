import React from "react";

const EducationalBackground = () => {
  const myEducations = [
    {
      level: "Primary",
      school: "San Juan Elementary School",
      course: "",
      address: "Brgy.San Juan, City of Malolos, Bulacan",
      year: "Sy: 1998 - 2004",
    },
    {
      level: "Secondary",
      school: "Marcelo H. Del Pilar National High School",
      course: "",
      address: "Brgy.Sta Isabel, City of Malolos, Bulacan",
      year: "Sy: 2008 - 2011",
    },
    {
      level: "Tertiary",
      school: "Bulacan State University",
      course: "Bachelor of Science in Information Technology",
      address: "Guinhawa, City of Malolos, Bulacan",
      year: "Sy: 2016 - 2020",
    },
  ];

  return (
    <div className="max-w-[1000px] px-6 py-1 m-auto grid gap-6">
      <span className="collapse-title text-white text-2xl font-bold">
        Educational Background
      </span>
      {myEducations.map((educ, index) => (
        <div
          key={index}
          className="collapse collapse-plus text-yellow-50 rounded-sm"
          style={{ boxShadow: "2px 2px 10px 4px rgba(251, 255, 188, 0.3)" }}
        >
          <input type="radio" name="my-accordion-3" checked="checked" />
          <div className="collapse-title text-2xl font-bold">{educ.level}</div>
          <div className="collapse-content text-white mt-3">
            <p className="text-[20px]">{educ.school}</p>
            <p className="text-[15px]">
              {educ.course.length > 0 ? educ.course : ""}
            </p>
            <p className="text-[14px]">{educ.address}</p>
            <small className="text-[12px]">{educ.year}</small>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationalBackground;
