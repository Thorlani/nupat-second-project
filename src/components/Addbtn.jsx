import React from "react";
import plus from "../assets/plus.svg";

const Addbtn = () => {
  return (
    <button
      className="w-full h-fit flex justify-center items-center bg-[#F2F4F5] py-3 mt-[1em] rounded-xl border-dashed border-[
#D5D5D5] border-[1.5px]"
    >
      <img src={plus} alt="a plus icon" />
      <p className="text-[#7D8088] text-[1em] ml-2">Add Task</p>
    </button>
  );
};

export default Addbtn;
