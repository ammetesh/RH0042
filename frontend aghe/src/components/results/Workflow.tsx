import type { ReactNode } from "react";
import { Database, BarChart3, BrainCircuit, ShieldCheck, FileCheck, ArrowRight, ArrowRight } from "lucide-react";

interface StepProps {

    icon: ReactNode;

    title: string;

}

function Step({

    icon,

    title,

}: StepProps) {

    return (

        <div
            className="
                flex
                flex-col
                items-center
                gap-3
                rounded-2xl
                border
                border-violet-500/20
                bg-violet-500/10
                px-6
                py-5
                backdrop-blur-xl
                transition
                duration-300
                hover:scale-105
                hover:border-violet-400
            "
        >

            <div className="text-violet-300">

                {icon}

            </div>

            <p
                className="
                    text-center
                    text-sm
                    font-semibold
                    text-white
                "
            >

                {title}

            </p>

        </div>

    );

}

function Arrow() {

    return (

        <ArrowRight
            size={28}
            className="text-violet-400"
        />

    );

}

export default function Workflow() {

    return (

        <div
            className="
                flex
                flex-wrap
                items-center
                justify-center
                gap-4
            "
        >

            <Step
                icon={<Database size={34} />}
                title="Lottery Draws"
            />

            <Arrow />

            <Step
                icon={<BarChart3 size={34} />}
                title="Statistical Tests"
            />

            <Arrow />

            <Step
                icon={<BrainCircuit size={34} />}
                title="AI Analysis"
            />

            <Arrow />

            <Step
                icon={<ShieldCheck size={34} />}
                title="Risk Assessment"
            />

            <Arrow />

            <Step
                icon={<FileCheck size={34} />}
                title="Final Report"
            />

        </div>

    );

}




