import React, { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import vertexShader from "../shaders/cloud/vertex";
import fragmentShader from "../shaders/cloud/fragment";
import { useFrame } from "@react-three/fiber";

function SmokeBackground() {
  const points = useRef();

  const count = 800;

  const uniforms = useMemo(
    () => ({
      diffuseTexture: {
        value: new THREE.TextureLoader().load("./images/smokeparticle.png"),
      },
      pointMultiplier: {
        value:
          window.innerHeight / (2.0 * Math.tan((0.5 * 60.0 * Math.PI) / 180.0)),
      },
      uTime: { value: 0.0 },

      uRadius: { value: 1.5 },
    }),
    []
  );

  const particlePosition = useMemo(() => {
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      let x = (Math.random() * 7 - 3.5) * 2.0;
      let y = (Math.random() * 7 - 3.5) * 2.0;
      let z = (Math.random() * 7 - 3.5) * 2.0;
      positions.set([x, y, z], i * 3);
    }

    return positions;
  }, [count]);

  useFrame((state) => {
    const { clock } = state;

    points.current.material.uniforms.uTime.value = clock.elapsedTime;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlePosition.length / 3}
          array={particlePosition}
          itemSize={3}
        />
        <bufferAttribute />
      </bufferGeometry>
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        blending={THREE.AdditiveBlending}
        depthTest={true}
        depthWrite={false}
        transparent={true}
        vertexColors={true}
      />
    </points>
  );
}

export default SmokeBackground;
