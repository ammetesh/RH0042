import { useFrame } from "@react-three/fiber";
import { Line, Trail } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

type OrbitProps = {
    radius: number;
    speed: number;
    rotation: [number, number, number];
    color: string;
    offset: number;
};

export default function Orbit({
    radius,
    speed,
    rotation,
    color,
    offset,
}: OrbitProps) {

    const electron = useRef<THREE.Mesh>(null);

    const points = useMemo(() => {

        const pts: [number, number, number][] = [];

        for (let i = 0; i <= 256; i++) {

            const a = (i / 256) * Math.PI * 2;

            pts.push([
                Math.cos(a) * radius,
                Math.sin(a) * radius,
                0,
            ]);

        }

        return pts;

    }, [radius]);

    useFrame((state) => {

        if (!electron.current) return;

        const t = state.clock.elapsedTime * speed + offset;

        electron.current.position.set(
            Math.cos(t) * radius,
            Math.sin(t) * radius,
            0
        );

    });

    return (

        <group rotation={rotation}>

            <Line
                points={points}
                color={color}
                transparent
                opacity={0.18}
                lineWidth={1.2}
            />

            <Trail
                width={0.5}
                length={2.8}
                color={color}
                attenuation={(t) => t * t}
            >
                <mesh ref={electron}>

                    <sphereGeometry args={[0.08,32,32]} />

                    <meshBasicMaterial
                        color={color}
                    />

                </mesh>
            </Trail>

        </group>

    );

}
