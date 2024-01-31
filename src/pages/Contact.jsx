import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [userMessage, setUserMessage] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    alert("Send message successfully!");
    setUserMessage({
      fullname: "",
      email: "",
      message: "",
    });
    console.log(userMessage);
  };

  return (
    <div className="flex flex-wrap m-5 xs:justify-center sm:justify-center md:justify-center lg:justify-between xl:justify-between">
      <div className="px-3 xs:min-w-full sm:min-w-full md:min-w-full lg:min-w-[40%] xl:min-w-[40%]">
        <div className="border grid gap-y-5 p-8 font-semibold">
          <div className="gap-2 flex justify-center items-center">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Icons/fb.png" alt="fb" className="w-[40px]" />
            </a>
            <a
              href="https://www.gmail.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/Icons/gmail.png" alt="fb" className="w-[40px]" />
            </a>
          </div>
          <div className="border flex flex-col justify-between items-start px-8 py-1">
            <label className="text-white">Fullname</label>
            <input
              type="text"
              value={userMessage.fullname}
              placeholder="Enter your name"
              className="input input-md input-accent w-full max-w-xl rounded-none"
              onChange={(e) =>
                setUserMessage({ ...userMessage, fullname: e.target.value })
              }
            />
          </div>
          <div className="border flex flex-col justify-between items-start px-8 py-1">
            <label className="text-white">Email</label>
            <input
              type="text"
              value={userMessage.email}
              placeholder="example@sample.com"
              className="input input-md input-accent w-full max-w-xl rounded-none"
              onChange={(e) =>
                setUserMessage({ ...userMessage, email: e.target.value })
              }
            />
          </div>
          <div className="border flex flex-col justify-between items-start px-8 py-1">
            <label className="text-white">Message</label>
            <textarea
              value={userMessage.message}
              onChange={(e) =>
                setUserMessage({ ...userMessage, message: e.target.value })
              }
              className="textarea textarea-accent rounded-none w-full max-w-xl"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex flex-col justify-between items-start">
            <button
              onClick={handleSendMessage}
              className="m-auto font-semibold bg-green-600 px-10 py-2 rounded-none text-white hover:bg-green-500 w-48"
            >
              Send
            </button>
          </div>
          <div className="border flex justify-center items-center"></div>
        </div>
      </div>
      {/* divide */}
      <div className="px-3 xs:min-w-full sm:min-w-full md:min-w-full lg:min-w-[60%] xl:min-w-[60%]">
        <div className="hero min-h-full xs:mt-3 sm:mt-3 md:mt-3 lg:mt-0 xl:mt-0">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Get in touch</h1>
              <p className="mb-8">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <Link
                to=""
                className="border font-semibold bg-[#C5FFF8] text-black px-4 py-2 rounded hover:bg-green-500 hover:text-white transition duration-700 ease-in-out"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
