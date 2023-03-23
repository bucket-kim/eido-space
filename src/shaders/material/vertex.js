const vertexShader = `
  varying vec2 vUv;

  varying vec3 vNormal;

  varying vec3 vPosition;

  void main() 
  {
    vUv = uv;

    vec4 modelPosition = modelMatrix * vec4(position, 1.0);

    gl_Position = projectionMatrix * viewMatrix * modelPosition;

    vNormal = (modelMatrix * vec4(normal, 0.0)).xyz;

    vPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  }

`;

export default vertexShader;
