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
        precision highp float;
  
        uniform vec2 uResolution;
        uniform float uTime;
  
        vec3 calc(float x, vec3 a, vec3 b, vec3 c, vec3 d) {
            return (b - d) * sin(1.0 / (vec3(x) / c + 2.0 / radians(180.0) - a)) + d;
        }
  
        void main() {
            vec2 uv = gl_FragCoord.xy / uResolution.xy;
  
            vec3 p_dark[4] = vec3[4](
                vec3(0.3720705374951474, 0.3037080684557225, 0.26548632969565816),
                vec3(0.446163834012046, 0.39405890487346595, 0.425676737673072),
                vec3(0.16514907579431481, 0.40461292460006665, 0.8799446225003938),
                vec3(-7.057075230154481e-17, -0.08647963850488945, -0.269042973306185)
            );
  
            vec3 p_bright[4] = vec3[4](
                vec3( 0.38976745480184677, 0.31560358280318124,  0.27932656874),
                vec3( 1.2874522895367628,  1.0100154283349794,   0.862325457544),
                vec3( 0.12605043174959588, 0.23134451619328716,  0.526179948359),
                vec3(-0.0929868539256387, -0.07334463258550537, -0.192877259333)
            );
  
            float x = 0.3 + 0.7 * sin(uv.x * radians(60.0) + (uTime / 2.0 - 4.0) * radians(30.0));
  
            vec3 a = mix(p_dark[0], p_bright[0], x);
            vec3 b = mix(p_dark[1], p_bright[1], x);
            vec3 c = mix(p_dark[2], p_bright[2], x);
            vec3 d = mix(p_dark[3], p_bright[3], x);
  
            vec3 col = calc(uv.y, a, b, c, d);
            gl_FragColor = vec4(col, 1.0);
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
