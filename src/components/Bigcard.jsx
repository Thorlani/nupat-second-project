import React from "react";
import progress from "../assets/progress.svg";
import link from "../assets/link.svg";
import convo from "../assets/convo.svg";
import member from "../assets/member.svg";

const Bigcard = ({ image, range }) => {
  const rangeLevel = () => {
    if (range === "empty") {
      return <div className="w-full h-2 rounded-3xl bg-[#EBEBEB] mt-2"></div>;
    } else if (range === "semifull") {
      return (
        <div className="w-full h-2 rounded-3xl bg-[#EBEBEB] mt-2">
          <div className="w-[55%] 2xl:w-[40%] h-full bg-[#FF5F37] rounded-l-3xl"></div>
        </div>
      );
    } else {
      return (
        <div className="w-full 2xl:w-[70%] h-2 rounded-3xl 2xl:rounded-none 2xl:rounded-l-3xl bg-[#8BC488] mt-2"></div>
      );
    }
  };
  return (
    <div
      id="shadow"
      className={`w-full h-fit flex flex-col bg-white p-[4.5%] rounded-xl ${
        range === "" ? "mt-[1em]" : "mt-[0em]"
      }`}
    >
      <img src={image} alt="a pink card" />
      <h4 className="mt-[1.250em] text-[#000000] font-semibold text-[1em]">
        Highfidelity Design
      </h4>
      <p className="text-[#B8B9BD] text-[0.875em]">
        Make clear design and color
      </p>
      <div className="flex justify-between items-center mt-3">
        <div className="flex justify-between items-center">
          <img src={progress} alt="progress logo" />
          <p className="ml-2 text-[#B8B9BD] text-[0.875em]">Progress</p>
        </div>
        <span className="text-[#000000] font-medium text-[0.875em]">2/10</span>
      </div>
      {rangeLevel()}
      <div className="flex justify-between items-center mt-2">
        <div className="flex">
          <div className="flex items-center">
            <img src={convo} alt="an icon of conversation" />
            <span className="text-xs text-[#B8B9BD] ml-1">7</span>
          </div>
          <div className="flex items-center ml-3">
            <img src={link} alt="an icon of conversation" />
            <span className="text-xs text-[#B8B9BD] ml-1">2</span>
          </div>
        </div>
        <img
          src={member}
          alt="an image of the members"
          className="object-contain h-6"
        />
      </div>
    </div>
  );
};

export default Bigcard;
