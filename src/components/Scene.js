import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "../App.css";
import * as THREE from "three";
import Models from "./Models";
import { Suspense } from "react";
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
          gl={{
            antialias: true,
            outputEncoding: THREE.sRGBEncoding,
            toneMappingExposure: 1.25,
          }}
          shadows
          camera={{
            fov: 45,
            position: [0, 1, 6],
          }}
        >
          <color args={[0x000000]} attach="background" />
          {/* <directionalLight
            castShadow
            position={[5, 20, 10]}
            intensity={1}
            shadow-mapSize-height={2048}
            shadow-mapSize-width={2048}
          /> */}
          {/* <hemisphereLight
            skyColor={0x000000}
            groundColor={0x000000}
            intensity={0.5}
          /> */}
          {/* <rectAreaLight
            width={3}
            height={3}
            position={[2, -0.5, 7]}
            lookAt={[0, 0, 0]}
            intensity={2.5}
            penumbra={2}
          /> */}
          <Suspense>
            <Models />
            <EffectComposer>
              <Bloom
                luminanceThreshold={1}
                intensity={0.2}
                levels={9}
                mipmapBlur
              />
            </EffectComposer>
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
