import { Mesh } from "three";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useQuantumBurst } from "../../hooks/useQuantumBurst";

export default function GlowSphere() {

    const mesh = useRef<Mesh>(null);

    const triggerBurst = useQuantumBurst((s) => s.triggerBurst);

    useFrame((state) => {

        if (!mesh.current) return;

        mesh.current.rotation.y += 0.002;

        const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.03;

        mesh.current.scale.set(scale, scale, scale);

    });

    return (

        <mesh
            ref={mesh}
            onClick={triggerBurst}
        >

            <icosahedronGeometry args={[1, 5]} />

            <meshStandardMaterial
                color="#A855F7"
                emissive="#7C3AED"
                emissiveIntensity={3}
                metalness={0.2}
                roughness={0.15}
            />

        </mesh>

    );

}
