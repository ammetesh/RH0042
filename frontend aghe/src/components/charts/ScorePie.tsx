import {
    Cell,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

interface ScorePieProps {

    healthScore: number;

    confidenceScore: number;

}

export default function ScorePie({

    healthScore,

    confidenceScore,

}: ScorePieProps) {

    const risk = Math.max(
        0,
        100 - Math.round((healthScore + confidenceScore) / 2)
    );

    const data = [

        {
            name: "Health",
            value: healthScore,
        },

        {
            name: "Confidence",
            value: confidenceScore,
        },

        {
            name: "Risk",
            value: risk,
        },

    ];

    const colors = [

        "#22c55e",
        "#8b5cf6",
        "#ef4444",

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

                Score Distribution

            </h3>

            <ResponsiveContainer>

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={70}
                        outerRadius={110}
                        paddingAngle={4}
                    >

                        {

                            data.map(

                                (_, index) => (

                                    <Cell
                                        key={index}
                                        fill={colors[index]}
                                    />

                                )

                            )

                        }

                    </Pie>

                    <Tooltip />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}
