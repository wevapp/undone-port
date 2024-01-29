import React from "react";

const Home = () => {
  return (
    <div className="text-white border">
      <div className="justify-around xs:flex-cols sm:flex md:flex lg:flex xl:flex xs:h-[400px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[400px]">
        <aside className="border mt-10 pt-10 flex flex-col gap-y-4 justify-center items-center p-8">
          <h1 className="text-4xl text-center font-semibold">
            Welcome to my website
          </h1>
          <small className="font-semibold">
            <i>I want to be a web developer in my career path.</i>
          </small>
          <button className="border font-semibold bg-[#C5FFF8] text-black px-4 py-2 rounded hover:bg-green-500 hover:text-white transition duration-700 ease-in-out">
            Download CV
          </button>
          <span></span>
        </aside>
        <div className="flex justify-center items-center  xs:mt-0 sm:mx-2 sm:mt-36 md:mt-44 lg:mt-56 xl:mt-72">
          <img
            src="/Home/me.png"
            // width={280}
            alt="Me"
            className="xs:w-[150px] sm:w-[360px] md:w-[280px] lg:w-[310px] xl:w-[340px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
