import React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import { Link } from "react-router-dom";
import MemberDetails from "../../pages/memberdetails/MemberDetails";
const MemberCards = () => {
  return (
    <Link
      to={'/member/123'}
      className="p-2 rounded-lg bg-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <div className="h-[80px] w-[80px] mt-2  rounded-full mx-auto relative ">
        <img
          className="h-full w-full rounded-full"
          src="https://tse1.mm.bing.net/th/id/OIP._fBEr5ZduN-2qtE3oJXF4AHaE8?pid=Api&P=0&h=180"
          alt=""
        />
        <CircleIcon className="text-green-300 absolute top-0 left-0" />
      </div>

      <div className="mt-4 text-center text-xl font-semibold">
        Shubham Kumar
      </div>
      <div className="mt-2 text-center text-xl ">91-9684752748</div>
      <div className="mt-2 text-center text-xl font-semibold">
        Next bill date: 20-03-2026
      </div>
    </Link>
  );
};

export default MemberCards;
