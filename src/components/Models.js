import { useGLTF } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader.js";
import * as THREE from "three";

const Models = (props) => {
  const { nodes } = useGLTF("/models/ethereum.glb");

  const colorMap = useLoader(TextureLoader, "/images/ethereum_BaseColor.png");
  const emissive = useLoader(TextureLoader, "/images/ethereum_Emissive.png");
  const height = useLoader(TextureLoader, "/images/ethereum_Height.png");
  const normal = useLoader(TextureLoader, "/images/ethereum_Normal.png");
  const roughness = useLoader(TextureLoader, "/images/ethereum_Roughness.png");
  const alpha = useLoader(TextureLoader, "/images/ethereum_Alpha.png");
  colorMap.encoding = THREE.sRGBEncoding;
  emissive.encoding = THREE.sRGBEncoding;

  colorMap.flipY = false;
  emissive.flipY = false;
  height.flipY = false;
  normal.flipY = false;
  roughness.flipY = false;
  alpha.flipY = false;

  return (
    <>
      <mesh castShadow geometry={nodes.ethereum_geo.geometry}>
        <meshStandardMaterial
          map={colorMap}
          emissiveMap={emissive}
          displacementMap={height}
          displacementScale={0.01}
          normalMap={normal}
          roughnessMap={roughness}
          alphaMap={alpha}
        />
      </mesh>
    </>
  );
};

export default Models;
