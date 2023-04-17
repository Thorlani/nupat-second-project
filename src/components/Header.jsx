import React from "react";
import member from "../assets/member.svg";
import plus from "../assets/plus.svg";
import participant from "../assets/participant.svg";
import board from "../assets/board.svg";
import power from "../assets/power.svg";
import list from "../assets/list.svg";

const Header = () => {
  return (
    <div className="w-full h-fit px-[4%] pt-[3%] pb-[2%] bg-[#FFFFFF]">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-[2.28em] font-semibold text-[#000000]">
            New Campaign Run{" "}
          </h1>
          <p className="text-[0.875em] text-[#B8B9BD]">
            A new campaign launch work for brand new feature in May month
          </p>
        </div>
        <button className="bg-[#000000] px-[4%] py-[1%] text-[#ffffff] rounded-lg">
          ADD MEMBERS
        </button>
      </div>
      <div className="mt-[5%] flex justify-between items-center">
        <div className="flex items-center">
          <img src={member} alt="images of members" />
          <p className="text-[#B8B9BD] text-[0.875em] ml-2">8 members</p>
        </div>
        <ul className="w-[55%] flex justify-between items-center">
          <li className="flex items-center cursor-pointer">
            <img src={participant} alt="button logo" color="#B8B9BD" />
            <p className="text-[#7D8088] ml-2 text-[0.875em] font-medium">
              Participants View
            </p>
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={board} alt="button logo" color="#B8B9BD" />
            <p className="text-[#7D8088] ml-2 text-[0.875em] font-medium">
              Board View
            </p>
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={list} alt="button logo" color="#B8B9BD" />
            <p className="text-[#7D8088] ml-2 text-[0.875em] font-medium">
              List View
            </p>
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={power} alt="button logo" color="#B8B9BD" />
            <p className="text-[#7D8088] ml-2 text-[0.875em] font-medium">
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
