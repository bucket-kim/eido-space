import "./App.css";
import Overlay from "./Overlay";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsSmall } from "./useMediaQuery";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  const isSmall = useIsSmall();

  useEffect(() => {
    const documentHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty("--doc-height", `${window.innerHeight}px`);
    };
    window.addEventListener("resize", documentHeight);
    documentHeight();
  }, []);

  return (
    <div className="overflow-y-hidden h-full relative">
      <Overlay
        handleClick={() => {
          setIsClicked(!isClicked);
        }}
        isClicked={isClicked}
      />

      <motion.button
        className="  absolute bg-slate-50 w-full text-center -bottom-10 h-10 
        "
        initial={{
          y: 0,
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
