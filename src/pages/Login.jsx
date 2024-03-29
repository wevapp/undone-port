import React, { useState } from "react";
import useImageStore from "../store/useStore";

const Login = () => {
  const [isClick, setIsClick] = useState(true)

  const loginImg = useImageStore((state) => state.login.img)

  // user object
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className="h-full text-white flex justify-center items-center">
      <div className="h-full mt-5 w-[70%] flex flex-wrap m-5 xs:justify-center sm:justify-center md:justify-center lg:justify-between xl:justify-between">
        <div className="border-l-2 px-3 xs:min-w-full sm:min-w-full md:min-w-full lg:min-w-[45%] xl:min-w-[45%]">
          <h1 className="text-center text-2xl py-2 font-bold">
            Login your account
          </h1>
          <div className="flex flex-col justify-between items-start px-8 py-1 my-5">
            <label className="text-white">Email</label>
            <input
              type="text"
              value={user.email}
              placeholder="example@sample.com"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="bg-transparent w-full max-w-xl my-1 px-4 py-2 border-b-2"
              style={{
                WebkitMaskImage:
                  "-webkit-linear-gradient(left, #ffffff, #ff0000)",
                borderImage: "linear-gradient(to right, #ffffff, #ff0000) 1",
                borderImageSlice: "1",
              }}
            />
          </div>
          <div className="flex flex-col justify-between items-start px-8 py-1 relative">
            <label className="text-white">Password</label>
            <input
              type={isClick ? "password" : "text"} // Toggle password visibility
              value={user.password}
              placeholder="******"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="bg-transparent w-full max-w-xl my-1 px-4 py-2 border-b-2"
              style={{
                WebkitMaskImage:
                  "-webkit-linear-gradient(left, #ffffff, #ff0000)",
                borderImage: "linear-gradient(to right, #ffffff, #ff0000) 1",
                borderImageSlice: "1",
              }}
            />
            <i
              className={`fa-light ${
                isClick ? "fa-eye-slash" : "fa-eye"
              } absolute top-[55%] right-10`}
              onClick={() => setIsClick(!isClick)}
            ></i>
          </div>
          <div className="relative flex flex-col justify-between items-start">
            <button
              onClick={handleLogin}
              className="m-auto bg-white font-semibold px-10 py-2 rounded-none text-black w-48 my-2"
            >
              Login
            </button>
          </div>
        </div>

        {/* SGV design */}
        <div
          className="xs:min-w-full sm:min-w-full md:min-w-full lg:min-w-[55%] xl:min-w-[55%] xs:h-[150px] sm:h-[250px] md:h-[300px] lg:h-[300px] relative"
          style={{
            backgroundImage: `url(${loginImg})`,
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "white", stopOpacity: 0.8 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "white", stopOpacity: 0.5 }}
              />
            </linearGradient>

            <path
              fill="url(#grad1)"
              d="M0,288L15,250.7C30,213,60,139,90,117.3C120,96,150,128,180,149.3C210,171,240,181,270,160C300,139,330,85,360,85.3C390,85,420,139,450,186.7C480,235,510,277,540,282.7C570,288,600,256,630,202.7C660,149,690,75,720,64C750,53,780,107,810,144C840,181,870,203,900,202.7C930,203,960,181,990,165.3C1020,149,1050,139,1080,138.7C1110,139,1140,149,1170,154.7C1200,160,1230,160,1260,144C1290,128,1320,96,1350,90.7C1380,85,1410,107,1425,117.3L1440,128L1440,0L1425,0C1410,0,1380,0,1350,0C1320,0,1290,0,1260,0C1230,0,1200,0,1170,0C1140,0,1110,0,1080,0C1050,0,1020,0,990,0C960,0,930,0,900,0C870,0,840,0,810,0C780,0,750,0,720,0C690,0,660,0,630,0C600,0,570,0,540,0C510,0,480,0,450,0C420,0,390,0,360,0C330,0,300,0,270,0C240,0,210,0,180,0C150,0,120,0,90,0C60,0,30,0,15,0L0,0Z"
            ></path>
          </svg>

          <div className="p-5 text-center">
            {/* <div className="min-h-[130px] min-w-[130px] bg-white rounded-full absolute left-2 -z-10 opacity-20 xs:top-0 sm:top-16 md:top-16 lg:top-18 xl:top-18"></div> */}
            <span className="font-semibold z-10 xs:text-sm sm:text-2xl md:text-3xl lg:text-3xl xl:text-3xl text-slate-500 flex justify-start pl-4">
              Hello Welcome back
            </span>
            {/* <div className="min-h-[300px] min-w-[300px] bg-white rounded-full absolute -bottom-20 -right-20 -z-10 opacity-10"></div> */}
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-0"
          >
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: "white", stopOpacity: 0.8 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "white", stopOpacity: 0.5 }}
              />
            </linearGradient>
            <path
              fill="url(#grad1)"
              d="M0,288L15,256C30,224,60,160,90,144C120,128,150,160,180,186.7C210,213,240,235,270,240C300,245,330,235,360,202.7C390,171,420,117,450,90.7C480,64,510,64,540,69.3C570,75,600,85,630,106.7C660,128,690,160,720,154.7C750,149,780,107,810,80C840,53,870,43,900,74.7C930,107,960,181,990,181.3C1020,181,1050,107,1080,69.3C1110,32,1140,32,1170,37.3C1200,43,1230,53,1260,58.7C1290,64,1320,64,1350,80C1380,96,1410,128,1425,144L1440,160L1440,320L1425,320C1410,320,1380,320,1350,320C1320,320,1290,320,1260,320C1230,320,1200,320,1170,320C1140,320,1110,320,1080,320C1050,320,1020,320,990,320C960,320,930,320,900,320C870,320,840,320,810,320C780,320,750,320,720,320C690,320,660,320,630,320C600,320,570,320,540,320C510,320,480,320,450,320C420,320,390,320,360,320C330,320,300,320,270,320C240,320,210,320,180,320C150,320,120,320,90,320C60,320,30,320,15,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Login;
