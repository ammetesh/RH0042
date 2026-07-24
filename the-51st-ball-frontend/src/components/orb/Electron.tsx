import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type ElectronProps = {
    radius: number;
    speed: number;
    offset: number;
    color: string;
};

export default function Electron({
    radius,
    speed,
    offset,
    color,
}: ElectronProps) {

    const ref = useRef<THREE.Mesh>(null);

    useFrame((state) => {

        if (!ref.current) return;

        const t = state.clock.elapsedTime * speed + offset;

        ref.current.position.x = Math.cos(t) * radius;
        ref.current.position.z = Math.sin(t) * radius;
        ref.current.position.y = Math.sin(t * 2) * 0.3;

    });

    return (

        <mesh ref={ref}>

            <sphereGeometry args={[0.08, 32, 32]} />

            <meshBasicMaterial
                color={color}
            />

        </mesh>

    );

}
