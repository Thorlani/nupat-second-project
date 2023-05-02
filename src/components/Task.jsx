import React from "react";

const Task = ({title, qty}) => {
  return (
    <div className="w-full mb-3 sm:mb-0 sm:w-[31%] h-fit flex items-center justify-between bg-[#F4F6F8] p-[1%] rounded-lg">
      <p className="text-[#858A93] text-[0.675em] sm:text-[1em] font-medium">{title}</p>
      <span className="text-[#ffffff] text-[0.675em] sm:text-[1em] font-medium bg-[#000000] px-[5%] py-[2%] rounded">
        {qty}
      </span>
    </div>
  );
};

export default Task;
