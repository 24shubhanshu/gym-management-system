import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loginField, setLoginField] = useState({ username: "", password: "" });
  const HandleLogin = () => {
    sessionStorage.setItem("isLogin", "true");
    navigate("/dashboard");
  };

  const handleOnChange = (event, name) => {
    setLoginField({ ...loginField, [name]: event.target.value });
  };
  console.log(loginField);
  return (
    <div className="w-1/3 p-6 mt-15 ml-25 bg-gray-50/50 h-fit">
      <div className="font-sans text-center text-white text-3xl">Login</div>
      <input
        value={loginField.username}
        type="text"
        onChange={(event) => {
          handleOnChange(event, "username");
        }}
        className="w-full my-10 p-3 bg-white rounded-2xl"
        placeholder="Enter Username"
      />
      <input
        value={loginField.password}
        onChange={(event) => {
          handleOnChange(event, "password");
        }}
        type="password"
        className="w-full  p-3 bg-white rounded-2xl"
        placeholder="Enter Password"
      />
      <div
        onClick={() => {
          HandleLogin();
        }}
        className="w-[80%] bg-slate-800 mt-10 mx-auto p-1 border-2 font-semibold cursor-pointer text-white text-xl rounded-2xl text-center hover:bg-white hover:text-black"
      >
        Login
      </div>
    </div>
  );
};

export default Login;
