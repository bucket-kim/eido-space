import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";

import { useTexture } from "@react-three/drei";
import EidolonBlock from "./EidolonBlock";
import * as THREE from "three";
import gsap from "gsap";
import { Color } from "three";

const Models = (props) => {
  const meshGroup = useRef();

  const [onTap, setOnTap] = useState(false);

  const [colorMap, normalMap, roughnessMap, metalnessMap, heightMap] =
    useTexture([
      "/images/crystal/eidolon_Emissive.png",
      "/images/crystal/eidolon_Normal.png",
      "/images/crystal/eidolon_Roughness.png",
      "/images/crystal/eidolon_Metalness.png",
      "/images/crystal/eidolon_Height.png",
    ]);

  // const [colorMap, normalMap, roughnessMap, heightMap] = useTexture([
  //   "/images/ceramic/ceramic_BaseColor.png",
  //   "/images/ceramic/ceramic_Normal.png",
  //   "/images/ceramic/ceramic_Roughness.png",
  //   "/images/ceramic/ceramic_Height.png",
  // ]);

  colorMap.flipY = false;
  normalMap.flipY = false;
  roughnessMap.flipY = false;
  // metalnessMap.flipY = false;
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

  useFrame(
    (state) => {
      gsap.to(meshGroup.current.rotation, {
        y: !onTap ? "+=0.02" : "+=0",
        ease: "power2.easeIn",
      });

      window.addEventListener("mousedown", (e) => {
        e.preventDefault();
        setOnTap(true);
      });
      window.addEventListener("touchstart", (e) => {
        e.preventDefault();

        setOnTap(true);
      });
      window.addEventListener("mouseup", () => {
        setOnTap(false);
      });
      window.addEventListener("touchend", () => {
        setOnTap(false);
      });

      if (state.size.width <= 390) {
        meshGroup.current.scale.set(0.85, 0.85, 0.85);
        meshGroup.current.position.y = -0.5;
      }

      uniforms.uTime.value = state.clock.elapsedTime * 0.01;
    },
    [meshGroup]
  );

  return (
    <>
      <group position={[0, -1.75, 0]} scale={1.25} ref={meshGroup}>
        <mesh rotation={[0, 0, 0]} ref={meshGroup}>
          <EidolonBlock
            color={uniforms.uColor.value}
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
