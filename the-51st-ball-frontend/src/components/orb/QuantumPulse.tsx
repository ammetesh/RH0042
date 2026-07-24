import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useRef } from "react";
import { useQuantumBurst } from "../../hooks/useQuantumBurst";

export default function QuantumPulse() {

    const mesh = useRef<Mesh>(null);

    const burst = useQuantumBurst((s) => s.burst);

    useFrame(() => {

        if (!mesh.current) return;

        if (burst <= 0) {

            mesh.current.visible = false;
            return;

        }

        mesh.current.visible = true;

        mesh.current.scale.x += 0.12;
        mesh.current.scale.y += 0.12;
        mesh.current.scale.z += 0.12;

        const material = mesh.current.material as any;

        material.opacity *= 0.94;

    });

    return (

        <mesh ref={mesh} visible={false}>

            <sphereGeometry args={[1, 32, 32]} />

            <meshBasicMaterial
                color="#A855F7"
                transparent
                opacity={0.5}
                wireframe
            />

        </mesh>

    );

}
