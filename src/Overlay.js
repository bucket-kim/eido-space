import "./MainPage.css";
import Logo from "./components/Logo";
import Scene from "./components/Scene";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useIsSmall } from "./useMediaQuery";

function Overlay(props) {
  const [isHover, setIsHover] = useState(false);

  const isSmall = useIsSmall();

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
        className="h-screen"
        initial={{
          y: 0,
        }}
        // animate="animate"
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
              sequence={["Welcome to Eidolon your new digital galary."]}
              cursor={false}
              speed={60}
            />
            <div className="flex flex-col items-end fade">
              <div className="flex">
                <TypeAnimation
                  sequence={[3300, "Contact us at "]}
                  cursor={false}
                  wrapper={"div"}
                  speed={60}
                />
                <TypeAnimation
                  sequence={[3950, "connect@eidolon.com"]}
                  cursor={false}
                  wrapper={"a"}
                  className={"indent-1 text-blue-500"}
                />
              </div>
              <TypeAnimation
                sequence={[5250, "Created using Web3"]}
                cursor={false}
                wrapper={"div"}
                className={""}
                speed={60}
              />
              <TypeAnimation
                sequence={[6000, "Axe coming 5.9.2024"]}
                cursor={false}
                wrapper={"div"}
                className={""}
                speed={60}
              />
              <TypeAnimation
                sequence={[7000, "Join the collective"]}
                cursor={false}
                wrapper={"div"}
                className={"text-red-500"}
                speed={60}
              />
              <div className="flex">
                <TypeAnimation
                  sequence={[8000, "Follow us on social media"]}
                  cursor={false}
                  wrapper={"div"}
                  className={""}
                  speed={60}
                />
                <TypeAnimation
                  sequence={[8950, " @eidolon"]}
                  cursor={false}
                  wrapper={"a"}
                  className={"indent-1 text-yellow-300"}
                  speed={60}
                />
              </div>
            </div>
          </div>
        </div>
        <Scene />
        <motion.div
          className="w-full text-white flex justify-between absolute bottom-4 px-24 text-[12px] z-10 sm:text-[12px] sm:pb-[1em] sm:px-10 sm:bottom-[6rem]
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
