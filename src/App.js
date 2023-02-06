import "./App.css";
import Clock from "react-live-clock";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons";
import Logo from "./components/Logo";
import Scene from "./components/Scene";

function App() {
  return (
    <>
      <div className="absolute w-full flex justify-between px-4 pt-1 items-center text-white">
        <Logo />
        <div className="flex justify-between w-3/4 mt-3 items-center">
          <Clock format={"hh:mm:ssa"} ticking={true} timezone={"US/Eastern"} />
          <h1>NFT Piece Title</h1>

          <button className="flex items-center text-gray-400 ">
            <FontAwesomeIcon
              icon={faLeftLong}
              className="text-xs mr-1 text-center pb-1"
            />
            BACK
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 w-full flex justify-between items-center px-4 pb-1 text-white">
        <div className="flex sm:pl-2 mt-8">
          <div className="border-2 border-white h-4 w-4 rounded-full"></div>
          <div className="border-2 border-white h-4 w-4 rounded-full translate-x-1"></div>
          <div className="border-2 border-white h-4 w-4 rounded-full translate-x-2"></div>
          <div className="border-2 border-white h-4 w-4 rounded-full translate-x-3"></div>
        </div>
        <div className="pb-2 sm:flex flex-col pb-3.5">
          <button className="border-2  py-4 w-44 mr-4 sm:w-32 text-sm py-3 mr-0 mb-1">
            SOLD OUT
          </button>
          <button className="border-2 py-4 w-44 sm:w-32 text-sm py-3 ">
            BUY ON STOCK
          </button>
        </div>
      </div>
      <Scene />
    </>
  );
}

export default App;
