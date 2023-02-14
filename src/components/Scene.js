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
          gl={{ antialias: true }}
          shadows
          camera={{
            fov: 45,
            position: [0, 1, 6],
          }}
        >
          <color args={[0x000000]} attach="background" />
          <ambientLight intensity={0.5} />
          <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
          <pointLight position={[-10, -10, -10]} />

          <Suspense>
            <Models />
          </Suspense>
          <Environment files="/images/royal_esplanade.hdr" backgroud={false} />
          <OrbitControls
            enabled={true}
            minPolarAngle={0}
            maxPolarAngle={Math.PI / 1.5}
            maxDistance={10}
            minDistance={1}
          />
          <EffectComposer>
            <Bloom
              mipmapBlur
              intensity={0.25}
              levels={9}
              luminanceThreshold={1}
              luminanceSmoothing={1}
            />
          </EffectComposer>

          {/* <Rig /> */}
        </Canvas>
      </div>
    </>
  );
};

export default Scene;
