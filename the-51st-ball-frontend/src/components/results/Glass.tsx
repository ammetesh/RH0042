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

            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{
                y: -6,
                scale: 1.01,
            }}

            className={`
                rounded-2xl
                border
                border-violet-500/30
                bg-[#0F1222]/70
                backdrop-blur-2xl
                shadow-[0_0_30px_rgba(139,92,246,0.18)]
                transition-all
                duration-300
                p-6
                ${className}
            `}

        >

            {children}

        </motion.div>

    );

}
