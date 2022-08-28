import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import '../styles/HandModel.css';
import UseAnimations from 'react-useanimations';

function Model(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, './hand/hand.gltf');
  const gltf2 = useLoader(GLTFLoader, './hand2/hand2.gltf');

  const leftHand = useRef();
  const rightHand = useRef();

  useFrame(({ clock }) => {
    const rotateSpeed = Math.cos(clock.getElapsedTime()) / 20;
    group.current.rotation.y = rotateSpeed - 0.1;
  });

  useFrame(() => {
    leftHand.current.position.x = THREE.MathUtils.lerp(
      leftHand.current.position.x,
      props.handShake ? -1.5 : props.windowSize < 800 ? -3.2 : -4.5,
      0.05
    );
    rightHand.current.position.x = THREE.MathUtils.lerp(
      rightHand.current.position.x,
      props.handShake ? 1 : props.windowSize < 800 ? 2.2 : 4,
      0.05
    );
  });

  return (
    <group ref={group} {...props} position={[0.5, -2, 0]} rotation={[0, 0, 0]}>
      <mesh
        ref={leftHand}
        castShadow
        receiveShadow
        scale={[1, 1, 1]}
        dispose={null}
        position={[-4.5, props.windowSize < 800 ? 5 : 3, 0]}
        rotation={[1, 0, 0]}
      >
        <primitive
          object={gltf.scene}
          scale={props.windowSize < 800 ? 0.05 : 0.075}
        />
      </mesh>
      <mesh
        ref={rightHand}
        castShadow
        receiveShadow
        scale={[1, 1, 1]}
        dispose={null}
        position={[4, props.windowSize < 800 ? 5.2 : 3.2, -1]}
        rotation={[2, 0, 3]}
      >
        <primitive
          object={gltf2.scene}
          scale={props.windowSize < 800 ? 0.05 : 0.075}
        />
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
        decay={0}
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

const HandModel = ({ handShake, windowSize }) => {
  return (
    <div className='HandModel'>
      <Canvas
        shadows
        camera={{ position: [0, 1.5, 14], fov: 90 }}
        style={{ zIndex: 2 }}
      >
        {/* <fog attach='fog' args={['black', 0, 20]} /> */}
        <pointLight position={[0, 50, 180]} intensity={10} />
        <Suspense
          fallback={
            <Html center className='loader'>
              <UseAnimations
                animationKey='infinity'
                size={102}
                autoplay={true}
                strokeColor='rgb(50, 50, 50)'
                fillColor='rgb(50, 50, 50)'
                style={{ marginBottom: '200px' }}
              />
            </Html>
          }
        >
          <Model
            position={[0, -2, 0]}
            rotation={[0, -0.2, 0]}
            handShake={handShake}
            windowSize={windowSize}
          />
          <Zoom />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default HandModel;
