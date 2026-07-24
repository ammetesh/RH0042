import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

export default function ParticleField() {

    const points = useRef<THREE.Points>(null);

    const positions = useMemo(() => {

        const array = new Float32Array(3000 * 3);

        for (let i = 0; i < 3000; i++) {

            const radius = 5 + Math.random() * 8;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);

            array[i * 3] =
                radius * Math.sin(phi) * Math.cos(theta);

            array[i * 3 + 1] =
                radius * Math.sin(phi) * Math.sin(theta);

            array[i * 3 + 2] =
                radius * Math.cos(phi);

        }

        return array;

    }, []);

    useFrame((state) => {

        if (!points.current) return;

        points.current.rotation.y += 0.0005;
        points.current.rotation.x += 0.0002;

        const material = points.current.material as THREE.PointsMaterial;

        material.opacity =
            0.65 + Math.sin(state.clock.elapsedTime * 0.8) * 0.15;

    });

    return (

        <points ref={points}>

            <bufferGeometry>

                <bufferAttribute
                    attach="attributes-position"
                    count={positions.length / 3}
                    array={positions}
                    itemSize={3}
                />

            </bufferGeometry>

            <pointsMaterial
                color="#C084FC"
                size={0.035}
                transparent
                opacity={0.7}
                depthWrite={false}
            />

        </points>

    );

}
