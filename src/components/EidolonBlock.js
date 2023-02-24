import React from "react";
import { useGLTF } from "@react-three/drei";
import LogoMaterial from "./LogoMaterial";

const EidolonBlock = (props) => {
  const { nodes } = useGLTF("/models/eidolon_Block.glb");

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eidolon_Geo001_geo.geometry}
        {...props}
      >
        <LogoMaterial
          attach="material"
          colorMap={props.colorMap}
          metalnessMap={props.metalnessMap}
          roughnessMap={props.roughnessMap}
          normalMap={props.normalMap}
          envMapIntensity={props.envMapIntensity}
          uTime={props.uTime}
          uAlpha={props.uAlpha}
          uShow={props.uShow}
        />
      </mesh>
    </>
  );
};

export default EidolonBlock;
