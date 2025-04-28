import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

export default function BackgroundParticles() {
  const points = Array.from({ length: 500 }).map(() => [
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
  ]);

  return (
    <Canvas style={{ position: 'absolute', zIndex: -1 }}>
      <Points>
        <PointMaterial color="#888" size={0.02} />
        {points.map((pos, i) => (
          <mesh key={i} position={pos} />
        ))}
      </Points>
    </Canvas>
  );
}
