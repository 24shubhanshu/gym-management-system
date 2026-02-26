import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Modal = ({handleClose, content,header}) => {
  return (
    <div className="w-full h-[100vh] fixed left-0 top-0 text-black bg-black/50 flex justify-center ">
      <div className="w-1/2 bg-white rounded-lg h-fit mt-20 p-5">
        <div className="flex justify-between  ">
          <div className="text-4xl font-semibold">{header}</div>
          <div onClick={()=>handleClose()}>
            <  CloseIcon sx={{ fontSize: "40px" }} />
          </div>
        </div>
        <div className="mt-10">
            {content}
        </div>
      </div>
    </div>
  );
};

export default Modal;
