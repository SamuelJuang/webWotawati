import React, { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { OrbitControls, useHelper } from '@react-three/drei';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';

const CameraControls = () => {
  const controlsRef = useRef();
  const cameraRef = useRef();

  useFrame((state) => {
    controlsRef.current.update();
  });

  return (
    <>
      <perspectiveCamera
        ref={cameraRef}
        position={[0, 2, 5]}
        fov={75}
        near={0.1}
        far={1000}
        makeDefault
      />
      <OrbitControls
        ref={controlsRef}
        target={[0, 0.5, 0]}
        enablePan={false}
        enableDamping={true}
      />
    </>
  );
};

const Model = () => {
    const gltf = useLoader(GLTFLoader, '/src/assets/terrain.glb');

  
    return <primitive object={gltf.scene} scale={5} />;
  };


const Cube = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[2.5, 8, 5]}
        intensity={1}
        castShadow
      />
      <pointLight position={[-5, 5, -5]} intensity={0.5} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        intensity={1}
        castShadow
      />
      <CameraControls />
      <Suspense fallback={null}>
        <Model/>
      </Suspense>
    </Canvas>
  );
};

export default Cube;  