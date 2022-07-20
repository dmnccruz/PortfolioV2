import { Canvas, useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense, useRef } from 'react';
import {
  Environment,
  OrbitControls,
  PresentationControls,
} from '@react-three/drei';

const Model = () => {
  const gltf = useLoader(GLTFLoader, './loomis/scene.gltf');
  const rotateMesh = useRef();

  useFrame(({ clock }) => {
    const rotateSpeed = Math.sin(clock.getElapsedTime()) / 2;
    // const rotateSpeed = clock.getElapsedTime() / 10;
    rotateMesh.current.rotation.y = rotateSpeed;
  });

  return (
    <mesh ref={rotateMesh}>
      <primitive object={gltf.scene} scale={0.5} />
    </mesh>
  );
};

const App = () => {
  return (
    <div
      className='App'
      style={{
        background: 'white',
        height: '100%',
        width: '100%',
      }}
    >
      <Canvas>
        <Suspense fallback={null}>
          <PresentationControls
            global={false} // Spin globally or by dragging the model
            cursor={true} // Whether to toggle cursor style on drag
            snap={false} // Snap-back to center (can also be a spring config)
            speed={1} // Speed factor
            zoom={1} // Zoom factor when half the polar-max is reached
            rotation={[0, 0, 0]} // Default rotation
            polar={[Math.PI / 10, Math.PI / 10]} // Vertical limits
            azimuth={[-Infinity, Infinity]} // Horizontal limits
            config={{ mass: 1, tension: 1000, friction: 26 }} // Spring config
          >
            <Model />
            {/* <OrbitControls /> */}
            <Environment preset='sunset' background={false} />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default App;
