import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const EidolonBlock = (props) => {
  const { nodes, materials } = useGLTF("/models/eidolon2.glb");

  return (
    <>
      <mesh
        castShadow
        geometry={nodes.Eidolon_Logo.geometry}
        {...props}
        material={materials}
      >
        {/* <DiamondMaterial texture={texture} ref={diamond} /> */}
        {/* <Ceramic ref={ceramic} /> */}
        <meshPhysicalMaterial
          map={props.colorMap}
          metalnessMap={props.metalnessMap}
          roughnessMap={props.roughnessMap}
          roughness={0.5}
          transmission={1}
          thickness={2.42}
          ior={2.42}
          reflectivity={0.5}
          envMap={props.texture}
          envMapIntensity={5}
          clearcoat={1}
          transparent={true}
          normalScale={0.5}
          clearcoatNormalScale={0.5}
          opacity={0.75}
          clearcoatNormalMap={props.normalMap}
          alphaMap={props.emissionMap}
          toneMapped={false}
        />
      </mesh>
    </>
  );
};

export default EidolonBlock;
