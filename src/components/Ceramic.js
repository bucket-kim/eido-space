import React from "react";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

const Ceramic = (props) => {
  const roughness = useLoader(
    TextureLoader,
    "/images/ceramic/ceramic_Roughness.png"
  );
  const normal = useLoader(TextureLoader, "/images/ceramic/ceramic_Normal.png");
  const baseColor = useLoader(
    TextureLoader,
    "/images/ceramic/ceramic_BaseColor.png"
  );
  const height = useLoader(TextureLoader, "/images/ceramic/ceramic_Height.png");
  const metalness = useLoader(
    TextureLoader,
    "/images/ceramic/ceramic_Metalness.png"
  );

  baseColor.encoding = THREE.sRGBEncoding;

  roughness.flipY = false;
  normal.flipY = false;
  baseColor.flipY = false;
  height.flipY = false;
  metalness.flipY = false;
  return (
    <>
      <meshPhysicalMaterial
        map={baseColor}
        roughnessMap={roughness}
        metalness={0}
        normalMap={normal}
        normalScale={2}
      />
    </>
  );
};

export default Ceramic;
