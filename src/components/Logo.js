import React, { useState } from "react";
import { motion } from "framer-motion";

const Logo = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="mt-2 cursor-pointer">
      <motion.div
        onHoverStart={() => {
          setIsHover(true);
        }}
        onHoverEnd={() => {
          setIsHover(false);
        }}
      >
        <div className="flex">
          <div className="bg-white w-2.5 h-2.5 translate-x-5"></div>
          <motion.div
            className="bg-white w-2.5 h-2.5 translate-x-5"
            animate={{ y: isHover ? 10 : 0, x: 20 }}
            transition={{ type: "easeInOut", duration: 0.2 }}
          ></motion.div>
        </div>
        <div className="flex">
          <motion.div
            className="bg-white w-2.5 h-2.5 translate-x-5"
            animate={{ y: isHover ? -10 : 0 }}
            transition={{ type: "easeInOut", duration: 0.2 }}
          ></motion.div>
          <div className="bg-white w-2.5 h-2.5"></div>
        </div>
        <div className="flex">
          <div className="bg-white w-2.5 h-2.5 translate-x-5"></div>
          <motion.div
            className="bg-white w-2.5 h-2.5 translate-x-5"
            animate={{ y: isHover ? 10 : 0, x: 20 }}
            transition={{ type: "easeInOut", duration: 0.2 }}
          ></motion.div>
        </div>
        <div className="flex">
          <motion.div
            className="bg-white w-2.5 h-2.5 translate-x-5"
            animate={{ y: isHover ? -10 : 0 }}
            transition={{ type: "easeInOut", duration: 0.2 }}
          ></motion.div>
          <div className="bg-white w-2.5 h-2.5"></div>
        </div>
        <div className="flex">
          <div className="bg-white w-2.5 h-2.5 translate-x-5"></div>
          <motion.div
            className="bg-white w-2.5 h-2.5 "
            animate={{ y: isHover ? 10 : 0, x: 20 }}
            transition={{ type: "easeInOut", duration: 0.2 }}
          ></motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Logo;
