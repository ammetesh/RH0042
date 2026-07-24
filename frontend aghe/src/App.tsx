import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import InputSection from "./components/input/InputSection";
import ResultsPanel from "./components/ResultsPanel";

function HomePage() {

    return (

        <>

            <Hero />

            <InputSection />

        </>

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
