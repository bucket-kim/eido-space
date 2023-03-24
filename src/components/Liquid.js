/*eslint-disable*/

import { useTexture } from "@react-three/drei";
import { extend, useFrame, useThree } from "@react-three/fiber";
import React, { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { Water } from "three/examples/jsm/objects/Water";

extend({ Water });

const Liquid = () => {
  const ref = useRef();
  const { gl, scene } = useThree();
  const waterNormals = useTexture(
    "https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/waternormals.jpg"
  );
  waterNormals.wrapS = waterNormals.wrapT = THREE.RepeatWrapping;

  const geometry = useMemo(
    () => new THREE.PlaneGeometry(10000, 10000, 32, 32),
    []
  );

  const config = useMemo(
    () => ({
      textureWidth: 512,
      textureHeight: 512,
      waterNormals,
      // sunDirection: new THREE.Vector3(),
      sunColor: 0xcecece,
      waterColor: 0x0a0a0a,
      distortionScale: 3.7,
      fog: scene.fog !== undefined,
      format: gl.encoding,
    }),
    [waterNormals]
  );

  useFrame((state, delta) => {
    ref.current.material.uniforms.time.value += delta * 0.1;
  });

  return (
    <>
      <water
        ref={ref}
        args={[geometry, config]}
        rotation-x={-Math.PI / 2}
        position={[0, -2, 0]}
      />
    </>
  );
};

export default Liquid;
