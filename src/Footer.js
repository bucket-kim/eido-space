/*eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import Countdown from "./components/Countdown";
import Message from "./Message";
import { AnimatePresence, motion } from "framer-motion";

const Footer = (props) => {
  const [email, setEmail] = useState("");

  const [click, setClick] = useState(false);
  const [message, setMessage] = useState("");

  const formRef = useRef();

  const variants = {
    initial: {
      opacity: 0,
      display: "none",
    },
    open: {
      opacity: 1,
      display: "flex",
    },
    close: {
      opacity: 0,
      display: "none",
    },
  };

  const date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }
  // const postURL = "http://localhost:4000/email";
  const postURL = "https://eidolon-backend.onrender.com/email";
  // const postURL = process.env.APP_SERVER_URL;

  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST,PATCH,OPTIONS",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch(postURL, {
      method: "POST",
      mode: "cors",
      headers: headers,
      body: JSON.stringify({
        email: email,
        dates: `${year}/${month}/${day}`,
      }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something is wrong.");
        }
      })
      .then((email) => {
        // alert("You are now Subscribed to Eidolon Space!");
        setMessage("You are now Subscribed to Eidolon Space!");
        setEmail("");
      })
      .catch((err) => {
        setMessage("Something went wrong.");
        setEmail("");
      });
    setClick(true);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    // <div
    //   className="w-full text-white flex justify-between absolute bottom-2 px-24 z-10 sm:px-10 items-end text-[12px] sm:text-[10px] sm:bottom-0
    //  "
    // >
    //   <Countdown />

    //   {props.login ? (
    //     <button className="pb-[3em] " onClick={props.handleClick}>
    //       Buy
    //     </button>
    //   ) : (
    //     <div className="pb-[3em]">
    //       <form
    //         className="border-b-2 font-NimbusSansL z-20 sticky flex flex-col items-end"
    //         action="POST"
    //         onSubmit={handleSubmit}
    //       >
    //         <button className="pb-[1.5em]" type="submit">
    //           Subscribe
    //         </button>
    //         <input
    //           className="bg-transparent border-none w-[18em] leading-tight focus:outline-none text-right sm:w-[16em] "
    //           onClick={(e) => {
    //             e.target.focus();
    //           }}
    //           type="text"
    //           placeholder="email address"
    //           onChange={handleChange}
    //         />
    //       </form>
    //     </div>
    //   )}
    // </div>
    <div
      className="w-full h-screen text-white flex justify-between
   "
    >
      <div className="absolute bottom-2 px-24 z-10 sm:px-10 items-end text-[12px] sm:text-[10px] sm:bottom-0">
        <Countdown />
      </div>
      {/* 
      {props.login ? (
        <button className="pb-[3em] " onClick={props.handleClick}>
          Buy
        </button>
      ) : ( */}
      <>
        <AnimatePresence>
          <motion.div
            variants={variants}
            initial={"initial"}
            animate={click ? "open" : "close"}
          >
            <Message
              message={message}
              setClick={() => setClick((click) => !click)}
              setTouch={() => setClick((click) => !click)}
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-10 right-0 px-24 z-10 sm:px-10 items-end text-[12px] sm:text-[10px] sm:bottom-8">
          <form
            ref={formRef}
            className="border-b-2 font-NimbusSansL z-20 sticky flex flex-col items-end"
            action="POST"
            onSubmit={handleSubmit}
          >
            <button className="pb-[1.5em]" type="submit">
              Subscribe
            </button>
            <input
              className="bg-transparent border-none w-[18em] leading-tight focus:outline-none focus:bg-transparent text-right sm:w-[16em] "
              onClick={(e) => {
                e.target.focus();
              }}
              value={email}
              type="text"
              placeholder="email address"
              onChange={handleChange}
            />
          </form>
        </div>
      </>
      {/* )} */}
    </div>
  );
};

export default Footer;
