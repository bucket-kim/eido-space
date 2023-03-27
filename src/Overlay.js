/*eslint-disable*/
import "./MainPage.css";
import Logo from "./components/Logo";
import Scene from "./components/Scene";
import { TypeAnimation } from "react-type-animation";
import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Statement from "./Statement";
import Loading from "./components/Loading";

function Overlay(props) {
  const [isHover, setIsHover] = useState(false);
  const [start, setStart] = useState(false);

  useEffect(() => {
    gsap.to(".fade", {
      opacity: 0.2,
      delay: 9.5,
      transition: {
        duration: 0.15,
      },
    });
  }, []);

  return (
    <>
      <motion.div
        className={`h-screen`}
        initial={{
          y: 0,
        }}
        animate={{
          y: props.isClicked ? -40 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
      >
        <div className="w-full flex justify-between text-white absolute z-10 text-[12px] px-24 pt-[6em] sm:px-10 sm:pt-[2.5em]">
          <Logo />
          <div className="flex flex-col items-start sm:text-[10px] w-[20em] sm:w-[16em] pl-[0.5em]">
            <Statement />
          </div>
        </div>
        <Scene />
        <motion.div
          className="w-full text-white flex justify-between sticky bottom-0 px-24 text-[12px] z-9 sm:text-[12px] sm:px-10 
           "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            transition={{ type: "easeInOut" }}
            onClick={() => {
              setIsHover(!isHover);
            }}
            animate={{
              y: isHover ? -36 : 0,
            }}
            className={"cursor-pointer"}
            onTouchStart={() => {}}
          >
            #0001
            <div>
              <motion.div
                animate={{ opacity: isHover ? 1 : 0 }}
                transition={{ duration: 0.15, type: "easeInOut" }}
              >
                Name of the piece
              </motion.div>
              <motion.div
                animate={{ opacity: isHover ? 1 : 0 }}
                transition={{ duration: 0.15, type: "easeInOut" }}
              >
                By Eidolon
              </motion.div>
            </div>
          </motion.div>
          <button className="pb-[3em] " onClick={props.handleClick}>
            Buy
          </button>
        </motion.div>
      </motion.div>
      {/* <Loading started={start} onStarted={() => setStart(true)} /> */}
    </>
  );
}

export default Overlay;
