import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  const handleDownload = () => {
    // Replace 'resume.pdf' with the actual URL of your resume file
    const resumeUrl =
      "https://drive.usercontent.google.com/download?id=1VyV5-Kp8Z9B3A9l4fAo8XZXCOs1rdpmJ&export=download&authuser=0&confirm=t&uuid=eaa2e04f-6e37-4b1d-88b5-bd9331c48237&at=APZUnTU2rxoFFQg2g0nYXH_045kb:1708584772011";

    // Create an anchor element
    const anchor = document.createElement("a");
    anchor.href = resumeUrl;
    anchor.download = "Resume.docx"; // Specify the desired file name

    // Programmatically click the anchor to trigger the download
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  return (
    <div className="text-white sm:overflow-visible md:overflow-visible lg:overflow-visible xl:overflow-visible ">
      <div className="justify-around xs:flex-cols sm:flex md:flex lg:flex xl:flex xs:h-[400px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[400px]">
        <aside className="mt-10 pt-10 flex flex-col gap-y-4 justify-center items-center p-8">
          <h1 className="text-4xl text-center font-semibold"></h1>
          <small className="font-semibold text-center xs: sm:w-[330px] md:w-[350px] lg:w-[480px] xl:w-[480px]">
            <p className="xs:text-md sm:text-xl md:text-xl lg:text-3xl xl:text-3xl">
              <Typewriter
                words={[
                  "I am Raymond Estrella",
                  "I want to be a Frontend Developer",
                ]}
                loop={false}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </p>
            <i>Someday to be a Full Stack Developer</i>
          </small>
          <button
            className="border font-semibold bg-[#C5FFF8] text-black px-4 py-2 hover:bg-white transition duration-700 ease-in-out"
            onClick={handleDownload}
          >
            Download CV
          </button>
          <span></span>
        </aside>
        <div className="flex justify-center items-center  xs:mt-0 sm:mx-2 sm:mt-36 md:mt-44 lg:mt-56 xl:mt-72">
          <img
            src="src/images/Home/me.png"
            // width={280}
            alt="Me"
            className="mt-5 xs:w-[160px] sm:w-[300px] md:w-[280px] lg:w-[310px] xl:w-[340px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
