import React from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";

const DiamondMaterial = (props) => {
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
      <meshPhysicalMaterial
        color={0xffffff}
        metalness={0}
        roughnessMap={roughness}
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
        clearcoatNormalMap={normal}
        alphaMap={emission}
        toneMapped={false}
      />
    </>
  );
};

export default DiamondMaterial;
