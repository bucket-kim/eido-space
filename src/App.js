/*eslint-disable*/

import "./App.css";
import Overlay from "./Overlay";
import { motion } from "framer-motion";
import { useState } from "react";
import Loading from "./components/Loading";
import Footer from "./Footer";

function App() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <motion.div
        className="app__body"
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
        <Overlay />
        <Footer
          handleClick={(e) => {
            e.preventDefault();
            setIsClicked(!isClicked);
          }}
        />
      </motion.div>
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
    </>
  );
}

export default App;
