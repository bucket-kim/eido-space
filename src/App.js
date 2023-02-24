import "./App.css";
import Overlay from "./Overlay";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="overflow-y-hidden h-screen">
      <Overlay
        handleClick={() => {
          setIsClicked(!isClicked);
        }}
        isClicked={isClicked}
      />

      <motion.button
        className=" bg-slate-50 w-full text-center bottom-0 h-10 "
        initial={{
          y: 40,
        }}
        animate={{
          y: isClicked ? -40 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        Connect to Wallet
      </motion.button>
    </div>
  );
}

export default App;
