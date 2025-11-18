import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

function PencilModel() {
  const { scene } = useGLTF("/models/pencil.glb");

  useEffect(() => {
    if (scene) {
      scene.rotation.y = Math.PI; // rotate only after load
    }
  }, [scene]);

  return <primitive object={scene} scale={0.5} />;
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 1, 5] }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[5, 5, 5]} />
      <Suspense fallback={null}>
        <PencilModel />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}
