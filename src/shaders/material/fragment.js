const fragmentShader = `
varying vec2 vUv;

varying vec3 vNormal;

varying vec3 vPosition;

uniform sampler2D uBaseColor;
uniform sampler2D uRoughness;

uniform samplerCube uSpecMap;

float inverseLerp(float v, float minValue, float maxValue) {
  return (v- minValue) / (maxValue - minValue);
}

float remap(float v, float inMin, float inMax, float outMin, float outMax) {
  float t = inverseLerp(v, inMin, inMax);
  return mix(outMin, outMax, t);
}


  void main()
  {
    vec3 baseColor = vec3(0.5);
    vec3 lighting = vec3(0.0);
    vec3 normal = normalize(vNormal);
    vec3 viewDir = normalize(cameraPosition - vPosition);

    // ambient lighting
    vec3 ambient = vec3(0.5);

    // hemi lighting
    vec3 skyColor = vec3(0.0, 0.3, 0.5);
    vec3 groundColor = vec3(0.6, 0.3, 0.1);

    float hemiMix = remap(normal.y, -1.0, 1.0, 0.0, 1.0);
    vec3 hemi = mix(groundColor, skyColor, hemiMix);

    // diffuse lighting
    vec3 lightDir = normalize(vec3(1.0, 1.0, 1.0));
    vec3 lightColor = vec3(1.0, 1.0, 0.9);
    float dp = max(0.0, dot(lightDir, normal));

    vec3 diffuse = dp * lightColor;

    // phong specular
    vec3 r = normalize(reflect(-lightDir, normal));
    float phongValue = max(0.0, dot(viewDir, r));
    phongValue = pow(phongValue, 32.0);

    vec3 specularSample = texture2D(uRoughness, vUv).xyz;

    vec3 specular = vec3(phongValue) ;

   

    // IBL spec
    vec3 iblCoord = normalize(reflect(-viewDir, normal));
    vec3 iblSample = textureCube(uSpecMap, iblCoord).xyz;

    specular += iblSample * 0.5;

    // fresnel
    float fresnel = 1.0 - max(0.0, dot(viewDir, normal));
    fresnel = pow(fresnel, 2.0);

    specular *= fresnel;

    lighting = ambient * 0.0  + hemi * 0.0 + diffuse * 1.0;

    vec3 diffuseSample = texture2D(uBaseColor, vUv).xyz;

    vec3 color = diffuseSample * lighting + specular;

    color = pow(color, vec3(1.0 / 2.2));



    gl_FragColor = vec4(color, 1.0);
    // gl_FragColor = diffuseSample;
    
  }
`;

export default fragmentShader;
