import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, Loader, OrbitControls } from '@react-three/drei';
import './App.css';

import Model from '../public/Model'
import { Bloom, BrightnessContrast, EffectComposer, HueSaturation} from '@react-three/postprocessing';

export default function Earth(props) {
    return (
      <>
        <div className='earth'>
            <Canvas >
              <ambientLight intensity={0.02}/>
              <directionalLight position={[2,2,1]} intensity={2.5} />
              {/* <spotLight position={[1,1,1]} intensity={2.5} /> */}
              <OrbitControls enableZoom={false}/>
              <Suspense fallback={null}>
                  <Model scrollYProg={props.scrollY} test={50}/>
              </Suspense>
              <EffectComposer>
                  <Bloom luminanceThreshold={0.1} luminanceSmoothing={0.9} height={300} intensity={3.5}></Bloom>
                  <HueSaturation saturation={-1} />
                  <BrightnessContrast contrast={0.4} brightness={0.05}/>
              </EffectComposer>
            </Canvas>
        </div>
      </>
    )
  }