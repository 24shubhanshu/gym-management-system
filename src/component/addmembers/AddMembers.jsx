import React from "react";
import { useState } from "react";

const AddMembers = () => {
  const [inputField, setInputField] = useState({name:"",number:"",address:"",date:"",membership:"",ProfilePic:"https://i.pinimg.com/originals/83/bc/8b/83bc8b88cf6bc4b4e04d153a418cde62.jpg"});

  const handleOnChange=(event,name)=>
  {
setInputField({...inputField,[name]:event.target.value})
  }
  
  return (
    <div className="text-black">
      <div className="grid gap-5 grid-cols-2 text-lg">
        <input
          placeholder="Name of the Joinee"
          type="text"
           value={inputField.name}
           onChange={(event)=>{handleOnChange(event,name)}}
          className="border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12"
        />
        <input
          placeholder="Mobile Number"
          type="text"
           value={inputField.number}
           onChange={(event)=>{handleOnChange(event,number)}}
          className="border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12"
        />
        <input
          placeholder="Adress"
          type="text"
           value={inputField.address}
           onChange={(event)=>{handleOnChange(event,address)}}
          className="border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12"
        />
        <input
          type="date"
           value={inputField.date}
           onChange={(event)=>{handleOnChange(event,date)}}
          className="border-2 w-[90%] pl-3 pr-3 pt-2 pb-2 border-slate-400 rounded-md h-12"
        />
        <select className="border-2 w-[90%] h-12 pt-2 pb-2 border-slate-400 rounded-md placeholder:text-gray">
          <option>1Month membership</option>
          <option>2Month membership</option>
        </select>

        <input type="file" />

        <div className="w-1/4">
          <img
            className="w-full h-full rounded-full"
            src={inputField.ProfilePic}
            alt=""
          />
        </div>

        <button className="bg-black w-28 h-14 cursor-pointer text-white px-4 py-2 rounded text-sm hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Register
        </button>
      </div>
    </div>
  );
};

export default AddMembers;
