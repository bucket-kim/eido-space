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
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };

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
        className={`h-screen text-[12px] sm:text-[10px] bg-black`}
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
        {/* <div className="h-full"></div> */}
        <motion.div
          className="w-full text-white flex justify-between sticky bottom-2 px-24 z-10 sm:px-10 items-end
           "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Timer />

          {!login ? (
            <form className="pb-[3.25em] font-NimbusSansL z-20">
              <div className="flex flex-col items-end  border-b border-white">
                <button
                  className="pb-[1em]"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Subscribe
                </button>
                <input
                  className="bg-transparent border-none w-[18em] leading-tight focus:outline-none text-right sm:w-[16em]"
                  type="text"
                  placeholder="email address"
                  defaultValue={email}
                  onChange={handleChange}
                  value={email}
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
