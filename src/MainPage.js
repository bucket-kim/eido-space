import "./MainPage.css";
import Logo from "./components/Logo";
import Scene from "./components/Scene";
import { TypeAnimation } from "react-type-animation";
import { useState } from "react";
import { motion } from "framer-motion";

function MainPage() {
  const [isHover, setIsHover] = useState(false);
  return (
    <>
      <div className="h-screen">
        <div className="w-full flex justify-between text-white text-[12px] p-8 pt-[6em] font-NimbusSansL absolute z-10">
          <Logo />

          <div className="flex flex-col items-end ">
            <TypeAnimation
              sequence={["Welcome to Eidolon your new digital galary."]}
              cursor={false}
              speed={60}
            />
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
                wrapper={"span"}
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
              className={""}
              speed={60}
            />
            <TypeAnimation
              sequence={[8000, "Follow us on social media @eidolon "]}
              cursor={false}
              wrapper={"div"}
              className={""}
              speed={60}
            />
          </div>
        </div>
        <Scene />
        <motion.div
          className="w-full text-white flex justify-between absolute bottom-0 p-8 pt-[6em]
           "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            whileHover={{ y: -50 }}
            transition={{ type: "easeInOut" }}
            onHoverStart={() => {
              setIsHover(true);
            }}
            onHoverEnd={() => {
              setIsHover(false);
            }}
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
          <button className="pb-[3em]">Buy</button>
        </motion.div>
      </div>
    </>
  );
}

export default MainPage;
