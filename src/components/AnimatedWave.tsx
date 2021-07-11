import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { MeshProps } from '@react-three/fiber/dist/declarations/src/three-types'

function Particle({ row, col }) {
    const mesh = useRef<MeshProps>(null);

    useFrame(({ clock }) => {
        if (mesh.current) {
            mesh.current.position.y = (Math.sin((row + clock.getElapsedTime()) * 0.3) * 50) + (Math.sin((col + clock.getElapsedTime()) * 0.5) * 50);
            mesh.current.scale.x = mesh.current.scale.y = (Math.sin((row + clock.getElapsedTime()) * 0.3) + 1) * 4 + (Math.sin((col + clock.getElapsedTime()) * 0.5) + 1) * 4;
        }
    })

    return (
        <mesh ref={mesh} position={[(20 - row) * 100, 0, (20 - col) * 100]}>
            <sphereBufferGeometry args={[0.5, 4, 4]}/>
            <meshBasicMaterial color="white"/>
        </mesh>
    )
}

export default function AnimatedWave() {

    const coords: JSX.Element[] = [];
    for (let x = 0; x < 40; x++) {
        for (let y = 0; y < 40; y++) {
            coords.push(<Particle row={x} col={y}/>)
        }
    }

    return (
        <Canvas camera={{ fov: 30, near: 1, far: 10000, position: [1000, 200, 2000] }}>
            {coords}
        </Canvas>
    )
}
