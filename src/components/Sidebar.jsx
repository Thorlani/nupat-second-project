import React from "react";
import btnLogo from "../assets/btn-logo.svg";
import btnPlus from "../assets/btn-plus.svg";
import dashboard from "../assets/dashboard.svg";
import activities from "../assets/activities.svg";
import users from "../assets/users.svg";
import affiliate from "../assets/affiliate.svg";
import settings from "../assets/settings.svg";
import power from "../assets/power.svg";
import participant from "../assets/participant.svg";
import addUser from "../assets/add-user.svg";

const Sidebar = ({ click, displayNav }) => {
  return (
    <div className="w-full h-[100vh] overflow-y-scroll bg-[#1D1042] px-[8%] py-[10%] flex flex-col justify-between items-start no-scrollbar">
      <div className="w-full flex flex-col items-start">
        <div className="w-full flex justify-end items-center mb-[8%]">
          <div className="mt-2 xl:hidden" onClick={click}>
            <div className="w-[29px] h-[3px] bg-[#ffffff] mb-1"></div>
            <div className="w-[25px] h-[3px] bg-[#ffffff] mb-1"></div>
            <div className="w-[20px] h-[3px] bg-[#ffffff] mb-1"></div>
          </div>
        </div>
        <div className="w-full flex justify-between items-start">
          <button className="flex items-center w-fit h-fit p-[14px] xl:px-[14%] xl:py-[5%] bg-[#45269C] rounded-lg mb-[10%]">
            <img src={btnLogo} alt="button logo" />
            <p className="text-[#ffffff] ml-2 text-[1em] font-normal">
              Welcome Keerthi
            </p>
          </button>
        </div>
        <ul className="w-full h-[500px] flex flex-col justify-around">
          <li className="flex items-center cursor-pointer">
            <img src={dashboard} alt="button logo" />
            <p className="text-[#ffffff] hover:text-[#000000] ml-2 text-[0.875em] font-normal">
              Dashboard
            </p>
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={settings} alt="button logo" />
            <p className="text-[#ffffff] hover:text-[#000000] ml-2 text-[0.875em] font-normal">
              Settings
            </p>
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={activities} alt="button logo" />
            <p className="text-[#ffffff] hover:text-[#000000] ml-2 text-[0.875em] font-normal">
              Activities
            </p>
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={users} alt="button logo" />
            <p className="text-[#ffffff] hover:text-[#000000] ml-2 text-[0.875em] font-normal">
              Users
            </p>
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={addUser} alt="button logo" />
            <p className="text-[#ffffff] hover:text-[#000000] ml-2 text-[0.875em] font-normal">
              Added user
            </p>
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={affiliate} alt="button logo" />
            <p className="text-[#ffffff] hover:text-[#000000] ml-2 text-[0.875em] font-normal">
              Affiliate
            </p>
          </li>
          <li>
            <div className="w-full h-[1px] bg-[#7D8088]"></div>
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={power} alt="button logo" />
            <p className="text-[#7D8088] hover:text-[#000000] ml-2 text-[0.875em] font-normal">
              Profile
            </p>
          </li>
          <li className="flex items-center cursor-pointer">
            <img src={participant} alt="button logo" />
            <p className="text-[#7D8088] hover:text-[#000000] ml-2 text-[0.875em] font-normal">
              Logout
            </p>
          </li>
        </ul>
      </div>
      <button className="flex items-center w-fit h-fit p-[14px] mt-[100px] xl:px-[14%] xl:py-[8%] bg-[#703EFE] rounded-lg">
        <img src={btnPlus} alt="button logo" />
        <p className="text-[#ffffff] ml-2 text-[1em] font-normal">
          NEW PROJECT
        </p>
      </button>
    </div>
  );
};

export default Sidebar;
