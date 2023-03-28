/*eslint-disable  */
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Timer = () => {
  const [isHover, setIsHover] = useState(false);
  const countdownRef = useRef();

  const dueDay = new Date("Jun 1, 2023 00:00:00").getTime();

  useEffect(() => {
    setInterval(() => {
      const now = new Date().getTime();

      const difference = dueDay - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      countdownRef.current.innerHTML = `${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      }:${seconds < 10 ? "0" + seconds : seconds}`;

      if (seconds + "".length === 1) {
        seconds = "0" + seconds;
      }
    });
  }, []);

  return (
    <div>
      <motion.div
        transition={{ type: "easeInOut" }}
        onClick={() => {
          setIsHover(!isHover);
        }}
        animate={{
          y: isHover ? -6 : 26,
        }}
        className={"cursor-pointer"}
        onTouchStart={() => {}}
      >
        <p ref={countdownRef}></p>
        <div>
          <motion.div
            animate={{ opacity: isHover ? 1 : 0 }}
            transition={{ duration: 0.15, type: "easeInOut" }}
          >
            <p>06.01.2023</p>
            <p>Eastern Standard Time</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Timer;
