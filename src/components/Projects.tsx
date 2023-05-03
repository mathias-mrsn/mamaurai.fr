import { Tubes } from '@/graphics/tubes';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei'

export const Projects = () => {

    useEffect(() => {

    })

    return (
    <>
        <div className='bg-black w-full h-full absolute top-0 left-0 flex justify-center items-center'>
            <div id='container' className='relative w-full h-full scale-50 bg-yellow-400'>
                <Canvas camera={{position: [6, -5, 10]}}>
                    {/* <Scene scale={1} /> */}
                    <ambientLight intensity={0.1} />
                    <directionalLight color="red" position={[0, 0, 5]} />
                    <mesh>
                        <boxGeometry args={[2, 2, 2]}/>
                        <meshStandardMaterial />
                    </mesh>

                    <OrbitControls makeDefault />
                </Canvas>
            </div>
        </div>
    </>
    )
}
