import React, { useEffect, useMemo, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import LogoMaterial from "./LogoMaterial";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader";
import gsap from "gsap";
import * as THREE from "three";
import vertexShader from "../shaders/material/vertex";
import fragmentShader from "../shaders/material/fragment";

const EidolonBlock = (props) => {
  const { nodes } = useGLTF("/models/eidolon2.glb");

  const block1 = useRef();
  const block2 = useRef();
  const block3 = useRef();
  const block4 = useRef();
  const block5 = useRef();

  // const backgroundHDRI = new RGBELoader().load("./images/royal_esplanade.hdr");
  const backgroundHDRI = new THREE.CubeTextureLoader()
    .setPath("./images/hdri/")
    .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);

  const meshGroup = useRef();

  const [onTap, setOnTap] = useState(false);

  const diffuse = new THREE.TextureLoader().load(
    "/images/crystal/eidolon_Roughness.png"
  );
  const roughness = new THREE.TextureLoader().load(
    "/images/crystal/eidolon_Roughness.png"
  );
  // const metalness = new THREE.TextureLoader().load(
  //   "/images/crystal/eidolon_Metalness.png"
  // );
  const normal = new THREE.TextureLoader().load(
    "/images/crystal/eidolon_Normal.png"
  );

  diffuse.flipY = false;

  const uniforms = useMemo(
    () => ({
      uBaseColor: {
        value: diffuse,
      },
      uSpecMap: {
        value: backgroundHDRI,
      },
      uRoughness: {
        value: roughness,
      },
      uNormal: {
        value: normal,
      },
    }),
    []
  );

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
        {/* <shaderMaterial
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
        /> */}
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
        position={[0.388531, 0.397563, 0]}
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
        position={[-0.388531, 0.795126, 0]}
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
        position={[0.388531, 1.19269, 0]}
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
        position={[-0.388531, 1.59025, 0]}
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
