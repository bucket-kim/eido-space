/*eslint-disable*/
import "./MainPage.css";
import Logo from "./components/Logo";
import Scene from "./components/Scene";
import { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import Statement from "./Statement";
import Loading from "./components/Loading";
import Timer from "./components/Timer";

function Overlay(props) {
  const [isHover, setIsHover] = useState(false);
  const [start, setStart] = useState(false);

  let login = false;

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
        className={`h-screen text-[12px] sm:text-[10px]`}
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
        <div className="w-full flex justify-between text-white absolute z-10  px-24 pt-[6em] sm:px-10 sm:pt-[2.5em]">
          <Logo />
          <Statement />
        </div>
        <Scene />
        <motion.div
          className="w-full text-white flex justify-between sticky bottom-2 px-24 z-9 sm:px-10 items-end
           "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Timer />

          {!login ? (
            <form className="pb-[3.25em] font-NimbusSansL">
              <div className="flex flex-col items-end  border-b border-white">
                <label for="username " className="pb-[1em]">
                  Subscribe
                </label>
                <input
                  className="appearance-none bg-transparent border-none w-[18em] leading-tight focus:outline-none text-right sm:w-[16em]"
                  id="username"
                  type="text"
                  placeholder="email address"
                />
              </div>
            </form>
          ) : (
            <button className="pb-[3em] " onClick={props.handleClick}>
              Buy
            </button>
          )}
        </motion.div>
      </motion.div>
      {/* <Loading started={start} onStarted={() => setStart(true)} /> */}
    </>
  );
}

export default Overlay;
