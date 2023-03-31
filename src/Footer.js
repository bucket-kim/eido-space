/*eslint-disable */

import React, { useEffect, useRef, useState } from "react";
import Countdown from "./components/Countdown";

const Footer = (props) => {
  const [email, setEmail] = useState("");

  const inputRef = useRef();

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <div
      className="w-full text-white flex justify-between absolute bottom-2 px-24 z-10 sm:px-10 items-end text-[12px] sm:text-[10px] sm:bottom-0 
     "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <Countdown />

      {props.login ? (
        <button className="pb-[3em] " onClick={props.handleClick}>
          Buy
        </button>
      ) : (
        <form
          className="pb-[2em] font-NimbusSansL z-20 sticky"
          action="https://forms.gle/bzC1kKzUoLRp8gtz8"
        >
          <button
            className="hover:bg-white hover:text-black p-[1em] duration-200"
            // onClick={(e) => {
            //   e.preventDefault();
            // }}
          >
            Subscribe
          </button>
          {/* <input
              ref={inputRef}
              className="bg-transparent border-none w-[18em] leading-tight focus:outline-none text-right sm:w-[16em]"
              onClick={(e) => {
                e.target.focus();
              }}
              type="text"
              placeholder="email address"
              onChange={handleChange}
              value={email}
            /> */}
        </form>
      )}
    </div>
  );
};

export default Footer;
