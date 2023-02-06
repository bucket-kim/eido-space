import React from "react";
import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import * as THREE from "three";

const EidolonBlock = (props) => {
  const { nodes } = useGLTF("/models/eidolon2.glb");

  const roughness = useLoader(
    TextureLoader,
    "/images/crystal/eidolon_Roughness.png"
  );
  const normal = useLoader(TextureLoader, "/images/crystal/eidolon_Normal.png");
  const emission = useLoader(
    TextureLoader,
    "/images/crystal/eidolon_Emissive.png"
  );

  roughness.flipY = false;
  normal.flipY = false;
  emission.flipY = false;

  return (
    <>
      <mesh castShadow geometry={nodes.Eidolon_Logo.geometry} {...props}>
        <meshPhysicalMaterial
          color={0xffffff}
          metalness={0}
          roughnessMap={roughness}
          transmission={1}
          thickness={2.42}
          ior={2.42}
          reflectivity={0.5}
          envMap={props.texture}
          envMapIntensity={5}
          clearcoat={1}
          transparent={true}
          opacity={0.75}
          clearcoatNormalMap={normal}
          alphaMap={emission}
          toneMapped={false}
        />
      </mesh>
    </>
  );
};

export default EidolonBlock;
