const vertexShader = `
uniform float uTime;
varying vec3 pos;
varying vec2 vUv;

varying float vZ;

#include <fog_pars_vertex>

void main() {
  #include <begin_vertex>
  #include <project_vertex>
  #include <fog_vertex>

  pos = position;
  vec3 p = position;

  vec4 modelPosition = modelMatrix * vec4(pos, 1.0);
  modelPosition.y += sin(modelPosition.x * uTime * 0.002) * 1.0;
  modelPosition.y += sin(modelPosition.z * uTime * 0.002 ) * 1.0;

  vZ = modelPosition.y;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectionPosition = projectionMatrix * viewPosition;

  gl_Position = projectionPosition;
  vUv = uv;
}
`;

export default vertexShader;
