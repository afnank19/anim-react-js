import React, { useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  const [rotation, setRotation] = useState();

  const mesh = useRef(null);
  useFrame((state, delta) => {
    mesh.current.rotation.z += delta  * 0.05
    mesh.current.rotation.x -= delta  * 0.05
    //mesh.current.position.y += delta * props.scrollYProg.get()
    //console.log(props.scrollYProg.get() * 0.8)
    setRotation(props.scrollYProg.get() * 2)
    console.log(rotation)
  })

  return (
    <group {...props} dispose={null}>
      <motion.mesh
        rotation-y={rotation}
        
        ref={mesh}
        castShadow
        receiveShadow
        geometry={nodes.Object_4.geometry}
        material={materials['Scene_-_Root']}
        scale={2.5}
      />
    </group>
  )
}

useGLTF.preload('/scene.gltf')

