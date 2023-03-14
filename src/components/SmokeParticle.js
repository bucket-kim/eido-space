import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Cloud } from "@react-three/drei";

const SmokeParticle = () => {
  const groupRef = useRef();

  return (
    <>
      <Cloud
        opacity={0.04}
        width={20}
        segments={30}
        depth={1}
        depthTest={false}
      />
    </>
  );
};

export default SmokeParticle;
