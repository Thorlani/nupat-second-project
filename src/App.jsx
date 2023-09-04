import "./App.css";
import MainScreen from "./components/MainScreen";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [openNav, setOpenNav] = useState(false);

  const openSidebar = () => {
    setOpenNav(!openNav);
  };
  return (
    <div className="w-full h-full flex">
      <div className={`${openNav ? "w-full" : "hidden xl:block w-[20%]"}`}>
        <Sidebar click={openSidebar} displayNav={openNav} />
      </div>
      <div
        className={`${
          openNav ? "hidden" : "w-full xl:w-[80%] h-[100vh] overflow-y-scroll"
        }`}
      >
        <MainScreen click={openSidebar} />
      </div>
    </div>
  );
}

export default App;
