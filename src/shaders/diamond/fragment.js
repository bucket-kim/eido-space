const fragmentShader = `
varying vec2 vUv;

uniform sampler2D colorMap;

void main() {

  gl_FragColor = texture2D(colorMap, vUv);
}

`;

export default fragmentShader;
