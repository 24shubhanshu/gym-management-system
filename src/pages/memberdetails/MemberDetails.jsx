import React, { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate, useNavigation } from "react-router-dom";
import Switch from "react-switch";

const MemberDetails = () => {
  const [status, setStatus] = useState("pending");
  const [renew, setRenew] = useState(false);
  const navigate = useNavigate();

  const handleToggle = () => {
    let statuss = status === "active" ? "pending" : "active";
    setStatus(statuss);
  };

  return (
    <div className="w-full h-full text-black p-5">
      <div
        onClick={() => {
          navigate(-1);
        }}
        className="border-2 w-fit text-xl font-sans text-white p-2 rounded-xl bg-slate-900 cursor-pointer"
      >
        <ArrowBackIcon /> Go Back
      </div>

      <div className="mt-1 p-2">
        <div className="w-[100%] h-fit flex">
          <div className="w-1/3 mx-auto">
            <img
              src="https://pngimg.com/uploads/fitness/fitness_PNG109.png"
              alt="photo"
            />
          </div>
          <div className=" mt-1 text-xl p-3 w-2/3">
            <div className="mt-1 mb-2 font-semibold">Name:Rohit Sharma</div>
            <div className="mt-1 mb-2 font-semibold">mobile:463754658</div>
            <div className="mt-1 mb-2 font-semibold">
              Adress:Uttarakhand,India
            </div>
            <div className="mt-1 mb-2 font-semibold">joined:12:08:2025</div>
            <div className="mt-1 mb-2 font-semibold">Name:Rohit Sharma</div>
            <div className="mt-1 mb-2 font-semibold flex gap-4">
              Status:{" "}
              <Switch
                onColor="#6366F1"
                checked={status === "active"}
                onChange={() => {
                  handleToggle();
                }}
              />
            </div>

            <div
              onClick={() => {
                setRenew((prev) => !prev);
              }}
              className={` p-1 rounded-lg font-bold text-center border-2 border-slate-900 w-full md:w-1/2 cursor-pointer ${
                renew && status === "active"
                  ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                  : null
              }  hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
            >
              Renew
            </div>
            {renew && status === "active" ? (
              <div className="rounded-lg  p-1 mx-auto mb-3 h-fit bg-slate-50 w-[100%]">
                <div className="w-full">
                  <div>
                    <div>membership</div>

                    <select className="w-full border-2 mt-2 p-2 rounded-lg">
                      <option>1 month plan</option>
                      <option>2 month plan</option>
                    </select>

                    <div
                      className={`mt-2 mx-auto p-2 rounded-lg font-bold text-center border-2 border-slate-900 w-full md:w-1/2 cursor-pointer   hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500`}
                    >
                      Save
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetails;
