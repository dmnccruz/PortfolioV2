import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useRef } from 'react';
import { Html } from '@react-three/drei';
import '../styles/HeadModel.css';
import UseAnimations from 'react-useanimations';

function Model(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, './davidwithgoldbottomandeyes.gltf');

  useFrame(({ pointer }) => {
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * (Math.PI / 5),
      0.01
    );
    const x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * (Math.PI / 5),
      0.01
    );
    group.current.rotation.x = x <= 0.43 ? x : 0.43;
  });
  return (
    <group ref={group} {...props}>
      <mesh castShadow receiveShadow scale={[1, 1, 1]} dispose={null}>
        <primitive object={gltf.scene} scale={2} />
      </mesh>
      <Lights />
    </group>
  );
}

function Lights() {
  const groupL = useRef();
  const groupR = useRef();
  const front = useRef();
  useFrame(({ pointer }) => {
    groupL.current.rotation.y = THREE.MathUtils.lerp(
      groupL.current.rotation.y,
      -pointer.x * (Math.PI / 2),
      0.1
    );
    groupR.current.rotation.y = THREE.MathUtils.lerp(
      groupR.current.rotation.y,
      pointer.x * (Math.PI / 2),
      0.1
    );
    front.current.position.x = THREE.MathUtils.lerp(
      front.current.position.x,
      pointer.x * 12,
      0.05
    );
    front.current.position.y = THREE.MathUtils.lerp(
      front.current.position.y,
      7 + pointer.y * 4,
      0.05
    );
  });

  return (
    <>
      <group ref={groupL}>
        <pointLight position={[0, 7, -15]} distance={15} intensity={2} />
      </group>
      <group ref={groupR}>
        <pointLight position={[0, 7, -15]} distance={15} intensity={2} />
      </group>
      <pointLight
        ref={front}
        position={[50, -50, 10]}
        distance={15}
        intensity={10}
        decay={1}
        shadow={true}
      />
    </>
  );
}

function Zoom() {
  useFrame((state) => {
    state.camera.position.lerp({ x: 0, y: 0, z: 12 }, 0.005);
    state.camera.lookAt(0, 0, 0);
  });
}

const HeadModel = () => {
  return (
    <div
      className='HeadModel'
      style={{
        // background:
        // 'radial-gradient(circle, rgba(10,10,10,1) 0%, rgba(0,0,0,1) 35%)',
        // background: 'black',
        zIndex: 10,
      }}
    >
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 14], fov: 75 }}
        style={{ zIndex: 2 }}
      >
        <fog attach='fog' args={['black', 0, 20]} />
        <pointLight position={[0, 50, 180]} intensity={1} />
        <Suspense
          fallback={
            <Html center className='loader'>
              <UseAnimations
                animationKey='loading2'
                size={102}
                autoplay={true}
                strokeColor='rgb(50, 50, 50)'
                fillColor='rgb(50, 50, 50)'
                style={{ marginBottom: '200px' }}
              />
            </Html>
          }
        >
          <Model position={[0, -2, 0]} rotation={[0, -0.2, 0]} />
          <Zoom />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HeadModel;
