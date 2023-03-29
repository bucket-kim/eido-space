import React, { useState } from "react";
import { motion } from "framer-motion";
import Timer from "./components/Timer";

const Footer = (props) => {
  let login = false;
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div
      className="w-full text-white flex justify-between sticky bottom-2 px-24 z-10 sm:px-10 items-end
    "
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
    </div>
  );
};

export default Footer;
