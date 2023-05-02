/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useFrame } from "@react-three/fiber";
import { AnimatePresence, motion } from "framer-motion";

const Message = ({ ...props }) => {
  return (
    <div className="font-NimbusSansL text-center h-screen w-full absolute top-0 left-0 flex items-center justify-center">
      <div className="  bg-black p-8 px-12 border-white border-2">
        <h1 className="text-l">{props.message}</h1>
        <button
          onClick={props.setClick}
          onTouchStart={props.setTouch}
          className="border-2 border-white mt-8 p-2 text-[12px]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Message;
