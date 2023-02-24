import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "../App.css";
import * as THREE from "three";
import Models from "./Models";
import { Suspense, useRef, useState } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const Rig = () => {
  const { camera, mouse } = useThree();

  const vec = new THREE.Vector3();
  camera.lookAt(0, 0.5, 0);
  return useFrame(() =>
    camera.position.lerp(
      vec.set(mouse.x * 0.1, mouse.y * 0.1, camera.position.z),
      0.02
    )
  );
};

const Scene = (props) => {
  return (
    <>
      <div className="scene">
        <Canvas
          gl={{ antialias: true }}
          shadows
          camera={{
            fov: 45,
            position: [0, 1, 6],
          }}
        >
          <color args={[0x000000]} attach="background" />
          <directionalLight
            castShadow
            position={[-30, 15, 5]}
            intensity={1}
            shadow-mapSize-height={2048}
            shadow-mapSize-width={2048}
          />
          {/* <pointLight position={[-20, 5, 0]} intensity={0.5} /> */}

          <Suspense>
            <Models />
          </Suspense>
          {/* <Environment files="/images/royal_esplanade.hdr" background={false} /> */}
          <Environment files="/images/studio.hdr" background={false} />
          <OrbitControls
            enabled={true}
            minPolarAngle={0}
            // maxPolarAngle={Math.PI / 1.5}
            maxDistance={8}
            minDistance={3}
          />

          {/* <Rig /> */}
        </Canvas>
      </div>
    </>
  );
};

export default Scene;
