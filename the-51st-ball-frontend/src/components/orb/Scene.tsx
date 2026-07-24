import { Group } from "three";
import { useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";

import useMouse from "../../hooks/useMouse";

import GlowSphere from "./GlowSphere";
import EnergyHalo from "./EnergyHalo";
import QuantumPulse from "./QuantumPulse";
import ParticleField from "./ParticleField";
import Orbit from "./Orbit";
import CameraRig from "./CameraRig";

export default function Scene() {

    const mouse = useMouse();

    const group = useRef<Group>(null);

    useFrame(() => {

        if (!group.current) return;

        group.current.rotation.x += (
            mouse.y * 0.25 - group.current.rotation.x
        ) * 0.05;

        group.current.rotation.y += (
            mouse.x * 0.25 - group.current.rotation.y
        ) * 0.05;

    });

    return (
        <>

            <CameraRig />

            <ambientLight intensity={0.4} />

            <pointLight
                color="#8B5CF6"
                intensity={25}
                position={[0,0,0]}
            />

            <pointLight
                color="#60A5FA"
                intensity={8}
                position={[5,5,5]}
            />

            <group ref={group}>

                <ParticleField />

                <GlowSphere />

                <EnergyHalo />

                <QuantumPulse />

                <Orbit radius={2.2} speed={1.00} rotation={[0,0,0]} color="#FFFFFF" offset={0} />
                <Orbit radius={2.2} speed={1.10} rotation={[Math.PI/2,0,0]} color="#38BDF8" offset={1} />
                <Orbit radius={2.2} speed={0.90} rotation={[0,Math.PI/2,0]} color="#EC4899" offset={2} />
                <Orbit radius={2.2} speed={1.20} rotation={[Math.PI/4,0,0]} color="#C084FC" offset={3} />
                <Orbit radius={2.2} speed={0.80} rotation={[0,Math.PI/4,0]} color="#60A5FA" offset={4} />
                <Orbit radius={2.2} speed={1.15} rotation={[Math.PI/3,Math.PI/3,0]} color="#F472B6" offset={5} />
                <Orbit radius={2.2} speed={0.95} rotation={[Math.PI/6,Math.PI/2,0]} color="#A855F7" offset={6} />
                <Orbit radius={2.2} speed={1.05} rotation={[Math.PI/2,Math.PI/4,0]} color="#FFFFFF" offset={7} />

            </group>

            <OrbitControls
                autoRotate
                autoRotateSpeed={0.3}
                enableZoom={false}
                enablePan={false}
            />

        </>
    );

}
