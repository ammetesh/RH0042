import {
    RadialBarChart,
    RadialBar,
    PolarAngleAxis,
    ResponsiveContainer,
} from "recharts";

interface HealthGaugeProps {

    title: string;

    value: number;

}

export default function HealthGauge({

    title,

    value,

}: HealthGaugeProps) {

    const data = [

        {

            name: title,

            value,

            fill: "#8b5cf6",

        },

    ];

    return (

        <div
            className="
                h-80
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

                {title}

            </h3>

            <ResponsiveContainer>

                <RadialBarChart
                    data={data}
                    innerRadius="70%"
                    outerRadius="100%"
                    startAngle={90}
                    endAngle={-270}
                >

                    <PolarAngleAxis
                        type="number"
                        domain={[0, 100]}
                        angleAxisId={0}
                        tick={false}
                    />

                    <RadialBar
                        background
                        dataKey="value"
                    />

                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        className="fill-white text-3xl font-bold"
                    >

                        {value}%

                    </text>

                </RadialBarChart>

            </ResponsiveContainer>

        </div>

    );

}
