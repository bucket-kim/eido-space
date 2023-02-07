import React, { useLayoutEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion-3d";
import DiamondMaterial from "./DiamondMaterial";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import Ceramic from "./Ceramic";
import gsap from "gsap";

const EidolonBlock = (props) => {
  const [setTap, isSetTap] = useState(false);

  const { nodes } = useGLTF("/models/eidolon2.glb");

  const texture = useLoader(RGBELoader, "/images/royal_esplanade.hdr");
  texture.mapping = THREE.EquirectangularRefractionMapping;
  texture.encoding = THREE.sRGBEncoding;

  const diamond = useRef();
  const ceramic = useRef();

  return (
    <group
      onClick={() => {
        isSetTap(!setTap);
      }}
    >
      <mesh castShadow geometry={nodes.Eidolon_Logo.geometry} {...props}>
        <DiamondMaterial texture={texture} ref={diamond} />
        {/* <Ceramic ref={ceramic} /> */}
      </mesh>
    </group>
  );
};

export default EidolonBlock;
