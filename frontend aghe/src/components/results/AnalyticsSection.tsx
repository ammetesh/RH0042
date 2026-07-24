import Glass from "./Glass";
import TestCard from "./TestCard";

import HealthGauge from "../charts/HealthGauge";
import TestsRadar from "../charts/TestsRadar";
import TrendChart from "../charts/TrendChart";
import ScorePie from "../charts/ScorePie";

import { useAudit } from "../../hooks/useAudit";

export default function AnalyticsSection() {

    const { audit } = useAudit();

    if (!audit) return null;

    const tests = audit.tests;

    return (

        <section
            id="analytics"
            className="space-y-8 scroll-mt-28"
        >

            <h2
                className="
                    text-3xl
                    font-bold
                    text-white
                "
            >
                Statistical Analytics
            </h2>

            <div
                className="
                    grid
                    gap-6
                    lg:grid-cols-2
                "
            >

                <TestsRadar
                    entropy={tests.entropy}
                    runs={tests.runs}
                    serial={tests.serial}
                    uniformity={tests.uniformity}
                    randomness={tests.randomness}
                />

                <HealthGauge
                    title="Health Score"
                    value={audit.health_score}
                />

            </div>

            <TrendChart
                trends={audit.trends}
            />

            <div
                className="
                    grid
                    gap-6
                    lg:grid-cols-2
                "
            >

                <ScorePie
                    healthScore={audit.health_score}
                    confidenceScore={audit.confidence_score}
                />

                <Glass>

                    <h3
                        className="
                            mb-6
                            text-xl
                            font-semibold
                            text-white
                        "
                    >
                        Statistical Tests
                    </h3>

                    <div
                        className="
                            grid
                            gap-4
                        "
                    >

                        <TestCard
                            title="Entropy"
                            value={tests.entropy}
                        />

                        <TestCard
                            title="Runs"
                            value={tests.runs}
                        />

                        <TestCard
                            title="Serial"
                            value={tests.serial}
                        />

                        <TestCard
                            title="Uniformity"
                            value={tests.uniformity}
                        />

                        <TestCard
                            title="Randomness"
                            value={tests.randomness}
                        />

                    </div>

                </Glass>

            </div>

            <Glass>

                <h3
                    className="
                        mb-3
                        text-xl
                        font-semibold
                        text-white
                    "
                >
                    Interpretation
                </h3>

                <p
                    className="
                        leading-7
                        text-slate-300
                    "
                >

                    These visualizations summarize the statistical behaviour
                    of the analysed lottery draws. Consistently high scores
                    across entropy, runs, serial, uniformity and randomness
                    indicate behaviour that closely resembles an unbiased
                    random process. Significant deviations may warrant
                    additional investigation.

                </p>

            </Glass>

        </section>

    );

}
