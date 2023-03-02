import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { useTexture } from "@react-three/drei";
import EidolonBlock from "./EidolonBlock";
import * as THREE from "three";
import gsap from "gsap";
import { Color } from "three";

const Models = (props) => {
  const meshGroup = useRef();

  const texture = useLoader(RGBELoader, "/images/royal_esplanade.hdr");

  const [onTap, setOnTap] = useState(false);

  const [colorMap, normalMap, roughnessMap, metalnessMap, heightMap] =
    useTexture([
      "/images/crystal/eidolon_Emissive.png",
      "/images/crystal/eidolon_Normal.png",
      "/images/crystal/eidolon_Roughness.png",
      "/images/crystal/eidolon_Metalness.png",
      "/images/crystal/eidolon_Height.png",
    ]);

  colorMap.flipY = false;
  normalMap.flipY = false;
  roughnessMap.flipY = false;
  metalnessMap.flipY = false;
  heightMap.flipY = false;

  colorMap.encoding = THREE.sRGBEncoding;

  const envMapIntensity = 1;

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0,
      },
      uShow: {
        value: false,
      },
      uColor: {
        value: new Color(0.99, 0.67, 0),
      },
    }),
    []
  );

  useFrame((state) => {
    gsap.to(meshGroup.current.rotation, {
      y: !onTap ? "+=0.02" : "+=0",
      ease: "power2.easeIn",
    });
    // meshGroup.current.rotation.y = state.clock.elapsedTime * 0.2;

    if (state.size.width <= 390) {
      meshGroup.current.scale.set(0.85, 0.85, 0.85);
      meshGroup.current.position.y = -0.5;
    }

    uniforms.uTime.value = state.clock.elapsedTime * 0.01;
  });

  return (
    <>
      <group
        position={[0, -1.75, 0]}
        scale={1.5}
        ref={meshGroup}
        onClick={() => {
          setOnTap(!onTap);
        }}
      >
        <mesh rotation={[0, Math.PI, 0]}>
          <EidolonBlock
            color={uniforms.uColor.value}
            // texture={texture}
            roughnessMap={roughnessMap}
            normalMap={normalMap}
            envMapIntensity={envMapIntensity}
            emissionMap={colorMap}
            metalnessMap={metalnessMap}
            position={[-0.381, 0, 0]}
            uTime={uniforms.uTime}
            uColor={uniforms.uColor}
            uShow={uniforms.uShow}
          />
        </mesh>
      </group>
    </>
  );
};

export default Models;
