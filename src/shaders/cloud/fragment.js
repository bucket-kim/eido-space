const fragmentShader = `
uniform sampler2D diffuseTexture;

void main() {
  gl_FragColor = texture2D(diffuseTexture, gl_PointCoord);
  // gl_FragColor = vec4(0.0, 0.0, 1.0, 1.0);
}
`;

export default fragmentShader;
