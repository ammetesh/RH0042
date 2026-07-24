interface TestCardProps {

    title: string;

    value: string;

}

export default function TestCard({

    title,

    value,

}: TestCardProps) {

    const color =
        value === "PASS"
            ? "text-green-400"
            : value === "FAIL"
            ? "text-red-400"
            : value === "WARNING"
            ? "text-yellow-400"
            : "text-gray-300";

    const bg =
        value === "PASS"
            ? "bg-green-500/10 border-green-500/20"
            : value === "FAIL"
            ? "bg-red-500/10 border-red-500/20"
            : value === "WARNING"
            ? "bg-yellow-500/10 border-yellow-500/20"
            : "bg-white/5 border-white/10";

    return (

        <div
            className={`
                rounded-2xl
                border
                ${bg}
                p-5
                text-center
                backdrop-blur-lg
                transition
                duration-300
                hover:scale-105
            `}
        >

            <p
                className="
                    text-sm
                    uppercase
                    tracking-wide
                    text-gray-400
                "
            >

                {title}

            </p>

            <h2
                className={`
                    mt-4
                    text-2xl
                    font-bold
                    ${color}
                `}
            >

                {value}

            </h2>

        </div>

    );

}
