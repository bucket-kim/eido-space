/*eslint-disable*/
import "./MainPage.css";
import Logo from "./components/Logo";
import Scene from "./components/Scene";
import { Suspense, useEffect, useRef, useState } from "react";
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
      <div className={`h-screen text-[12px] sm:text-[10px]`}>
        <div className="w-full flex justify-between text-white absolute z-10  px-24 pt-[6em] sm:px-10 sm:pt-[2.5em]">
          <Logo />
          <Statement />
        </div>
        <Scene />
      </div>
      {/* <Loading started={start} onStarted={() => setStart(true)} /> */}
    </>
  );
}

export default Overlay;
