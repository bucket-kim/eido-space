import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "../App.css";
import * as THREE from "three";
import Models from "./Models";
import { Suspense, useEffect, useRef } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import SmokeBackground from "./SmokeBackground";
import Grid from "./Grid";

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

const Scene = () => {
  return (
    <>
      <div className="scene">
        <Canvas
          gl={{
            antialias: true,
            outputEncoding: THREE.sRGBEncoding,
            toneMappingExposure: 1.25,
            alpha: false,
          }}
          shadows
          camera={{
            fov: 45,
            position: [0, 1, 6],
            far: 10000,
            near: 0.01,
          }}
        >
          <color args={[0x000000]} attach="background" />

          <Suspense>
            <Models />
            <EffectComposer>
              <Bloom
                luminanceThreshold={1}
                intensity={0.25}
                levels={9}
                mipmapBlur
              />
            </EffectComposer>
            <SmokeBackground />
            <Grid />
            {/* <gridHelper args={[100, 100]} position={[0, -8, 0]} /> */}
          </Suspense>
          <Environment files="/images/royal_esplanade.hdr" background={false} />
          <OrbitControls
            enabled={true}
            minPolarAngle={0}
            maxDistance={10}
            minDistance={2}
          />

          {/* <Rig /> */}
        </Canvas>
      </div>
    </>
  );
};

export default Scene;
