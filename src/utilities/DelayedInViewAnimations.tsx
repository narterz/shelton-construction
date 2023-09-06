import { motion } from "framer-motion";
import { FC, ReactNode, RefObject } from "react";

interface DelayedInViewProps {
    className?: string;
    id?: string;
    directionX: boolean;
    ref: RefObject<HTMLDivElement>
    index: number;
    children: ReactNode;
}

export const DelayedInViewAnimation: FC<DelayedInViewProps> = ({
    className, 
    id, 
    directionX, 
    ref, 
    children, 
    index }) => {

    const delayedScrollYVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: (index: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.2 * index,
            }
        })
    }
    const delayedScrollXVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: (index: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.05 * index,
            }
        })
    }

    return (
        <motion.div
            className={className}
            initial="hidden"
            whileInView="visible"
            variants={directionX ? delayedScrollXVariants : delayedScrollYVariants}
            custom={index}
            viewport={{once: true}}
            id={id}
            ref={ref}
        >
            {children}
        </motion.div>
    )
}