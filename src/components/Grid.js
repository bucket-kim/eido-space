import React, { useMemo } from "react";
import vertexShader from "../shaders/grid/vertex";
import fragmentShader from "../shaders/grid/fragment";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Grid = (props) => {
  const fog = THREE.UniformsUtils.merge([THREE.UniformsLib["fog"]]);

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0,
      },
      uColor: {
        value: new THREE.Color(0x67aefc),
      },
      uOverlay: {
        value: new THREE.TextureLoader().load("./images/alpha.png"),
      },
    }),
    []
  );

  useFrame((state) => {
    uniforms.uTime.value = state.clock.elapsedTime * 0.5;
  });

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -6, 0]}>
        <planeGeometry args={[200, 200, 1600, 1600]} />
        <shaderMaterial
          uniforms={uniforms}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          transparent={true}
        />
      </mesh>
    </>
  );
};

export default Grid;
