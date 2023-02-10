import "./App.css";
import MainPage from "./MainPage";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <>
      <MainPage
        handleClick={() => {
          setIsClicked(!isClicked);
        }}
      />

      <motion.button
        className="absolute bg-slate-50 w-full text-center rounded-xl bottom-0 h-10"
        animate={{
          opacity: !isClicked ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        Connect to Wallet
      </motion.button>
    </>
  );
}

export default App;
