import CountUp from "react-countup";
import { motion } from "framer-motion";

interface MetricProps {

    title: string;

    value: string | number;

}

export default function Metric({

    title,

    value,

}: MetricProps) {

    const numeric = Number(value);

    const isNumber = !Number.isNaN(numeric);

    return (

        <motion.div

            initial={{

                opacity: 0,
                y: 20,

            }}

            whileInView={{

                opacity: 1,
                y: 0,

            }}

            viewport={{

                once: true,

            }}

            whileHover={{

                scale: 1.03,

            }}

            whileTap={{

                scale: 0.98,

            }}

            transition={{

                duration: 0.5,

            }}

            className="
                rounded-2xl
                border
                border-violet-500/20
                bg-violet-500/10
                p-6
                backdrop-blur-xl
                transition
                duration-300
                hover:border-violet-400
            "
        >

            <p
                className="
                    text-sm
                    uppercase
                    tracking-wider
                    text-slate-400
                "
            >

                {title}

            </p>

            <h2
                className="
                    mt-3
                    text-4xl
                    font-bold
                    text-white
                "
            >

                {

                    isNumber ? (

                        <CountUp

                            end={numeric}

                            duration={2}

                        />

                    ) : (

                        value

                    )

                }

            </h2>

        </motion.div>

    );

}
