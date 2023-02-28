import { useFrame, useLoader } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
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

  const [colorMap, normalMap, roughnessMap, heightMap] = useTexture([
    "/images/ceramic/ceramic_BaseColor2.png",
    "/images/ceramic/ceramic_Normal2.png",
    "/images/ceramic/ceramic_Roughness2.png",
    "/images/ceramic/ceramic_Height2.png",
  ]);

  colorMap.flipY = false;
  normalMap.flipY = false;
  roughnessMap.flipY = false;

  colorMap.encoding = THREE.sRGBEncoding;

  const envMapIntensity = 1;

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0,
      },
      uShow: {
        value: true,
      },
      uAlpha: {
        value: 1,
      },
    }),
    []
  );

  useFrame((state) => {
    gsap.to(meshGroup.current.rotation, {
      y: !onTap ? "+=0.025" : "+=0",
      ease: "power2.easeIn",
    });

    if (state.size.width <= 390) {
      meshGroup.current.scale.set(0.85, 0.85, 0.85);
      meshGroup.current.position.y = -0.5;
    }
    uniforms.uTime.value = state.clock.elapsedTime * 0.01;
    gsap.to(uniforms.uShow, {
      value: !onTap ? 0 : 1,
    });
  });

  useEffect(() => {
    if (onTap) {
      gsap.to(block1.current.position, {
        x: 0.2,
        y: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(block2.current.position, {
        x: -0.2,
        y: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(block3.current.position, {
        x: 0.2,
        y: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(block4.current.position, {
        x: -0.2,
        y: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(block5.current.position, {
        x: 0.2,
        y: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(block1.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(block2.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(block3.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(block4.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(block5.current.position, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
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
            position={[-0.381, 0, 0]}
            uTime={uniforms.uTime}
            uAlpha={uniforms.uAlpha}
            uShow={uniforms.uShow}
          />
        </mesh>
        <mesh ref={block2} rotation={[0, Math.PI, 0]}>
          <EidolonBlock
            colorMap={colorMap}
            roughnessMap={roughnessMap}
            normalMap={normalMap}
            envMapIntensity={envMapIntensity}
            position={[0.381, 0.393062, 0]}
            uTime={uniforms.uTime}
            uAlpha={uniforms.uAlpha}
            uShow={uniforms.uShow}
          />
        </mesh>
        <mesh ref={block3} rotation={[0, Math.PI, 0]}>
          <EidolonBlock
            colorMap={colorMap}
            roughnessMap={roughnessMap}
            normalMap={normalMap}
            envMapIntensity={envMapIntensity}
            position={[-0.381, 0.786124, 0]}
            uTime={uniforms.uTime}
            uAlpha={uniforms.uAlpha}
            uShow={uniforms.uShow}
          />
        </mesh>
        <mesh ref={block4} rotation={[0, Math.PI, 0]}>
          <EidolonBlock
            colorMap={colorMap}
            roughnessMap={roughnessMap}
            normalMap={normalMap}
            envMapIntensity={envMapIntensity}
            position={[0.381, 1.17919, 0]}
            uTime={uniforms.uTime}
            uAlpha={uniforms.uAlpha}
            uShow={uniforms.uShow}
          />
        </mesh>
        <mesh ref={block5} rotation={[0, Math.PI, 0]}>
          <EidolonBlock
            colorMap={colorMap}
            roughnessMap={roughnessMap}
            normalMap={normalMap}
            envMapIntensity={envMapIntensity}
            position={[-0.381, 1.57225, 0]}
            uTime={uniforms.uTime}
            uAlpha={uniforms.uAlpha}
            uShow={uniforms.uShow}
          />
        </mesh>
      </group>
    </>
  );
};

export default Models;
