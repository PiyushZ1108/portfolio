import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

function Stars(props) {
  const ref = useRef();
  
  // Generate random positions once
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }));
  
  // Check theme
  const [color, setColor] = useState('#0f92f0');
  
  useEffect(() => {
      const updateColor = () => {
          if (document.documentElement.classList.contains('dark')) {
              setColor('#ffffff');
          } else {
              setColor('#0f92f0'); 
          }
      };
      
      updateColor();
      const observer = new MutationObserver(updateColor);
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
      
      return () => observer.disconnect();
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      // Get mouse/pointer position (normalized -1 to 1)
      const { pointer } = state;
      
      // Calculate target rotation based on pointer position
      // Using a higher multiplier makes the rotation follow the cursor more aggressively
      const xTarget = -pointer.y * 0.5; // Tilt up/down
      const yTarget = pointer.x * 0.5;  // Pan left/right
      
      // Smoothly interpolate current rotation to target (dampening)
      // We add a continuous slow spin on Z for dynamism
      ref.current.rotation.x += (xTarget - ref.current.rotation.x) * delta * 2;
      ref.current.rotation.y += (yTarget - ref.current.rotation.y) * delta * 2;
      ref.current.rotation.z += delta * 0.05; // Subtle constant roll
      
      // Optional: Slight position shift to enhance the "following" 3D parallax effect
      ref.current.position.x += (pointer.x * 0.1 - ref.current.position.x) * delta * 2;
      ref.current.position.y += (pointer.y * 0.1 - ref.current.position.y) * delta * 2;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color={color}
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function InteractiveBackground() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
            <Canvas camera={{ position: [0, 0, 1] }}>
                 <Stars />
            </Canvas>
        </div>
    );
}
