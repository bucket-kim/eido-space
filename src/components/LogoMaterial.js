import { MeshTransmissionMaterial } from "@react-three/drei";
import React from "react";

const LogoMaterial = (props) => {
  return (
    <>
      <MeshTransmissionMaterial
        resolution={1024}
        distortion={0.25}
        thickness={1}
        color={"#ABB3B4"}
        anisotropy={0.5}
        // transparent={true}
        roughnessMap={props.roughnessMap}
        normalMap={props.normalMap}
        normalScale={0.5}
        metalness={props.metalness}
        toneMapped={false}
        transmission={1}
        alphaMap={props.emissionMap}
        ior={2.42}
        reflectivity={0.75}
        envMapIntensity={3}
      />
      {/* <meshPhysicalMaterial
        map={props.colorMap}
        metalnessMap={props.metalnessMap}
        roughnessMap={props.roughnessMap}
        transmission={1}
        thickness={2.42}
        ior={2.42}
        reflectivity={0.5}
        envMap={props.texture}
        envMapIntensity={3}
        clearcoat={1}
        transparent={true}
        clearcoatNormalScale={1}
        opacity={0.5}
        clearcoatNormalMap={props.normalMap}
        alphaMap={props.emissionMap}
        toneMapped={false}
      /> */}
      {/* <meshPhysicalMaterial
        color={props.color}
        envMap={props.envMap}
        metalnessMap={props.metalnessMap}
        roughnessMap={props.roughnessMap}
        normalMap={props.normalMap}
        normalScale={1}
        displacementMap={props.heightMap}
        envMapIntensity={props.envMapIntensity}
        onBeforeCompile={(shader) => {
          shader.uniforms.uTime = props.uTime;
          shader.uniforms.uShow = props.uShow;
          shader.uniforms.uColor = props.uColor;

          shader.vertexShader = shader.vertexShader.replace(
            "#ifdef USE_TRANSMISSION",
            `
                #ifdef USE_TRANSMISSION

              varying vec2 vUv;
              `
          );

          shader.vertexShader = shader.vertexShader.replace(
            "#endif",
            `
                vUv = uv;

                #endif
              `
          );

          shader.fragmentShader =
            `
                uniform vec3 uColor;

                uniform bool uShow;

                uniform float uTime;

              ` + shader.fragmentShader;

          shader.fragmentShader = shader.fragmentShader.replace(
            /void main\(\) {/,
            (match) =>
              `
              vec4 permute(vec4 x)
              {
                  return mod(((x*34.0)+1.0)*x, 289.0);
              }
              
                vec2 fade(vec2 t)
              {
                  return t*t*t*(t*(t*6.0-15.0)+10.0);
              }
              
              float cnoise(vec2 P)
              {
                  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
                  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
                  Pi = mod(Pi, 289.0); // To avoid truncation effects in permutation
                  vec4 ix = Pi.xzxz;
                  vec4 iy = Pi.yyww;
                  vec4 fx = Pf.xzxz;
                  vec4 fy = Pf.yyww;
                  vec4 i = permute(permute(ix) + iy);
                  vec4 gx = 2.0 * fract(i * 0.0243902439) - 1.0; // 1/41 = 0.024...
                  vec4 gy = abs(gx) - 0.5;
                  vec4 tx = floor(gx + 0.5);
                  gx = gx - tx;
                  vec2 g00 = vec2(gx.x,gy.x);
                  vec2 g10 = vec2(gx.y,gy.y);
                  vec2 g01 = vec2(gx.z,gy.z);
                  vec2 g11 = vec2(gx.w,gy.w);
                  vec4 norm = 1.79284291400159 - 0.85373472095314 * vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11));
                  g00 *= norm.x;
                  g01 *= norm.y;
                  g10 *= norm.z;
                  g11 *= norm.w;
                  float n00 = dot(g00, vec2(fx.x, fy.x));
                  float n10 = dot(g10, vec2(fx.y, fy.y));
                  float n01 = dot(g01, vec2(fx.z, fy.z));
                  float n11 = dot(g11, vec2(fx.w, fy.w));
                  vec2 fade_xy = fade(Pf.xy);
                  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
                  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
                  return 2.3 * n_xy;
              }
              ` + match
          );

          shader.fragmentShader = shader.fragmentShader.replace(
            "#include <dithering_fragment>",
            `
                #include <dithering_fragment>

                if(uShow) {

                  // float strength =  step(0.5, sin(cnoise((vUv + uTime) * 15.0) * 10.0));
  
                  // vec3 blackColor = vec3(0.75, 0.75 , 0.75);
  
                  // vec3 uvColor = vec3(1.0);
  
                  // vec3 mixColor = mix( uvColor, blackColor, strength);

  
                  gl_FragColor = vec4(uColor, 1.0);
                } 
              `
          );
        }}
      /> */}
    </>
  );
};

export default LogoMaterial;
