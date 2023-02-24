import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { useTexture } from "@react-three/drei";
import EidolonBlock from "./EidolonBlock";
import * as THREE from "three";
import gsap from "gsap";

const Models = (props) => {
  const meshGroup = useRef();

  const block1 = useRef();
  const block2 = useRef();
  const block3 = useRef();
  const block4 = useRef();
  const block5 = useRef();

  const [onTap, setOnTap] = useState(false);

  const [colorMap, normalMap, roughnessMap] = useTexture([
    "/images/ceramic/ceramic_BaseColor2.png",
    "/images/ceramic/ceramic_Normal2.png",
    "/images/ceramic/ceramic_Roughness2.png",
  ]);

  colorMap.flipY = false;
  normalMap.flipY = false;
  roughnessMap.flipY = false;

  colorMap.encoding = THREE.sRGBEncoding;

  const envMapIntensity = 0.05;

  const uniforms = {
    uTime: {
      value: 0,
    },
    uShow: {
      value: false,
    },
    uAlpha: {
      value: 1,
    },
  };

  useFrame((state) => {
    meshGroup.current.rotation.y = state.clock.elapsedTime * 0.35;
    uniforms.uTime.value = state.clock.elapsedTime * 0.025;
  });

  useEffect(() => {
    if (onTap) {
      gsap.to(block1.current.position, {
        x: 0.2,
        y: 0,
        z: 0,
        duration: 0.3,
      });

      gsap.to(block2.current.position, {
        x: -0.2,
        y: 0,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block3.current.position, {
        x: 0.2,
        y: 0,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block4.current.position, {
        x: -0.2,
        y: 0,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block5.current.position, {
        x: 0.2,
        y: 0,
        z: 0,
        duration: 0.3,
      });
    } else {
      gsap.to(block1.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block2.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block3.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block4.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block5.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.3,
      });
    }
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
        <mesh ref={block1} rotation={[0, Math.PI, 0]}>
          <EidolonBlock
            colorMap={colorMap}
            roughnessMap={roughnessMap}
            normalMap={normalMap}
            envMapIntensity={envMapIntensity}
            position={[-0.393062, 0, 0]}
            uTime={uniforms.uTime}
            uShow={uniforms.uShow}
            uAlpha={uniforms.uAlpha}
          />
        </mesh>
        <mesh ref={block2} rotation={[0, Math.PI, 0]}>
          <EidolonBlock
            colorMap={colorMap}
            roughnessMap={roughnessMap}
            normalMap={normalMap}
            envMapIntensity={envMapIntensity}
            position={[0.393062, 0.393062, 0]}
            uTime={uniforms.uTime}
            uShow={uniforms.uShow}
            uAlpha={uniforms.uAlpha}
          />
        </mesh>
        <mesh ref={block3} rotation={[0, Math.PI, 0]}>
          <EidolonBlock
            colorMap={colorMap}
            roughnessMap={roughnessMap}
            normalMap={normalMap}
            envMapIntensity={envMapIntensity}
            position={[-0.393062, 0.786124, 0]}
            uTime={uniforms.uTime}
            uShow={uniforms.uShow}
            uAlpha={uniforms.uAlpha}
          />
        </mesh>
        <mesh ref={block4} rotation={[0, Math.PI, 0]}>
          <EidolonBlock
            colorMap={colorMap}
            roughnessMap={roughnessMap}
            normalMap={normalMap}
            envMapIntensity={envMapIntensity}
            position={[0.393062, 1.17919, 0]}
            uTime={uniforms.uTime}
            uShow={uniforms.uShow}
            uAlpha={uniforms.uAlpha}
          />
        </mesh>
        <mesh ref={block5} rotation={[0, Math.PI, 0]}>
          <EidolonBlock
            colorMap={colorMap}
            roughnessMap={roughnessMap}
            normalMap={normalMap}
            envMapIntensity={envMapIntensity}
            position={[-0.393062, 1.57225, 0]}
            uTime={uniforms.uTime}
            uShow={uniforms.uShow}
            uAlpha={uniforms.uAlpha}
          />
        </mesh>
      </group>
    </>
  );
};

export default Models;
