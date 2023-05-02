import React from "react";
import Header from "./Header";
import pinkCard from "../assets/pink-card.svg";
import creamCard from "../assets/cream-card.svg";
import greenCard from "../assets/green-card.svg";
import Bigcard from "./Bigcard";
import Smallcard from "./Smallcard";
import Addbtn from "./Addbtn";
import Task from "./Task";

const MainScreen = ({click}) => {
  return (
    <div className="w-full min-h-[100vh] bg-[#FCFBFC]">
      <Header isOpen={click} />
      <div className="px-[4%] py-[8%]">
        <div className="w-full flex flex-col sm:flex-row justify-between items-center">
          <Task title={"To Do"} qty={"3"} />
          <Task title={"Inprogress"} qty={"1"} />
          <Task title={"Completed"} qty={"2"} />
        </div>
        <div className="mt-[4%] flex flex-col sm:flex-row justify-between items-start">
          <div className="w-full sm:w-[31%] h-fit">
            <Bigcard image={pinkCard} range={"empty"} />
            <Smallcard range={"empty"} />
            <Addbtn />
          </div>
          <div className="w-full sm:w-[31%] h-fit">
            <Bigcard image={creamCard} range={"semifull"} />
            <Addbtn />
          </div>
          <div className="w-full sm:w-[31%] h-fit">
            <Smallcard range={""} />
            <Bigcard image={greenCard} range={""} />
            <Addbtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
