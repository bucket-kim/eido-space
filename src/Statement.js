/*eslint-disable*/
import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Glitch } from "react-teffex";

const Statement = (props) => {
  const glitchRef1 = useRef();
  const glitchRef2 = useRef();
  const glitchRef3 = useRef();
  const glitchRef4 = useRef();
  const glitchRef5 = useRef();

  const textContainerRef = useRef();
  const [show, setShow] = useState(0);
  const [opacity, setOpacity] = useState(0.5);

  useEffect(() => {
    glitchRef1.current.style = {
      opacity: show,
    };
    glitchRef2.current.style = {
      opacity: show,
    };
    glitchRef3.current.style = {
      opacity: show,
    };
    glitchRef4.current.style = {
      opacity: show,
    };
    glitchRef5.current.style = {
      opacity: show,
    };

    setTimeout(() => {
      glitchRef1.current.style = {
        opacity: setShow(1),
      };
    }, 2000);
    setTimeout(() => {
      glitchRef2.current.style = {
        opacity: setShow(1),
      };
    }, 4000);
    setTimeout(() => {
      glitchRef3.current.style = {
        opacity: setShow(1),
      };
    }, 6000);
    setTimeout(() => {
      glitchRef4.current.style = {
        opacity: setShow(1),
      };
    }, 8000);
    setTimeout(() => {
      glitchRef5.current.style = {
        opacity: setShow(1),
      };
    }, 10000);

    textContainerRef.current.style.opacity = 1;

    gsap.to(textContainerRef.current.style, {
      opacity: 0.2,
      delay: 11,
    });
  }, []);

  return (
    <div className="flex flex-col items-end font-NimbusSansL w-full text-right">
      <Glitch speed={35} dontGlitch text={"Hello…welcome to Eidolon"} />
      <div ref={textContainerRef} className="flex flex-col items-end sm:w-1/2">
        <Glitch
          ref={glitchRef1}
          speed={35}
          buffer={35}
          dontGlitch
          text={"This is a space that transcends place and time"}
        />
        <Glitch
          ref={glitchRef2}
          speed={35}
          buffer={70}
          dontGlitch
          text={"Where art finds an ever-life"}
        />
        <Glitch
          ref={glitchRef3}
          speed={35}
          buffer={105}
          dontGlitch
          text={"Where you can explore and experience exclusive creations"}
        />
        <Glitch
          ref={glitchRef4}
          speed={35}
          buffer={140}
          dontGlitch
          text={"Come, click around"}
        />
        <Glitch
          ref={glitchRef5}
          speed={35}
          buffer={175}
          dontGlitch
          text={"See what moves you"}
        />
      </div>
    </div>
  );
};

export default Statement;
