interface StatusProps {

    label: string;

    status: "online" | "warning" | "offline";

    value: string;

}

export default function Status({

    label,

    status,

    value,

}: StatusProps) {

    const indicator =
        status === "online"
            ? "bg-green-500"
            : status === "warning"
            ? "bg-yellow-400"
            : "bg-red-500";

    const textColor =
        status === "online"
            ? "text-green-400"
            : status === "warning"
            ? "text-yellow-300"
            : "text-red-400";

    return (

        <div
            className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-4
                transition
                duration-300
                hover:bg-white/10
            "
        >

            <div>

                <p
                    className="
                        text-sm
                        uppercase
                        tracking-wide
                        text-gray-400
                    "
                >

                    {label}

                </p>

                <p
                    className={`
                        mt-1
                        font-semibold
                        ${textColor}
                    `}
                >

                    {value}

                </p>

            </div>

            <span
                className={`
                    h-4
                    w-4
                    rounded-full
                    ${indicator}
                    shadow-lg
                    animate-pulse
                `}
            />

        </div>

    );

}
