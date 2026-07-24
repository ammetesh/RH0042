import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import Scene from "./Scene";

export default function QuantumOrb() {

    return (

        <div
            style={{
                width: "100vw",
                height: "100vh",
                background: "#05020D",
            }}
        >

            <Canvas
                style={{
                    width: "100%",
                    height: "100%",
                }}
                camera={{
                    position: [0, 0, 6],
                    fov: 50,
                }}
            >

                <color attach="background" args={["#05020D"]} />

                <Scene />

                <EffectComposer>
                    <Bloom
                        intensity={2.4}
                        luminanceThreshold={0.15}
                        luminanceSmoothing={0.9}
                        mipmapBlur
                    />

                    <Bloom
                        intensity={0.9}
                        luminanceThreshold={0.55}
                        luminanceSmoothing={0.4}
                        mipmapBlur
                    />
                </EffectComposer>

            </Canvas>

        </div>

    );

}
