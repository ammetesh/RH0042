import QuantumOrb from "../components/orb/QuantumOrb";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/layout/Hero";
import LoadingOverlay from "../components/layout/LoadingOverlay";
import ResultsPanel from "../components/ResultsPanel";

export default function Dashboard() {

    return (

        <div className="relative w-screen h-screen overflow-hidden bg-black">

            <div className="absolute inset-0">
                <QuantumOrb />
            </div>

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/70" />

            <Navbar />

            <Hero />

            <LoadingOverlay />

            <ResultsPanel />

        </div>

    );

}
