import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

export default function EnergyHalo() {

    const halo = useRef<THREE.Mesh>(null);

    useFrame((state) => {

        if (!halo.current) return;

        const t = state.clock.elapsedTime;

        const pulse = 1.25 + Math.sin(t * 1.2) * 0.05;

        halo.current.scale.setScalar(pulse);

        halo.current.rotation.y += 0.0015;
        halo.current.rotation.x += 0.0008;

    });

    return (

        <mesh ref={halo}>

            <sphereGeometry args={[1.45,64,64]} />

            <MeshDistortMaterial
                color="#8B5CF6"
                transparent
                opacity={0.18}
                distort={0.65}
                speed={2}
            />

        </mesh>

    );

}
