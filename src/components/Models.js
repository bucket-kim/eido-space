// import { useGLTF } from "@react-three/drei";
// import { useLoader } from "@react-three/fiber";
// import { TextureLoader } from "three/src/loaders/TextureLoader.js";
// import * as THREE from "three";
// import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

// const Models = (props) => {
//   const { nodes } = useGLTF("/models/ethereum.glb");

//   const colorMap = useLoader(
//     TextureLoader,
//     "/images/crystal/ethereum_BaseColor.png"
//   );
//   const emissive = useLoader(
//     TextureLoader,
//     "/images/crystal/ethereum_Emissive.png"
//   );
//   const height = useLoader(
//     TextureLoader,
//     "/images/crystal/ethereum_Height.png"
//   );
//   const normal = useLoader(
//     TextureLoader,
//     "/images/crystal/ethereum_Normal.png"
//   );
//   const roughness = useLoader(
//     TextureLoader,
//     "/images/crystal/ethereum_Roughness.png"
//   );
//   const alpha = useLoader(TextureLoader, "/images/crystal/ethereum_Alpha.png");
//   colorMap.encoding = THREE.sRGBEncoding;
//   emissive.encoding = THREE.sRGBEncoding;

//   const texture = useLoader(RGBELoader, "/images/smallStudio.hdr");

//   colorMap.flipY = false;
//   emissive.flipY = false;
//   height.flipY = false;
//   normal.flipY = false;
//   roughness.flipY = false;
//   alpha.flipY = false;

//   return (
//     <>
//       <mesh castShadow geometry={nodes.ethereum_geo.geometry}>
//         <meshPhysicalMaterial
//           ior={2.42}
//           reflectivity={1.5}
//           map={colorMap}
//           color={"#ffffff"}
//           emissiveMap={emissive}
//           displacementMap={height}
//           displacementScale={0.01}
//           transparent={true}
//           normalMap={normal}
//           roughnessMap={roughness}
//           alphaMap={alpha}
//           toneMapped={false}
//           // envMap={texture}
//         />
//       </mesh>
//     </>
//   );
// };

// export default Models;

import {
  Caustics,
  CubeCamera,
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
  useGLTF,
} from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import { useControls } from "leva";
import EidolonBlock from "./EidolonBlock";
import * as THREE from "three";

const Models = (props) => {
  const ref = useRef();

  const texture = useLoader(RGBELoader, "/images/royal_esplanade.hdr");
  texture.mapping = THREE.EquirectangularRefractionMapping;

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.5;
  });

  return (
    <CubeCamera resolution={256} frames={1} envMap={texture}>
      {(texture) => (
        <Caustics
          backfaces
          color={"white"}
          lightSource={[0, 0, 0]}
          worldRadius={0.1}
          ior={2.42}
          backfaceIor={1.1}
          intensity={0.1}
        >
          <group position={[0, -2.5, 0]} scale={2} ref={ref}>
            <EidolonBlock
              texture={texture}
              position={[0.396422, 0.195501, 0]}
            />
            <EidolonBlock
              texture={texture}
              position={[-0.388236, 0.595516, 0]}
            />
            <EidolonBlock
              texture={texture}
              position={[0.396422, 0.977503, 0]}
            />
            <EidolonBlock texture={texture} position={[-0.388236, 1.3685, 0]} />
            <EidolonBlock texture={texture} position={[0.396422, 1.75951, 0]} />
          </group>
        </Caustics>
      )}
    </CubeCamera>

    // <>
    //   <group position={[0, -1.5, 0]} scale={1.5}>
    //     <EidolonBlock position={[0.396422, 0.195501, 0]} />
    //     <EidolonBlock position={[-0.388236, 0.595516, 0]} />
    //     <EidolonBlock position={[0.396422, 0.977503, 0]} />
    //     <EidolonBlock position={[-0.388236, 1.3685, 0]} />
    //     <EidolonBlock position={[0.396422, 1.75951, 0]} />
    //   </group>
    // </>
  );
};

export default Models;
