import React from "react";
import { useGLTF, MeshRefractionMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";

const EidolonBlock = (props) => {
  const { nodes } = useGLTF("/models/eidolon.glb");
  // const { nodes } = useGLTF("/models/ethereum.glb");

  const baseColor = useLoader(
    TextureLoader,
    "/images/crystal/Eidolon_BaseColor.png"
  );

  const roughness = useLoader(
    TextureLoader,
    "/images/crystal/Eidolon_Roughness.png"
  );
  const normal = useLoader(TextureLoader, "/images/crystal/Eidolon_Normal.png");
  const emission = useLoader(
    TextureLoader,
    "/images/crystal/Eidolon_Emissive.png"
  );

  roughness.flipY = false;
  normal.flipY = false;
  emission.flipY = false;

  return (
    <>
      <mesh castShadow geometry={nodes.Eidolon_Logo.geometry} {...props}>
        {/* <MeshRefractionMaterial
          envMap={props.texture}
          bounces={3}
          fresnel={1}
          ior={2.42}
          fastChroma={true}
          toneMapped={false}
        /> */}
        <meshPhysicalMaterial
          color={0xffffff}
          metalness={0}
          opacity={0.5}
          roughnessMap={roughness}
          transmission={1}
          thickness={2.42}
          ior={2.42}
          reflectivity={0.5}
          envMap={props.texture}
          envMapIntensity={10}
          clearcoat={1}
          normalMap={normal}
          clearcoatNormalMap={normal}
          alphaMap={emission}
          transparent={true}
          toneMapped={false}
        />
      </mesh>
    </>
  );
};

export default EidolonBlock;
