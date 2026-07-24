import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
} from "recharts";

interface TestsRadarProps {

    entropy: number;

    runs: number;

    serial: number;

    uniformity: number;

    randomness: number;

}

export default function TestsRadar({

    entropy,

    runs,

    serial,

    uniformity,

    randomness,

}: TestsRadarProps) {

    const data = [

        {
            subject: "Entropy",
            value: entropy,
        },

        {
            subject: "Runs",
            value: runs,
        },

        {
            subject: "Serial",
            value: serial,
        },

        {
            subject: "Uniformity",
            value: uniformity,
        },

        {
            subject: "Randomness",
            value: randomness,
        },

    ];

    return (

        <div
            className="
                h-96
                rounded-2xl
                border
                border-violet-500/20
                bg-violet-500/10
                p-6
                backdrop-blur-xl
            "
        >

            <h3
                className="
                    mb-4
                    text-center
                    text-xl
                    font-semibold
                    text-white
                "
            >

                Statistical Test Radar

            </h3>

            <ResponsiveContainer width="100%" height="100%">

                <RadarChart data={data}>

                    <PolarGrid />

                    <PolarAngleAxis
                        dataKey="subject"
                        tick={{
                            fill: "#cbd5e1",
                            fontSize: 13,
                        }}
                    />

                    <PolarRadiusAxis
                        domain={[0, 100]}
                        tick={{
                            fill: "#94a3b8",
                        }}
                    />

                    <Radar
                        dataKey="value"
                        stroke="#8b5cf6"
                        fill="#8b5cf6"
                        fillOpacity={0.45}
                    />

                </RadarChart>

            </ResponsiveContainer>

        </div>

    );

}

