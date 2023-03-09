const vertexShader = /* glsl */ `
uniform float pointMultiplier;

uniform float uTime;

uniform float uRadius;

mat3 rotation3dY(float angle) {
  float s = sin(angle);
  float c = cos(angle);
  return mat3(
    c, 0.0, -s,
    0.0, 1.0, 0.0,
    s, 0.0, c
  );
}

void main() {
  float distanceFactor = pow(uRadius - distance(position, vec3(0.0)), 2.0);
  float size = distanceFactor * 0.0025;

  vec3 particlePosition = position * rotation3dY(uTime * 0.0005 * distanceFactor);

  vec4 modelPosition = modelMatrix * vec4(particlePosition, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;

  gl_PointSize = size;

  gl_PointSize *= pointMultiplier / gl_Position.w;
}
`;

export default vertexShader;
