import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { useTexture } from "@react-three/drei";
import EidolonBlock from "./EidolonBlock";
import * as THREE from "three";
import { gsap } from "gsap";

const Models = (props) => {
  const meshGroup = useRef();

  const [colorMap, normalMap, roughnessMap, metalnessMap] = useTexture([
    "/images/diamond/eidolon_BaseColor.png",
    "/images/diamond/eidolon_Normal.png",
    "/images/diamond/eidolon_Roughness.png",
    "/images/diamond/eidolon_Metalness.png",
  ]);

  colorMap.flipY = false;
  normalMap.flipY = false;
  roughnessMap.flipY = false;
  metalnessMap.flipY = false;

  const texture = useLoader(RGBELoader, "/images/royal_esplanade.hdr");
  texture.mapping = THREE.EquirectangularRefractionMapping;
  texture.encoding = THREE.sRGBEncoding;

  const [isHover, setIsHover] = useState(false);

  useFrame((state, delta) => {
    meshGroup.current.rotation.y += delta * 0.025;
  });

  return (
    <>
      <group position={[0, -1.65, 0]} scale={1.5}>
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
