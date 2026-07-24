import {
    CartesianGrid,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from "recharts";

interface TrendChartProps {

    trends: Record<string, number>;

}

export default function TrendChart({

    trends,

}: TrendChartProps) {

    const data = Object.entries(trends).map(

        ([name, value]) => ({

            name,

            value,

        })

    );

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

                Trend Analysis

            </h3>

            <ResponsiveContainer>

                <LineChart
                    data={data}
                >

                    <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="#374151"
                    />

                    <XAxis
                        dataKey="name"
                        tick={{
                            fill: "#cbd5e1",
                        }}
                    />

                    <YAxis
                        tick={{
                            fill: "#cbd5e1",
                        }}
                    />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#8b5cf6"
                        strokeWidth={3}
                        dot={{
                            r: 5,
                        }}
                        activeDot={{
                            r: 8,
                        }}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}
