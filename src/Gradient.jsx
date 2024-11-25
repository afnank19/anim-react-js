import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

const GradientShader = () => {
  const materialRef = useRef();

  useFrame(({ clock }) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
    }
  });

  const shader = {
    uniforms: {
      uResolution: { value: [window.innerWidth, window.innerHeight] },
      uTime: { value: 0 },
    },
    vertexShader: `
        void main() {
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
    fragmentShader: `
uniform float uTime;
uniform vec2 uResolution;

vec3 palette(in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d) {
    return a + b * cos(6.28318 * (c * t + d));
}

void main() {
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = gl_FragCoord.xy / uResolution.xy;

    // Adjust coordinates to preserve aspect ratio
    vec2 aspectRatio = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 adjustedUV = (uv - vec2(0.5, 0.5)) * aspectRatio;

    // Circle parameters
    float radius = 0.01; // Circle radius
    float edgeSoftness = 0.6; // Smoothness of the circle edges

    // Distance from the center of the circle
    float dist = length(adjustedUV);

    // Smooth step to create a smooth circular fade-out
    float mask = smoothstep(radius, radius + edgeSoftness, dist);

    // Animated patterns
    float time = uTime * 0.2;
    vec2 c1 = vec2(sin(time) * 0.5, cos(uTime) * 0.7);
    vec2 c2 = vec2(sin(time * 0.7) * 0.9, cos(uTime * 0.65) * 0.6);

    float d1 = length(uv - c1);
    vec3 col1 = palette(d1 + time, vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.263, 0.416, 0.557));

    float d2 = length(uv - c2);
    vec3 col2 = palette(d2 + time, vec3(0.5, 0.5, 0.5), vec3(0.5, 0.5, 0.5), vec3(1.0, 1.0, 1.0), vec3(0.263, 0.416, 0.557));    

    vec3 color = (col1) / 2.0;

    // Apply the mask to the color, with smooth edges
    gl_FragColor = vec4(color * (1.0 - mask), 1.0);
}
      `,
  };

  return (
    <mesh>
      <planeGeometry args={[30, 20]} />
      <shaderMaterial ref={materialRef} args={[shader]} />
    </mesh>
  );
};

const Gradient = () => (
  <div className="earth">
    <Canvas>
      <GradientShader />
    </Canvas>
  </div>
);

export default Gradient;
