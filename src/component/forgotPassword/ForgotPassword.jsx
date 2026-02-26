import React from "react";
import { useState } from "react";
const ForgotPassword = () => {
  const [emailSubmit, setEmailSubmit] = useState(false);
  const [otpSubmit, setOtpSubmit] = useState(false);
  const [contentValue, setContentValue] = useState("Submit Email")
  const [inputField, setInputField] = useState({NewPassword:"",otp:"",email:""})

  const handleSubmit = () => {
    if (!emailSubmit) {
      setEmailSubmit(true);
      setContentValue("Submit OTP")
    }
    else if (emailSubmit && !otpSubmit)
    {
         setOtpSubmit(true)
         setContentValue("Submit New Password")
    }
  };

  const handleChange=(event,name)=>{
    setInputField({...inputField,[name]:event.target.value})
  }
  console.log(inputField);

  return (
    <div className="w-full">
      <div className="w-full">
        <div>Enter your email</div>
        <input
          type="text"
          value={inputField.email}
          onChange={(event)=>{handleChange(event,"email")}}
          className="w-1/2 my-1 p-3 bg-white rounded-2xl border-2 border-slate-400 "
          placeholder="Enter Email"
        />
      </div>
      {emailSubmit && (
        <div className="w-full">
          <div>Enter your OTP</div>
          <input
            type="text"
             value={inputField.otp}
             onChange={(event)=>{handleChange(event,"otp")}}
            className="w-1/2 my-1 p-3 bg-white rounded-2xl border-2 border-slate-400 "
            placeholder="Enter OTP"
          />
        </div>
      )}

              {otpSubmit && (
        <div className="w-full">
          <div>Enter New Password</div>
          <input
            type="password"
             value={inputField.NewPassword}
             onChange={(event)=>{handleChange(event,"NewPassword")}}
            className="w-1/2 my-1 p-3 bg-white rounded-2xl border-2 border-slate-400 "
            placeholder="Enter New Password"
          />
        </div>
      )}


      <div
        onClick={() => handleSubmit()}
        className="bg-slate-800 text-white mx-auto  w-3/4 m-4 p-2 rounded-xl cursor-pointer text-center hover:bg-white hover:text-black border-2"
      >
        {contentValue}
      </div>
    </div>
  );
};

export default ForgotPassword;
