/*eslint-disable  */
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
  const [isHover, setIsHover] = useState(false);

  const dueDay = new Date("Jun 1, 2023 00:00:00").getTime();

  useEffect(() => {
    setInterval(() => {
      let now = new Date().getTime();

      const difference = dueDay - now;

      let days = Math.floor(difference / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((difference % (1000 * 60)) / 1000);

      document.getElementById("show__time").innerHTML = `${
        hours < 10 ? "0" + hours : hours
      }:${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`;

      if (difference < 0) {
        document.getElementById("show__time").innerHTML = "Expired";
      }
    });
  }, []);

  return (
    <div className="font-NimbusSansL sticky">
      <motion.div
        transition={{ type: "easeInOut" }}
        onClick={() => {
          setIsHover(!isHover);
        }}
        animate={{
          y: isHover ? -34 : 0,
        }}
        className={"cursor-pointer"}
        onTouchStart={() => {}}
      >
        <span id="show__time"></span>
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

export default Countdown;
