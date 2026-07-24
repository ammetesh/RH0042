import { useEffect, useState } from "react";
import { ShieldCheck, RotateCcw } from "lucide-react";
import { useAudit } from "../../hooks/useAudit";

export default function Navbar() {

    const state = useAudit((s) => s.state);
    const reset = useAudit((s) => s.reset);

    const [active, setActive] = useState("dashboard");

    useEffect(() => {

        if (state !== "results") return;

        const sections = document.querySelectorAll("section[id]");

        const observer = new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        setActive(entry.target.id);

                    }

                });

            },

            {

                threshold: 0.4,

            }

        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();

    }, [state]);

    function scrollTo(id: string) {

        document.getElementById(id)?.scrollIntoView({

            behavior: "smooth",
            block: "start",

        });

    }

    function navClass(id: string) {

        return `
            transition-all
            duration-300
            px-3
            py-2
            rounded-full
            ${
                active === id
                    ? "bg-violet-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
            }
        `;

    }

    return (

        <header className="fixed top-5 left-1/2 z-50 -translate-x-1/2">

            <nav className="flex items-center gap-6 rounded-full border border-white/10 bg-black/40 px-8 py-4 backdrop-blur-xl shadow-2xl">

                <div className="flex items-center gap-3">

                    <ShieldCheck
                        className="text-violet-400"
                        size={24}
                    />

                    <span className="text-lg font-bold text-white">

                        Quantum Auditor

                    </span>

                </div>

                {

                    state === "results" && (

                        <>

                            <button
                                className={navClass("dashboard")}
                                onClick={() => scrollTo("dashboard")}
                            >
                                Dashboard
                            </button>

                            <button
                                className={navClass("analytics")}
                                onClick={() => scrollTo("analytics")}
                            >
                                Analytics
                            </button>

                            <button
                                className={navClass("ai-analysis")}
                                onClick={() => scrollTo("ai-analysis")}
                            >
                                AI Analysis
                            </button>

                            <button
                                className={navClass("history")}
                                onClick={() => scrollTo("history")}
                            >
                                History
                            </button>

                            <button
                                onClick={reset}
                                className="
                                    ml-3
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-violet-600
                                    px-5
                                    py-2
                                    text-white
                                    transition
                                    hover:bg-violet-500
                                "
                            >

                                <RotateCcw size={18} />

                                Run Again

                            </button>

                        </>

                    )

                }

            </nav>

        </header>

    );

}
