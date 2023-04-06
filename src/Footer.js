/*eslint-disable */

import React, { useEffect, useRef, useState } from "react";
import Countdown from "./components/Countdown";
import axios from "axios";

const Footer = (props) => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const postURL = "http://localhost:4000/api/email/";
    fetch(postURL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        dates: [],
      }),
    })
      .then(() => {
        alert("You are now Subscribed to Eidolon Space!");
      })
      .catch((err) => console.error(err));
  };

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
        <div className="pb-[3em]">
          <form
            className="border-b-2 font-NimbusSansL z-20 sticky flex flex-col items-end"
            action="POST"
            onSubmit={handleSubmit}
          >
            <button className="pb-[1.5em]" type="submit">
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
      )}
    </div>
  );
};

export default Footer;
