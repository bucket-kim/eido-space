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

          <div className="flex flex-col items-start sm:text-[10px] w-[22em]">
            <TypeAnimation
              sequence={["function Welcome_to_Eidolon() {"]}
              cursor={false}
              speed={60}
            />

            <TypeAnimation
              sequence={[2500, "const newWorld = '"]}
              cursor={false}
              wrapper={"div"}
              speed={60}
              style={{ paddingLeft: "2em" }}
            />
            <TypeAnimation
              sequence={[3600, "In a moment, you'll enter a space"]}
              cursor={false}
              wrapper={"div"}
              speed={60}
              style={{ paddingLeft: "4em" }}
            />
            <TypeAnimation
              sequence={[5400, "that transcends place and time"]}
              cursor={false}
              wrapper={"a"}
              style={{ paddingLeft: "4em" }}
            />
            <TypeAnimation
              sequence={[7400, "Where works of art finds an ever-life"]}
              cursor={false}
              wrapper={"div"}
              className={""}
              style={{ paddingLeft: "4em" }}
              speed={60}
            />
            <TypeAnimation
              sequence={[9200, "Where you can explore, experience, and own"]}
              cursor={false}
              wrapper={"div"}
              className={""}
              style={{ paddingLeft: "4em" }}
              speed={60}
            />
            <TypeAnimation
              sequence={[11500, "We're community of creators"]}
              cursor={false}
              wrapper={"div"}
              style={{ paddingLeft: "4em" }}
              speed={60}
            />
            <TypeAnimation
              sequence={[
                12500,
                "Building a different kind of digital and physical marketplace'",
              ]}
              cursor={false}
              wrapper={"div"}
              className={""}
              style={{ paddingLeft: "4em" }}
              speed={80}
            />
            <TypeAnimation
              sequence={[14500, "return (newWorld) }"]}
              cursor={false}
              wrapper={"div"}
              className={""}
              style={{ paddingLeft: "2em" }}
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
    </>
  );
}

export default Overlay;
