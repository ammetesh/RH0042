import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlassProps {

    children: ReactNode;

    className?: string;

}

export default function Glass({

    children,

    className = "",

}: GlassProps) {

    return (

        <motion.div

            initial={{

                opacity: 0,
                y: 30,

            }}

            whileInView={{

                opacity: 1,
                y: 0,

            }}

            viewport={{

                once: true,

            }}

            transition={{

                duration: 0.6,

            }}

            whileHover={{

                y: -4,

            }}

            className={`
                rounded-2xl
                border
                border-violet-500/20
                bg-violet-500/10
                p-6
                backdrop-blur-xl
                shadow-lg
                ${className}
            `}

        >

            {children}

        </motion.div>

    );

}
