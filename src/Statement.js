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
    }, 3500);
    setTimeout(() => {
      glitchRef2.current.style = {
        opacity: setShow(1),
      };
    }, 7000);
    setTimeout(() => {
      glitchRef3.current.style = {
        opacity: setShow(1),
      };
    }, 9500);
    setTimeout(() => {
      glitchRef4.current.style = {
        opacity: setShow(1),
      };
    }, 13000);
    setTimeout(() => {
      glitchRef5.current.style = {
        opacity: setShow(1),
      };
    }, 15000);

    textContainerRef.current.style.opacity = 1;

    gsap.to(textContainerRef.current.style, {
      opacity: 0.2,
      delay: 16.5,
    });
  }, []);

  return (
    <div className="flex flex-col items-end font-NimbusSansL w-full sm:w-3/4">
      <Glitch speed={70} dontGlitch text={"Hello…welcome to Eidolon"} />
      <div ref={textContainerRef} className="flex flex-col items-end ">
        <Glitch
          ref={glitchRef1}
          speed={55}
          buffer={40}
          dontGlitch
          text={"This is a space that transcends place and time"}
        />
        <Glitch
          ref={glitchRef2}
          speed={55}
          buffer={95}
          dontGlitch
          text={"Where art finds an ever-life"}
        />
        <Glitch
          ref={glitchRef3}
          speed={50}
          buffer={135}
          dontGlitch
          text={"Where you can explore and experience exclusive creations"}
        />
        <Glitch
          ref={glitchRef4}
          speed={60}
          buffer={180}
          dontGlitch
          text={"Come, click around"}
        />
        <Glitch
          ref={glitchRef5}
          speed={60}
          buffer={210}
          dontGlitch
          text={"See what moves you"}
        />
      </div>
    </div>
  );
};

export default Statement;
