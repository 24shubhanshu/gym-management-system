import React, { useState, useEffect } from "react";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import CircleIcon from "@mui/icons-material/Circle";
import MemberCards from "../../component/membercards/MemberCards";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Addmembership from "../../component/addmembership/Addmembership";
import Modal from "../../component/modal/modal";
import AddMembers from "../../component/addmembers/AddMembers";

const Members = () => {
  const [addMembership, setAddMembership] = useState(false);
  const [addMembers, setAddMembers] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const [startFrom, setSTartFrom] = useState(0);
  const [endTo, setEndTo] = useState(9);
  const [totalData, setTotalData] = useState(0);
  const [limit, setLimit] = useState(9);

  const [noOfPage, setNoOfPage] = useState(0);

  useEffect(() => {
    fetchData(0, 9);
  }, []);

  const fetchData = async () => {
    let totalData = 52;
    setTotalData(totalData);

    let extrapage = totalData % limit === 0 ? 0 : 1;
    let totalpage = parseInt(totalData / limit) + extrapage;
    setNoOfPage(totalpage);

    if (totalData === 0) {
      setSTartFrom(-1);
      setEndTo(0);
    } else if (totalData < 10) {
      setSTartFrom(0);
      setEndTo(totalData);
    }
  };
  const handleClick = () => {
    setAddMembership((prev) => !prev);
  };

  const handleMembers = () => {
    setAddMembers((prev) => !prev);
  };
  const handleNext = () => {
  if (currentPage < noOfPage) {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);

    const from = (nextPage - 1) * limit;
    let to = nextPage * limit;
    if (to > totalData) to = totalData;

    setSTartFrom(from);
    setEndTo(to);
  }
};

const handlePrev = () => {
  if (currentPage > 1) {
    const prevPage = currentPage - 1;
    setCurrentPage(prevPage);

    const from = (prevPage - 1) * limit;
    const to = prevPage * limit;
    setSTartFrom(from);
    setEndTo(to);
  }
};


  // const handlePrev = () => {
  //   if (currentPage !== 1) {
  //     let currpage = currentPage - 1;
  //     setCurrentPage(currpage);
  //     var from = (currentPage - 1) * 0;
  //     var to = currentPage * 9;
  //     setSTartFrom(from);
  //     setEndTo(to);
  //   }
  // };

  // const handleNext=()=>
  // {   if (currentPage!=noOfPage)
  // {
  //    let currpage = currentPage + 1;
  //     setCurrentPage(currpage);
  //     var from = (currentPage - 1) * 0;
  //     var to = currentPage * 9;
  //     if (to>totalData)
  //     {
  //       to=totalData
  //     }
  //     setSTartFrom(from);
  //     setEndTo(to);


  // }

  // }

  return (
    <div className="text-black p-5 w-full h-[100vh]">
      <div className="border-2 bg-slate-900 flex justify-between w-full text-white rounded-lg p-3">
        <div
          onClick={handleMembers}
          className="border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black"
        >
          Add Member <FitnessCenterIcon />{" "}
        </div>
        <div
          onClick={handleClick}
          className="border-2 pl-3 pr-3 pt-1 pb-1 rounded-2xl cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black"
        >
          Membership <AddIcon />{" "}
        </div>
      </div>

      <Link to={"/dashboard"}>
        <ArrowBackIcon /> Back to Dashboard{" "}
      </Link>

      <div className="mt-5 w-1/2 flex gap-2">
        <input
          type="text"
          className="border-2 w-full p-2 rounded-lg"
          placeholder="Search By Name or Mobile No"
        />
        <div className="bg-slate-900 p-3 border-2 text-white rounded-lg cursor-pointer hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:text-black">
          <SearchIcon />
        </div>
      </div>
      <div className="mt-5 text-xl flex justify-between text-slate-900">
        <div>Total Members</div>
        {
          <div className="flex gap-5">
            <div>
              {startFrom + 1} to {endTo} of {totalData} Members
            </div>
            <div
              className={`w-8 h-8 cursor-pointer border-2 flex items-center justify-center hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${
                currentPage === 1 ? "bg-gray-200 text-gray-400" : null
              }`}
              onClick={() => {
                handlePrev();
              }}
            >
              <ChevronLeftIcon />
            </div>
            <div
              className={`w-8 h-8 cursor-pointer border-2 flex items-center justify-center hover:text-white hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ${
                currentPage === noOfPage ? "bg-gray-200 text-gray-400" : null
              }`}
              onClick={() => {
                handleNext();
              }}
            >
              <ChevronRightIcon />
            </div>
          </div>
        }
      </div>

      <div className="mt-3 p-3 rounded-lg grid grid-cols-3 bg-slate-100 overflow-x-auto h-[55%]">
        <MemberCards />
        <MemberCards />
        <MemberCards />
        <MemberCards />
        <MemberCards />
        <MemberCards />
        <MemberCards />
        <MemberCards />
        <MemberCards />
      </div>

      {addMembership && (
        <Modal
          header="Add Membership"
          handleClose={handleClick}
          content={<Addmembership />}
        />
      )}

      {addMembers && (
        <Modal
          header="Add Members"
          handleClose={handleMembers}
          content={<AddMembers />}
        />
      )}
    </div>
  );
};

export default Members;
