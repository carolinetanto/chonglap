import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { extend } from '@react-three/fiber';
import { BufferGeometry } from 'three';
extend({ BufferGeometry });

const AnimatedMeshBackground = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
        meshRef.current.rotation.set(0, Math.PI / 2, 0);
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxBufferGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

export default AnimatedMeshBackground;