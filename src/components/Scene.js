import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import "../App.css";
import * as THREE from "three";
import Models from "./Models";
import { Suspense } from "react";

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
    <div className="scene">
      <Canvas
        gl={{ antialias: true }}
        shadows
        camera={{
          fov: 45,
          near: 0.1,
          far: 1000,
          position: [0, 0, 6],
        }}
      >
        <OrbitControls
          enabled={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.5}
          maxDistance={10}
          minDistance={1}
        />
        <Environment preset="warehouse" background={false} />
        <pointLight
          name="Point Light"
          intensity={4}
          decay={20}
          distance={4222}
          color="#ada3fe"
          position={[-10, 10, 10]}
        />
        <directionalLight
          name="Directional Light"
          castShadow
          intensity={0.5}
          color="#ffffff"
          position={[-1, 6, 1]}
        />
        <Suspense>
          <Models />
        </Suspense>
        <mesh
          rotation={[-Math.PI / 2, 0, 0]}
          receiveShadow
          position={[0, -0.65, 0]}
          scale={100}
        >
          <planeGeometry />
          <shadowMaterial opacity={0.2} />
        </mesh>
        {/* <Rig /> */}
      </Canvas>
    </div>
  );
};

export default Scene;
