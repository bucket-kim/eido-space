import { useProgress } from "@react-three/drei";
import React from "react";

const Loading = (props) => {
  const { progress } = useProgress();

  return (
    <div
      className={`loadingScreen ${
        props.started ? "loadingScreen--started" : ""
      }`}
    >
      <div className="loadingScreen__progress">
        <div
          className="loadingScreen__progress__value"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="loadingScreen__board">
        <h1 className="loadingScreen__title">Stay put, we'll get you there.</h1>
        <button
          className="loadingScreen__button"
          disabled={progress < 100}
          onClick={props.onStarted}
        >
          Enter
        </button>
      </div>
    </div>
  );
};

export default Loading;
