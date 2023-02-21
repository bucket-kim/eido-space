import { useFrame, useLoader } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { useTexture } from "@react-three/drei";
import EidolonBlock from "./EidolonBlock";
import * as THREE from "three";

const Models = (props) => {
  const meshGroup = useRef();

  const [colorMap, normalMap, roughnessMap, metalnessMap] = useTexture([
    "/images/ceramic/ceramic_BaseColor.png",
    "/images/ceramic/ceramic_Normal.png",
    "/images/ceramic/ceramic_Roughness.png",
    "/images/ceramic/ceramic_Metalness.png",
  ]);

  colorMap.flipY = false;
  normalMap.flipY = false;
  roughnessMap.flipY = false;
  metalnessMap.flipY = false;

  colorMap.encoding = THREE.sRGBEncoding;

  const texture = useLoader(RGBELoader, "/images/royal_esplanade.hdr");
  texture.mapping = THREE.EquirectangularRefractionMapping;
  texture.encoding = THREE.sRGBEncoding;

  useFrame((state, delta) => {
    meshGroup.current.rotation.y += delta * 0.075;
  });

  return (
    <>
      <group position={[0, -2, 0]} scale={1.5}>
        <mesh>
          <EidolonBlock
            meshGroup={meshGroup}
            texture={texture}
            colorMap={colorMap}
            roughnessMap={roughnessMap}
            normalMap={normalMap}
            metalnessMap={metalnessMap}
          />
        </mesh>
      </group>
    </>
  );
};

export default Models;
