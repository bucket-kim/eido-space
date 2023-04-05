/*eslint-disable */

import React, { useEffect, useRef, useState } from "react";
import Countdown from "./components/Countdown";
import Axios from "axios";

const Footer = (props) => {
  const [email, setEmail] = useState("");

  return (
    <div
      className="w-full text-white flex justify-between absolute bottom-2 px-24 z-10 sm:px-10 items-end text-[12px] sm:text-[10px] sm:bottom-0 
     "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Countdown />

      {/* {props.login ? (
        <button className="pb-[3em] " onClick={props.handleClick}>
          Buy
        </button>
      ) : (
        <div className="pb-[3em]">
          <form
            className="border-b-2 font-NimbusSansL z-20 sticky flex flex-col items-end"
            onSubmit={handleSubmit}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <button
              className="pb-[1.5em]"
              onClick={(e) => {
                e.preventDefault();
              }}
            >
              Subscribe
            </button>
            <input
              className="bg-transparent border-none w-[18em] leading-tight focus:outline-none text-right sm:w-[16em] "
              onClick={(e) => {
                e.target.focus();
              }}
              type="text"
              placeholder="email address"
              onChange={handleChange}
            />
          </form>
        </div>
      )} */}
    </div>
  );
};

export default Footer;
