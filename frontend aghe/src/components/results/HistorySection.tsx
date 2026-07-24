import Glass from "./Glass";
import { useAudit } from "../../hooks/useAudit";
import {
    Clock3,
    Download,
    History,
    RefreshCcw,
} from "lucide-react";

export default function HistorySection() {

    const { audit } = useAudit();

    if (!audit) return null;

    return (

        <section
            id="history"
            className="space-y-8 scroll-mt-28"
        >

            <h2
                className="
                    text-3xl
                    font-bold
                    text-white
                "
            >
                Audit History
            </h2>

            <Glass>

                <div
                    className="
                        grid
                        gap-6
                        md:grid-cols-2
                        xl:grid-cols-4
                    "
                >

                    <div className="rounded-xl bg-violet-500/10 p-5">

                        <History
                            size={28}
                            className="mb-3 text-violet-300"
                        />

                        <p className="text-sm text-slate-400">

                            Total Draws

                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-white">

                            {audit.draws_analyzed}

                        </h3>

                    </div>

                    <div className="rounded-xl bg-violet-500/10 p-5">

                        <Clock3
                            size={28}
                            className="mb-3 text-violet-300"
                        />

                        <p className="text-sm text-slate-400">

                            Last Audit

                        </p>

                        <h3 className="mt-2 text-lg font-semibold text-white">

                            {audit.audit_timestamp}

                        </h3>

                    </div>

                    <div className="rounded-xl bg-violet-500/10 p-5">

                        <RefreshCcw
                            size={28}
                            className="mb-3 text-violet-300"
                        />

                        <p className="text-sm text-slate-400">

                            Numbers Analysed

                        </p>

                        <h3 className="mt-2 text-2xl font-bold text-white">

                            {audit.numbers_analyzed}

                        </h3>

                    </div>

                    <div className="rounded-xl bg-violet-500/10 p-5">

                        <Download
                            size={28}
                            className="mb-3 text-violet-300"
                        />

                        <p className="text-sm text-slate-400">

                            Export Report

                        </p>

                        <button
                            className="
                                mt-3
                                rounded-lg
                                bg-violet-600
                                px-4
                                py-2
                                text-sm
                                font-semibold
                                text-white
                                transition
                                hover:bg-violet-500
                            "
                        >

                            Download

                        </button>

                    </div>

                </div>

            </Glass>

            <Glass>

                <h3
                    className="
                        mb-3
                        text-xl
                        font-semibold
                        text-white
                    "
                >
                    Previous Audits
                </h3>

                <p className="leading-7 text-slate-300">

                    Historical audit tracking and comparison will appear here.
                    Future versions will allow comparison between multiple
                    lottery audits to identify long-term statistical trends
                    and recurring anomalies.

                </p>

            </Glass>

        </section>

    );

}
