import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import LogoMaterial from "./LogoMaterial";
import gsap from "gsap";

const EidolonBlock = (props) => {
  const { nodes } = useGLTF("/models/eidolon2.glb");

  const block1 = useRef();
  const block2 = useRef();
  const block3 = useRef();
  const block4 = useRef();
  const block5 = useRef();

  const meshGroup = useRef();

  const [onTap, setOnTap] = useState(false);

  useEffect(() => {
    if (onTap) {
      gsap.to(block1.current.position, {
        x: -0.6,
        y: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });

      gsap.to(block2.current.position, {
        x: 0.6,
        y: 0.397563,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(block3.current.position, {
        x: -0.6,
        y: 0.397563 * 2,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(block4.current.position, {
        x: 0.6,
        y: 0.397563 * 3,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(block5.current.position, {
        x: -0.6,
        y: 0.397563 * 4,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(block1.current.position, {
        x: -0.388531,
        y: 0,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(block2.current.position, {
        x: 0.388531,
        y: 0.397563,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(block3.current.position, {
        x: -0.388531,
        y: 0.397563 * 2,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(block4.current.position, {
        x: 0.388531,
        y: 0.397563 * 3,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
      gsap.to(block5.current.position, {
        x: -0.388531,
        y: 0.397563 * 4,
        z: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  });

  return (
    <group
      ref={meshGroup}
      onClick={() => {
        setOnTap(!onTap);
      }}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Eidolon_Geo001_geo.geometry}
        position={[-0.388531, 0, 0]}
        ref={block1}
      >
        <LogoMaterial
          color={props.color}
          texture={props.texture}
          envMap={props.envMap}
          metalnessMap={props.metalnessMap}
          roughnessMap={props.roughnessMap}
          normalMap={props.normalMap}
          envMapIntensity={props.envMapIntensity}
          emissionMap={props.emissionMap}
          uTime={props.uTime}
          uColor={props.uColor}
          uShow={props.uShow}
        />
      </mesh>
      <mesh
        ref={block2}
        castShadow
        receiveShadow
        geometry={nodes.Eidolon_Geo002_geo.geometry}
        position={[-0.388531, 0, 0.397563]}
      >
        <LogoMaterial
          color={props.color}
          texture={props.texture}
          envMap={props.envMap}
          metalnessMap={props.metalnessMap}
          roughnessMap={props.roughnessMap}
          normalMap={props.normalMap}
          envMapIntensity={props.envMapIntensity}
          emissionMap={props.emissionMap}
          uTime={props.uTime}
          uColor={props.uColor}
          uShow={props.uShow}
        />
      </mesh>
      <mesh
        ref={block3}
        castShadow
        receiveShadow
        geometry={nodes.Eidolon_Geo003_geo.geometry}
        position={[-0.388531, 0, 0.795126]}
      >
        <LogoMaterial
          color={props.color}
          texture={props.texture}
          envMap={props.envMap}
          metalnessMap={props.metalnessMap}
          roughnessMap={props.roughnessMap}
          normalMap={props.normalMap}
          envMapIntensity={props.envMapIntensity}
          emissionMap={props.emissionMap}
          uTime={props.uTime}
          uColor={props.uColor}
          uShow={props.uShow}
        />
      </mesh>
      <mesh
        ref={block4}
        castShadow
        receiveShadow
        geometry={nodes.Eidolon_Geo004_geo.geometry}
        position={[-0.388531, 0, 1.19269]}
      >
        <LogoMaterial
          color={props.color}
          texture={props.texture}
          envMap={props.envMap}
          metalnessMap={props.metalnessMap}
          roughnessMap={props.roughnessMap}
          normalMap={props.normalMap}
          envMapIntensity={props.envMapIntensity}
          emissionMap={props.emissionMap}
          uTime={props.uTime}
          uColor={props.uColor}
          uShow={props.uShow}
        />
      </mesh>
      <mesh
        ref={block5}
        castShadow
        receiveShadow
        geometry={nodes.Eidolon_Geo005_geo.geometry}
        position={[-0.388531, 0, 1.59025]}
      >
        <LogoMaterial
          color={props.color}
          texture={props.texture}
          envMap={props.envMap}
          metalnessMap={props.metalnessMap}
          roughnessMap={props.roughnessMap}
          normalMap={props.normalMap}
          envMapIntensity={props.envMapIntensity}
          emissionMap={props.emissionMap}
          uTime={props.uTime}
          uColor={props.uColor}
          uShow={props.uShow}
        />
      </mesh>
    </group>
  );
};

export default EidolonBlock;
