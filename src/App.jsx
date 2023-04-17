import "./App.css";
import MainScreen from "./components/MainScreen";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="w-full h-full flex">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="w-[80%] h-full">
        <MainScreen />
      </div>
    </div>
  )
}

export default App;
