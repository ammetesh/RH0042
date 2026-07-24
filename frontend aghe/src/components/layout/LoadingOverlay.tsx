import { useAudit } from "../../hooks/useAudit";

export default function LoadingOverlay() {

    const state = useAudit((s) => s.state);

    if (state !== "running") return null;

    return (

        <div
            className="
                absolute
                inset-0
                z-30
                flex
                items-center
                justify-center
                bg-black/40
                backdrop-blur-sm
                text-white
            "
        >

            <div className="text-center">

                <div
                    className="
                        mx-auto
                        h-14
                        w-14
                        animate-spin
                        rounded-full
                        border-4
                        border-violet-500
                        border-t-transparent
                    "
                />

                <p className="mt-6 text-xl">

                    Auditing quantum randomness...

                </p>

            </div>

        </div>

    );

}
