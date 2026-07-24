import Glass from "./Glass";
import Metric from "./Metric";
import Status from "./Status";
import Workflow from "./Workflow";
import { useAudit } from "../../hooks/useAudit";

export default function DashboardSection() {

    const { audit } = useAudit();

    if (!audit) return null;

    return (

        <section
            id="dashboard"
            className="space-y-8 scroll-mt-28"
        >

            <h2
                className="
                    text-3xl
                    font-bold
                    text-white
                "
            >
                Dashboard
            </h2>

            <div
                className="
                    grid
                    gap-6
                    md:grid-cols-2
                    xl:grid-cols-4
                "
            >

                <Metric
                    title="Health Score"
                    value={`${audit.health_score}%`}
                />

                <Metric
                    title="Confidence"
                    value={`${audit.confidence_score}%`}
                />

                <Metric
                    title="Overall Grade"
                    value={audit.overall_grade}
                />

                <Metric
                    title="Risk Level"
                    value={audit.risk_level}
                />

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
                    About Quantum Randomness Auditor
                </h3>

                <p className="leading-7 text-slate-300">

                    Quantum Randomness Auditor evaluates lottery draw data
                    using statistical randomness tests together with AI-based
                    interpretation. The platform detects anomalies,
                    quantifies confidence, and generates an easy-to-read
                    audit report for transparency.

                </p>

            </Glass>

            <Glass>

                <h3
                    className="
                        mb-4
                        text-xl
                        font-semibold
                        text-white
                    "
                >
                    System Status
                </h3>

                <div
                    className="
                        grid
                        gap-4
                        md:grid-cols-3
                    "
                >

                    <Status
                        label="Backend"
                        status="online"
                        value="Connected"
                    />

                    <Status
                        label="AI Engine"
                        status="online"
                        value="Ready"
                    />

                    <Status
                        label="Audit Engine"
                        status="online"
                        value={`${audit.draws_analyzed} Draws`}
                    />

                </div>

            </Glass>

            <Glass>

                <h3
                    className="
                        mb-4
                        text-xl
                        font-semibold
                        text-white
                    "
                >
                    Audit Workflow
                </h3>

                <Workflow />

            </Glass>

        </section>

    );

}
