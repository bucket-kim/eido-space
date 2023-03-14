import "./MainPage.css";
import Logo from "./components/Logo";
import Scene from "./components/Scene";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

function Overlay(props) {
  const [isHover, setIsHover] = useState(false);

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

          <div className="flex flex-col items-end sm:text-[10px]">
            <TypeAnimation
              sequence={["Welcome to Eidolon."]}
              cursor={false}
              speed={60}
            />

            <TypeAnimation
              sequence={[2200, "In a moment, you'll enter a space"]}
              cursor={false}
              wrapper={"div"}
              speed={60}
            />
            <TypeAnimation
              sequence={[3700, "that transcends place and time"]}
              cursor={false}
              wrapper={"a"}
            />
            <TypeAnimation
              sequence={[5800, "Where works of art finds an ever-life"]}
              cursor={false}
              wrapper={"div"}
              className={""}
              speed={60}
            />
            <TypeAnimation
              sequence={[7700, "Where you can explore, experience, own"]}
              cursor={false}
              wrapper={"div"}
              className={""}
              speed={60}
            />
            <TypeAnimation
              sequence={[9500, "We're community of creators"]}
              cursor={false}
              wrapper={"div"}
              speed={60}
            />
            <TypeAnimation
              sequence={[
                10500,
                "Building a different kind of digital and physical marketplace",
              ]}
              cursor={false}
              wrapper={"div"}
              className={""}
              speed={60}
            />
          </div>
        </div>
        <Scene />
        <motion.div
          className="w-full text-white flex justify-between sticky bottom-0 px-24 text-[12px] z-10 sm:text-[12px] sm:px-10 
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
    </>
  );
}

export default Overlay;
