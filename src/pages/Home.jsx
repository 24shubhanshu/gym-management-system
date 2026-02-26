import React from "react";
import Login from "../component/login/Login";
import Register from "../component/register/Register";

const Home = () => {
  return (
    <div className="h-[100vh] w-full">
      <div className="bg-slate-800 border-slate-800 border-2 font-semibold text-white text-xl p-5  ">
        Welcome to <span className="text-orange-500 uppercase font-bold">Coders Gym
          </span> 
      </div>

      <div className=" h-[100vh] w-full  flex justify-center bg-cover bg-[url(https://img.freepik.com/premium-photo/contemporary-spotless-fitness-gym-center-interiorgenerative-ai_391052-10889.jpg?w=2000)] ">
        <div className="w-full lg:flex  gap-30">
          <Login />

          <Register />
        </div>
      </div>
    </div>
  );
};

export default Home;
