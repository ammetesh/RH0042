import { Line } from "@react-three/drei";

type OrbitRingProps = {
    radius: number;
    rotation: [number, number, number];
    color?: string;
};

export default function OrbitRing({
    radius,
    rotation,
    color = "#A855F7",
}: OrbitRingProps) {

    const points = [];

    for (let i = 0; i <= 128; i++) {
        const angle = (i / 128) * Math.PI * 2;

        points.push([
            Math.cos(angle) * radius,
            Math.sin(angle) * radius,
            0,
        ]);
    }

    return (
        <group rotation={rotation}>
            <Line
                points={points}
                color={color}
                lineWidth={1.5}
                transparent
                opacity={0.45}
            />
        </group>
    );
}
