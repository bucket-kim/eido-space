import "./App.css";
import Overlay from "./Overlay";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <motion.div>
      <Overlay
        handleClick={() => {
          setIsClicked(!isClicked);
        }}
        isClicked={isClicked}
      />

      <motion.button
        className="absolute bg-slate-50 w-full text-center rounded-xl bottom-0 h-10"
        initial={{
          y: 40,
        }}
        animate={{
          y: isClicked ? 0 : 40,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        Connect to Wallet
      </motion.button>
    </motion.div>
  );
}

export default App;
