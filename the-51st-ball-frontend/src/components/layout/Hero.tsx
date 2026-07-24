import { Play } from "lucide-react";
import { useAudit } from "../../hooks/useAudit";
import { runAudit } from "../../services/audit";

export default function Hero() {

    const state = useAudit((s) => s.state);
    const startAudit = useAudit((s) => s.startAudit);
    const finishAudit = useAudit((s) => s.finishAudit);

    if (state !== "landing") return null;

    async function handleAudit() {

        try {

            startAudit();

            const result = await runAudit();

            finishAudit(result);

        }

        catch (error) {

            console.error(error);

        }

    }

    return (

        <div
            className="
                absolute
                inset-0
                z-10
                flex
                flex-col
                items-center
                justify-center
                text-center
                text-white
                pointer-events-none
            "
        >

            <h1 className="text-6xl font-black tracking-tight">
                Quantum Randomness
            </h1>

            <h2 className="mt-2 text-6xl font-black text-violet-400">
                Auditor
            </h2>

            <p className="mt-8 max-w-2xl text-xl text-gray-300 leading-8">
                Verify the integrity of quantum-generated random numbers
                using statistical analysis, AI validation,
                and real-time visualization.
            </p>

            <button
                onClick={handleAudit}
                className="
                    pointer-events-auto
                    mt-10
                    flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-violet-600
                    px-8
                    py-4
                    text-lg
                    font-semibold
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:bg-violet-500
                "
            >
                <Play size={22} />
                Run Audit
            </button>

        </div>

    );

}
