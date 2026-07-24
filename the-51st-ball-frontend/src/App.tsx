import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Canvas } from "@react-three/fiber";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/layout/Hero";
import Scene from "./components/orb/Scene";

import InputSection from "./components/input/InputSection";
import ResultsPanel from "./components/ResultsPanel";

function HomePage() {

    return (

        <div className="min-h-screen bg-[#05060B] text-white">

            <Navbar />

            <section
                className="
                    relative
                    h-screen
                    overflow-hidden
                "
            >

                <div
                    className="
                        absolute
                        inset-0
                        z-0
                    "
                >

                    <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>

                        <Scene />

                    </Canvas>

                </div>

                <div
                    className="
                        absolute
                        inset-0
                        z-10
                    "
                >

                    <Hero />

                </div>

            </section>

            <section
                className="
                    relative
                    z-20
                    -mt-20
                    pb-24
                "
            >

                <InputSection />

            </section>

        </div>

    );

}

export default function App() {

    return (

        <BrowserRouter>

            <Routes>

                <Route
                    path="/"
                    element={<HomePage />}
                />

                <Route
                    path="/results"
                    element={<ResultsPanel />}
                />

            </Routes>

        </BrowserRouter>

    );

}
