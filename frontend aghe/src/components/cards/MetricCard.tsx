interface MetricCardProps {

    title: string;

    value: string;

    status?: string;

    className?: string;

}

export default function MetricCard({

    title,

    value,

    status,

    className = "",

}: MetricCardProps) {

    return (

        <div
            className={`
                w-64
                rounded-2xl
                border
                border-white/10
                bg-white/10
                backdrop-blur-xl
                p-5
                text-white
                shadow-2xl
                transition-all
                duration-300
                hover:scale-105
                hover:bg-white/15
                ${className}
            `}
        >

            <p className="text-sm text-gray-300">

                {title}

            </p>

            <h2 className="mt-2 text-4xl font-bold">

                {value}

            </h2>

            {status && (

                <div
                    className="
                        mt-4
                        inline-flex
                        rounded-full
                        bg-violet-500/20
                        px-3
                        py-1
                        text-sm
                        text-violet-200
                    "
                >

                    {status}

                </div>

            )}

        </div>

    );

}
