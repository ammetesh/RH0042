import { motion } from "framer-motion";

import DashboardSection from "./results/DashboardSection";
import AnalyticsSection from "./results/AnalyticsSection";
import AIAnalysisSection from "./results/AIAnalysisSection";
import HistorySection from "./results/HistorySection";

import { useAudit } from "../hooks/useAudit";

export default function ResultsPanel() {

    const {

        result,

        loading,

        error,

    } = useAudit();

    if (loading) {

        return (

            <div
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    text-xl
                    text-white
                "
            >

                Running Quantum Audit...

            </div>

        );

    }

    if (error) {

        return (

            <div
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    text-xl
                    text-red-400
                "
            >

                {error}

            </div>

        );

    }

    if (!result) {

        return (

            <div
                className="
                    flex
                    min-h-screen
                    items-center
                    justify-center
                    text-xl
                    text-white
                "
            >

                No audit data available.

            </div>

        );

    }

    return (

        <motion.main

            initial={{

                opacity: 0,
                y: 40,

            }}

            animate={{

                opacity: 1,
                y: 0,

            }}

            transition={{

                duration: 0.8,

            }}

            className="
                mx-auto
                w-full
                max-w-7xl
                space-y-12
                px-6
                py-12
            "

        >

            <DashboardSection />

            <AnalyticsSection />

            <AIAnalysisSection />

            <HistorySection />

        </motion.main>

    );

}
