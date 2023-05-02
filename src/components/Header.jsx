import React from "react";
import member from "../assets/member.svg";
import plus from "../assets/plus.svg";
import participant from "../assets/participant.svg";
import board from "../assets/board.svg";
import power from "../assets/power.svg";
import list from "../assets/list.svg";

const Header = ({isOpen}) => {
  return (
    <div className="w-full h-fit px-[4%] pt-[3%] pb-[2%] bg-[#FFFFFF]">
      <div className="xl:flex justify-between items-center">
        <div className="flex justify-between items-start xl:block">
          <div className="mb-[3%] xl:mb-0">
            <h1 className="text-[1.88em] sm:text-[2.28em] font-semibold text-[#000000]">
              New Campaign Run{" "}
            </h1>
            <p className="text-[0.675em] sm:text-[0.875em] text-[#B8B9BD] max-w-[200px] sm:min-w-[300px]">
              A new campaign launch work for brand new feature in May month
            </p>
          </div>
          <div className="mt-2 xl:hidden" onClick={isOpen}>
            <div className="w-[29px] h-[3px] bg-black mb-1"></div>
            <div className="w-[25px] h-[3px] bg-black mb-1"></div>
            <div className="w-[20px] h-[3px] bg-black mb-1"></div>
          </div>
        </div>
        <button className="bg-[#000000] px-[4%] py-[1%] text-[#ffffff] rounded-lg">
          ADD MEMBERS
        </button>
      </div>
      <div className="mt-[5%] flex flex-col lg:flex-row justify-between items-start lg:items-center">
        <div className="mb-5 lg:mb-0 flex items-center">
          <img src={member} alt="images of members" />
          <p className="text-[#B8B9BD] text-[0.675em] sm:text-[0.875em] ml-2">8 members</p>
        </div>
        <ul className="w-full lg:w-[55%] flex flex-row justify-between items-start sm:items-center">
          <li className="flex items-center cursor-pointer">
            <img src={participant} alt="button logo" color="#B8B9BD" />
            <p className="text-[#7D8088] ml-1 sm:ml-2 text-[0.575em] sm:text-[0.875em] font-medium">
              Participants View
            </p>
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={board} alt="button logo" color="#B8B9BD" />
            <p className="text-[#7D8088] ml-1 sm:ml-2 text-[0.575em] sm:text-[0.875em] font-medium">
              Board View
            </p>
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={list} alt="button logo" color="#B8B9BD" />
            <p className="text-[#7D8088] ml-1 sm:ml-2 text-[0.575em] sm:text-[0.875em] font-medium">
              List View
            </p>
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={power} alt="button logo" color="#B8B9BD" />
            <p className="text-[#7D8088] ml-1 sm:ml-2 text-[0.575em] sm:text-[0.875em] font-medium">
              Power View
            </p>
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={plus} alt="plus logo" color="#B8B9BD" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
