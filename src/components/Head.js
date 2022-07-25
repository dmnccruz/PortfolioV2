import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useRef } from 'react';
import { Html } from '@react-three/drei';
import '../styles/Head.css';

function Model(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, './loomis/scene.gltf');

  useFrame(({ pointer }) => {
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      pointer.x * (Math.PI / 5),
      0.01
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -pointer.y * (Math.PI / 5),
      0.01
    );
  });
  return (
    <group ref={group} {...props}>
      <mesh castShadow receiveShadow scale={[1, 1, 1]} dispose={null}>
        <primitive object={gltf.scene} scale={1} />
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
      <spotLight
        castShadow
        ref={front}
        penumbra={0.75}
        angle={Math.PI / 4}
        position={[0, 0, 8]}
        distance={10}
        intensity={1}
        shadow-mapSize={[2048, 2048]}
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

const Head = () => {
  return (
    <div
      className='Head'
      style={{
        background:
          'radial-gradient(circle, rgba(50,50,50,1) 0%, rgba(0,0,0,1) 35%)',
      }}
    >
      <Canvas shadows camera={{ position: [0, 1.5, 14], fov: 75 }}>
        {/* <fog attach='fog' args={['black', 0, 20]} /> */}
        <pointLight position={[0, 10, -180]} intensity={10} />
        <pointLight position={[0, 50, 180]} intensity={0.05} />
        <Suspense
          fallback={
            // TODO: ADD LOADER
            <Html center className='loader'>
              LOADING
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

export default Head;

// import { Canvas, useFrame } from '@react-three/fiber';
// import { useLoader } from '@react-three/fiber';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// import { Suspense, useEffect, useRef } from 'react';
// import { Environment, PresentationControls } from '@react-three/drei';
// import '../styles/Head.css';

// const Model = () => {
//   const gltf = useLoader(GLTFLoader, './loomis/scene.gltf');
//   const rotateMesh = useRef();

//   useFrame((props) => {
//     console.log(props);
//     console.log(rotateMesh.current);
//     // rotate horizontal
//     const rotateSpeed = Math.sin(props.clock.getElapsedTime()) / 2;
//     rotateMesh.current.rotation.y = rotateSpeed;
//     // follow mouse
//     // rotateMesh.current.rotation.y = props.mouse.x;
//     // rotateMesh.current.rotation.x = -props.mouse.y;
//   });

//   return (
//     <mesh ref={rotateMesh}>
//       <primitive object={gltf.scene} scale={0.5} />
//     </mesh>
//   );
// };

// const Head = () => {
//   useEffect(() => {}, []);
//   return (
//     <div
//       className='Head'
//       style={{
//         background: 'white',
//       }}
//     >
//       <Canvas>
//         <Suspense fallback={null}>
//           <PresentationControls
//             global={false} // Spin globally or by dragging the model
//             cursor={true} // Whether to toggle cursor style on drag
//             snap={false} // Snap-back to center (can also be a spring config)
//             speed={0.5} // Speed factor
//             zoom={1} // Zoom factor when half the polar-max is reached
//             rotation={[-50, 0, 0]} // Default rotation
//             // polar={[Math.PI / 10, Math.PI / 10]} // Vertical limits
//             polar={[-0.5, 0.5]} // Vertical limits
//             // azimuth={[-Infinity, Infinity]} // Horizontal limits
//             azimuth={[-0.75, 0.75]} // Horizontal limits
//             config={{ mass: 1, tension: 1000, friction: 26 }} // Spring config
//           >
//             <Model />
//             <Environment preset='sunset' background={false} />
//           </PresentationControls>
//         </Suspense>
//       </Canvas>
//     </div>
//   );
// };

// export default Head;
