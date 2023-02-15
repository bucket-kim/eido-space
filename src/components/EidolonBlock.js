import React, { useLayoutEffect, useRef, useState } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";

const EidolonBlock = (props) => {
  const { nodes } = useGLTF("/models/eidolon.glb");

  const block1 = useRef();
  const block2 = useRef();
  const block3 = useRef();
  const block4 = useRef();
  const block5 = useRef();

  const [isHover, setIsHover] = useState(false);

  useLayoutEffect(() => {
    if (isHover) {
      gsap.to(block1.current.position, {
        x: 0.6,
        y: 0.2,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block2.current.position, {
        x: -0.6,
        y: 0.6,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block3.current.position, {
        x: 0.6,
        y: 1,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block4.current.position, {
        x: -0.6,
        y: 1.4,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block5.current.position, {
        x: 0.6,
        y: 1.8,
        z: 0,
        duration: 0.3,
      });
    } else {
      gsap.to(block1.current.position, {
        x: 0.396422,
        y: 0.195501,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block2.current.position, {
        x: -0.396422,
        y: 0.583159,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block3.current.position, {
        x: 0.396422,
        y: 0.972841,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block4.current.position, {
        x: -0.396422,
        y: 1.3623,
        z: 0,
        duration: 0.3,
      });
      gsap.to(block5.current.position, {
        x: 0.396422,
        y: 1.7513,
        z: 0,
        duration: 0.3,
      });
    }
  });

  return (
    <>
      <group
        onPointerEnter={() => {
          setIsHover(true);
        }}
        onPointerLeave={() => {
          setIsHover(false);
        }}
        ref={props.meshGroup}
      >
        <mesh
          castShadow
          geometry={nodes.Eidolon_Geo001.geometry}
          {...props}
          position={[-0.395016, 0.193978, 0]}
          ref={block1}
        >
          <meshPhysicalMaterial
            map={props.colorMap}
            metalnessMap={props.metalnessMap}
            roughnessMap={props.roughnessMap}
            transmission={1}
            thickness={2.42}
            ior={2.42}
            reflectivity={0.5}
            envMap={props.texture}
            envMapIntensity={5}
            clearcoat={1}
            transparent={true}
            clearcoatNormalScale={0.5}
            opacity={0.75}
            clearcoatNormalMap={props.normalMap}
            alphaMap={props.emissionMap}
            toneMapped={false}
          />
        </mesh>
        <mesh
          castShadow
          geometry={nodes.Eidolon_Geo002.geometry}
          {...props}
          position={[-0.395016, 0.583159, 0]}
          ref={block2}
        >
          <meshPhysicalMaterial
            map={props.colorMap}
            metalnessMap={props.metalnessMap}
            roughnessMap={props.roughnessMap}
            transmission={1}
            thickness={2.42}
            ior={2.42}
            reflectivity={0.5}
            envMap={props.texture}
            envMapIntensity={5}
            clearcoat={1}
            transparent={true}
            clearcoatNormalScale={0.5}
            opacity={0.75}
            clearcoatNormalMap={props.normalMap}
            alphaMap={props.emissionMap}
            toneMapped={false}
          />
        </mesh>
        <mesh
          castShadow
          geometry={nodes.Eidolon_Geo003.geometry}
          {...props}
          position={[0.395016, 0.972841, 0]}
          ref={block3}
        >
          <meshPhysicalMaterial
            map={props.colorMap}
            metalnessMap={props.metalnessMap}
            roughnessMap={props.roughnessMap}
            transmission={1}
            thickness={2.42}
            ior={2.42}
            reflectivity={0.5}
            envMap={props.texture}
            envMapIntensity={5}
            clearcoat={1}
            transparent={true}
            clearcoatNormalScale={0.5}
            opacity={0.75}
            clearcoatNormalMap={props.normalMap}
            alphaMap={props.emissionMap}
            toneMapped={false}
          />
        </mesh>
        <mesh
          castShadow
          geometry={nodes.Eidolon_Geo004.geometry}
          {...props}
          position={[-0.395016, 1.3623, 0]}
          ref={block4}
        >
          <meshPhysicalMaterial
            map={props.colorMap}
            metalnessMap={props.metalnessMap}
            roughnessMap={props.roughnessMap}
            transmission={1}
            thickness={2.42}
            ior={2.42}
            reflectivity={0.5}
            envMap={props.texture}
            envMapIntensity={5}
            clearcoat={1}
            transparent={true}
            clearcoatNormalScale={0.5}
            opacity={0.75}
            clearcoatNormalMap={props.normalMap}
            alphaMap={props.emissionMap}
            toneMapped={false}
          />
        </mesh>
        <mesh
          castShadow
          geometry={nodes.Eidolon_Geo005.geometry}
          {...props}
          position={[0.395016, 1.7513, 0]}
          ref={block5}
        >
          <meshPhysicalMaterial
            map={props.colorMap}
            metalnessMap={props.metalnessMap}
            roughnessMap={props.roughnessMap}
            transmission={1}
            thickness={2.42}
            ior={2.42}
            reflectivity={0.5}
            envMap={props.texture}
            envMapIntensity={5}
            clearcoat={1}
            transparent={true}
            clearcoatNormalScale={0.5}
            opacity={0.75}
            clearcoatNormalMap={props.normalMap}
            alphaMap={props.emissionMap}
            toneMapped={false}
          />
        </mesh>
      </group>
    </>
  );
};

export default EidolonBlock;
