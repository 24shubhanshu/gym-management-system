import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ErrorIcon from "@mui/icons-material/Error";
import ReportIcon from "@mui/icons-material/Report";
import { useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [accordianDashboard, setAccordianDashboard] = useState(false);

  const handleOnClick = (value) => {
    sessionStorage.setItem("func", value);
  };
  return (
    <div className="w-full h-full text-black p-5 relative">
      <div className="w-full bg-slate-900 text-white rounded-lg flex  p-3 justify-between items-center">
        <MenuIcon
          sx={{ cursor: "pointer" }}
          onClick={() => {
            setAccordianDashboard((prev) => !prev);
          }}
        />

        <img
          className="w-8 h-8 rounded-3xl border-2"
          src="https://static.vecteezy.com/system/resources/previews/002/265/650/large_2x/unknown-person-user-icon-for-web-vector.jpg"
          alt="Image"
        />
      </div>

      {accordianDashboard && (
        <div className=" absolute p-3 bg-slate-900 text-white rounded-xl text-lg font-extralight">
          <div>Hi Welcome to our Gym Management System.</div>
          <p>Feel free to ask any querries</p>
        </div>
      )}

      <div className="mt-5 pt-3 bg-slate-100 bg-opacity-50 grid gap-5 grid-cols-3 w-full pb-5 overflow-x-auto h-[80%]">
        <Link
          to={"/specific/monthly"}
          onClick={() => {
            handleOnClick("Joined Members");
          }}
          className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <div className="py-4 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white ">
            <PeopleAltIcon sx={{ color: "purple", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">
              Joined Members
            </p>
          </div>
        </Link>

        <Link
          to={"/members"}
          onClick={() => {
            handleOnClick("Monthly Members");
          }}
          className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <div className="py-4 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white ">
            <SignalCellularAltIcon sx={{ color: "purple", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">
              Monthly Members
            </p>
          </div>
        </Link>

        <Link
          to={"/specific/Expiring within 3 days"}
          onClick={() => {
            handleOnClick("Expiring within 3 days");
          }}
          className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <div className="py-4 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white ">
            <AccessAlarmIcon sx={{ color: "purple", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">
              Expiring within 3 days
            </p>
          </div>
        </Link>

        <Link
          to={"/specific/Expiring within 4-7 days"}
          onClick={() => {
            handleOnClick(" Expiring within 4-7 days");
          }}
          className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <div className="py-4.5 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white ">
            <AccessAlarmIcon sx={{ color: "purple", fontSize: "50px" }} />
            <p className="text-l my-3 font-semibold font-mono">
              Expiring within 4-7 days
            </p>
          </div>
        </Link>

        <Link
          to={"/specific/Expired"}
          onClick={() => {
            handleOnClick(" Expired");
          }}
          className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <div className="py-4 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white ">
            <ReportIcon sx={{ color: "purple", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">Expired</p>
          </div>
        </Link>

        <Link
          to={"/specific/Inactive Members"}
          onClick={() => {
            handleOnClick("Inactive Members");
          }}
          className="w-full h-fit border-2 bg-white rounded-lg cursor-pointer"
        >
          <div className="h-3 rounded-t-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>

          <div className="py-4 px-5 flex-col justify-center items-center w-full text-center rounded-b-lg hover:bg-slate-900 hover:text-white ">
            <ReportIcon sx={{ color: "red", fontSize: "50px" }} />
            <p className="text-xl my-3 font-semibold font-mono">
              Inactive Members
            </p>
          </div>
        </Link>

        <div className="md:bottom-4 p-2 w-3/4 mb-4 md:mb-0 absolute bg-black text-white mt-20 rounded-xl text-xl">
          Contact Developer for any Technical Error at +919870860288
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
