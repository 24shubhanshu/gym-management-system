import React, { useState } from "react";

const Addmembership = () => {
  const [inputField, setInputField] = useState({months:"",price:""})
 const handleOnChange=(event,name)=>{
    setInputField({...inputField,[name]:event.target.value});
 }
  return (
    <div className="text-black">
      <div className="flex flex-wrap gap-5 items-center justify-center">
        <div className="text-lg bg-slate-900 text-white border-2 pl-1 pr-2 flex-col justify-between gap-3 pt-1 pb-1 font-semibold  rounded-xl hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div>1 Month Membership</div>
          <div>1000</div>
        </div>

        <div className="text-lg bg-slate-900 text-white border-2 pl-1 pr-2 flex-col justify-between gap-3 pt-1 pb-1 font-semibold  rounded-xl hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          <div>1 Month Membership</div>
          <div>1000</div>
        </div>
      </div>
      <hr className="mt-10 mb-10" />
      <div className="flex gap-10">
        <input
          className="border-2 rounded-lg text-lg w-1/3 h-1/2 p-2"
          type="number"
          value={inputField.months}
          onChange={(event)=>{handleOnChange(event,months)}}
          placeholder="add no. of month"
        />
        <input
          className="border-2 rounded-lg text-lg w-1/3 h-1/2 p-2"
          type="number"
          value={inputField.price}
          onChange={(event)=>{handleOnChange(event,price)}}
          placeholder="add price"
        />
        <button className="bg-black text-white px-4 py-2 rounded text-sm hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          Add +
        </button>
      </div>
    </div>
  );
};

export default Addmembership;
