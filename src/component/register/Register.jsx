import React from "react";
import "./register.css";
import Modal from "../modal/modal";
import { useState } from "react";
import ForgotPassword from "../forgotPassword/ForgotPassword";

const Register = () => {
  const [forgotPassword, setForgotPassword] = useState(false);
  const [inputField, setInputField] = useState({
    email: "",
    username: "",
    password: "",
    name: "",
    profilePic:"https://tse3.mm.bing.net/th/id/OIP.4y5XWAGYJIjO51t4AErm6wHaER?pid=Api&P=0&h=180"
  });

  const handleClose = () => {
    setForgotPassword((prev) => !prev);
  };
  const handleOnChange = (event, name) => {
    setInputField({ ...inputField, [name]: event.target.value });
  };
  console.log(inputField);
  return (
    <div className=" register w-1/3 p-6 mt-15 ml-10 bg-gray-50/50 h-[400px] overflow-y-auto">
      <div className="font-sans text-center text-white text-3xl">
        Register Your Gym
      </div>
      <input
        type="text"
        value={inputField.email}
        onChange={(event) => {
          handleOnChange(event, "email");
        }}
        className="w-full my-5 p-3 bg-white rounded-2xl"
        placeholder="Enter Email"
      />
      <input
        type="text"
        value={inputField.name}
        onChange={(event) => {
          handleOnChange(event, "name");
        }}
        className="w-full mb-5 p-3 bg-white rounded-2xl"
        placeholder="Enter name"
      />
      <input
        type="text"
        value={inputField.username}
        onChange={(event) => {
          handleOnChange(event, "username");
        }}
        className="w-full mb-5 p-3 bg-white rounded-2xl"
        placeholder="Enter Username"
      />
      <input
        type="password"
        value={inputField.password}
        onChange={(event) => {
          handleOnChange(event, "password");
        }}
        className="w-full mb-5 p-3 bg-white rounded-2xl"
        placeholder="Enter Password"
      />
      <input type="file" className="w-full mb-5 bg-white p-3 rounded-2xl " />
      <img
        className="h-[200px] w-[300px] mb-5 "
        src={inputField.profilePic}
        alt=""
      />
      <div className="w-[80%] bg-slate-800 mb-3 mx-auto p-1 border-2 font-semibold cursor-pointer text-white text-xl rounded-2xl text-center hover:bg-white hover:text-black">
        Register
      </div>
      <div
        onClick={() => {
          handleClose();
        }}
        className="w-[80%] bg-slate-800 mb-5 mx-auto p-1 border-2 font-semibold cursor-pointer text-white text-xl rounded-2xl text-center hover:bg-white hover:text-black"
      >
        Forget Password
      </div>
      {forgotPassword && (
        <Modal
          header="Forgot Password"
          handleClose={handleClose}
          content={<ForgotPassword />}
        />
      )}
    </div>
  );
};

export default Register;
