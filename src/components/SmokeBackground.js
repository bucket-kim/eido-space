import React, { useMemo } from "react";
import * as THREE from "three";

function SmokeBackground() {
  const shaderMaterial = useMemo(() => {
    const uniforms = {
      diffuseTexture: {
        value: new THREE.TextureLoader().load("./images/smokeparticle.png"),
      },
    };
    const material = new THREE.ShaderMaterial({
      uniforms: { ...uniforms },
    });

    return material;
  }, []);

  return (
    <>
      <mesh material={shaderMaterial}></mesh>
    </>
  );
}

export default SmokeBackground;
