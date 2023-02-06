import { Caustics, CubeCamera } from "@react-three/drei";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";
import EidolonBlock from "./EidolonBlock";
import * as THREE from "three";
import { motion } from "framer-motion-3d";

const Models = (props) => {
  const ref = useRef();
  const [hover, isHover] = useState(false);

  const texture = useLoader(RGBELoader, "/images/royal_esplanade.hdr");
  texture.mapping = THREE.EquirectangularRefractionMapping;
  texture.encoding = THREE.sRGBEncoding;

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 0.1;
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
          <motion.group
            position={[0, -2.5, 0]}
            // scale={2}
            ref={ref}
            initial={false}
            animate={hover ? "hover" : "rest"}
            variants={{
              hover: { scale: 2.25 },
              rest: { scale: 2 },
              press: { scale: 2.5 },
            }}
            onHoverStart={() => {
              isHover(true);
            }}
            onHoverEnd={() => {
              isHover(false);
            }}
          >
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
          </motion.group>
        </Caustics>
      )}
    </CubeCamera>
  );
};

export default Models;
