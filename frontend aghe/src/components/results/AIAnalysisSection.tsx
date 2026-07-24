import Glass from "./Glass";
import { useAudit } from "../../hooks/useAudit";

export default function AIAnalysisSection() {

    const { audit } = useAudit();

    if (!audit) return null;

    return (

        <section
            id="ai-analysis"
            className="space-y-8 scroll-mt-28"
        >

            <h2
                className="
                    text-3xl
                    font-bold
                    text-white
                "
            >
                AI Analysis
            </h2>

            <Glass>

                <h3
                    className="
                        mb-3
                        text-xl
                        font-semibold
                        text-white
                    "
                >
                    Executive Summary
                </h3>

                <p className="leading-7 text-slate-300">

                    {audit.summary}

                </p>

            </Glass>

            <div
                className="
                    grid
                    gap-6
                    lg:grid-cols-2
                "
            >

                <Glass>

                    <h3
                        className="
                            mb-4
                            text-xl
                            font-semibold
                            text-green-400
                        "
                    >
                        Strengths
                    </h3>

                    <ul className="space-y-3 text-slate-300">

                        {audit.strengths.length > 0 ? (

                            audit.strengths.map((item, index) => (

                                <li key={index}>

                                    • {item}

                                </li>

                            ))

                        ) : (

                            <li>No strengths reported.</li>

                        )}

                    </ul>

                </Glass>

                <Glass>

                    <h3
                        className="
                            mb-4
                            text-xl
                            font-semibold
                            text-yellow-400
                        "
                    >
                        Warnings
                    </h3>

                    <ul className="space-y-3 text-slate-300">

                        {audit.warnings.length > 0 ? (

                            audit.warnings.map((item, index) => (

                                <li key={index}>

                                    • {item}

                                </li>

                            ))

                        ) : (

                            <li>No warnings reported.</li>

                        )}

                    </ul>

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
                    AI Recommendation
                </h3>

                <p className="leading-7 text-slate-300">

                    {audit.recommendation}

                </p>

            </Glass>

            <Glass>

                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        justify-between
                        gap-6
                    "
                >

                    <div>

                        <p className="text-slate-400">

                            Confidence Score

                        </p>

                        <h3
                            className="
                                mt-2
                                text-4xl
                                font-bold
                                text-violet-300
                            "
                        >

                            {audit.confidence_score}%

                        </h3>

                    </div>

                    <div
                        className="
                            rounded-xl
                            bg-violet-500/10
                            px-6
                            py-4
                            text-center
                        "
                    >

                        <p className="text-slate-400">

                            Overall Verdict

                        </p>

                        <h2
                            className="
                                mt-2
                                text-2xl
                                font-bold
                                text-white
                            "
                        >

                            {audit.overall_grade}

                        </h2>

                    </div>

                </div>

            </Glass>

        </section>

    );

}
