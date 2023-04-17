import React from "react";
import Header from "./Header";
import pinkCard from "../assets/pink-card.svg";
import creamCard from "../assets/cream-card.svg";
import greenCard from "../assets/green-card.svg";
import Bigcard from "./Bigcard";
import Smallcard from "./Smallcard";
import Addbtn from "./Addbtn";
import Task from "./Task";

const MainScreen = () => {
  return (
    <div className="w-full min-h-[100vh] bg-[#FCFBFC]">
      <Header />
      <div className="px-[4%] py-[8%]">
        <div className="w-full flex justify-between items-center">
          <Task title={"To Do"} qty={"3"} />
          <Task title={"Inprogress"} qty={"1"} />
          <Task title={"Completed"} qty={"2"} />
        </div>
        <div className="mt-[4%] flex  justify-between items-start">
          <div className="w-[31%] h-fit">
            <Bigcard image={pinkCard} range={"empty"} />
            <Smallcard range={"empty"} />
            <Addbtn />
          </div>
          <div className="w-[31%] h-fit">
            <Bigcard image={creamCard} range={"semifull"} />
            <Addbtn />
          </div>
          <div className="w-[31%] h-fit">
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
