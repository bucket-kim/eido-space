import { useFrame, useLoader } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import EidolonBlock from "./EidolonBlock";
import * as THREE from "three";
import { Float } from "@react-three/drei";
import { gsap } from "gsap";

const Models = (props) => {
  const ref = useRef();

  const texture = useLoader(RGBELoader, "/images/royal_esplanade.hdr");
  texture.mapping = THREE.EquirectangularRefractionMapping;
  texture.encoding = THREE.sRGBEncoding;

  const [isHover, setIsHover] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.025;
  });

  const box1 = useRef();
  const box2 = useRef();
  const box3 = useRef();
  const box4 = useRef();
  const box5 = useRef();

  useLayoutEffect(() => {
    if (isHover) {
      gsap.to(box1.current.position, {
        x: 0.6,
        y: 0,
        z: 0,
        duration: 0.3,
      });
      gsap.to(box2.current.position, {
        x: -0.6,
        y: 0.6,
        z: 0,
        duration: 0.3,
      });
      gsap.to(box3.current.position, {
        x: 0.6,
        y: 1,
        z: 0,
        duration: 0.3,
      });
      gsap.to(box4.current.position, {
        x: -0.6,
        y: 1.4,
        z: 0,
        duration: 0.3,
      });
      gsap.to(box5.current.position, {
        x: 0.6,
        y: 1.8,
        z: 0,
        duration: 0.3,
      });
    } else {
      gsap.to(box1.current.position, {
        x: 0.396422,
        y: 0.195501,
        z: 0,
        duration: 0.3,
      });
      gsap.to(box2.current.position, {
        x: -0.388236,
        y: 0.595516,
        z: 0,
        duration: 0.3,
      });
      gsap.to(box3.current.position, {
        x: 0.396422,
        y: 0.977503,
        z: 0,
        duration: 0.3,
      });
      gsap.to(box4.current.position, {
        x: -0.388236,
        y: 1.3685,
        z: 0,
        duration: 0.3,
      });
      gsap.to(box5.current.position, {
        x: 0.396422,
        y: 1.75951,
        z: 0,
        duration: 0.3,
      });
    }
  });

  return (
    <>
      <group
        position={[0, -2, 0]}
        scale={1.5}
        ref={ref}
        onPointerEnter={() => {
          setIsHover(true);
        }}
        onPointerLeave={() => {
          setIsHover(false);
        }}
      >
        <mesh ref={box1} position={[0.396422, 0.195501, 0]}>
          <EidolonBlock />
        </mesh>
        <mesh ref={box2} position={[-0.388236, 0.595516, 0]}>
          <EidolonBlock />
        </mesh>
        <mesh ref={box3} position={[0.396422, 0.977503, 0]}>
          <EidolonBlock />
        </mesh>
        <mesh ref={box4} position={[-0.388236, 1.3685, 0]}>
          <EidolonBlock />
        </mesh>
        <mesh ref={box5} position={[0.396422, 1.75951, 0]}>
          <EidolonBlock />
        </mesh>
      </group>
    </>
  );
};

export default Models;
