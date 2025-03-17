import { DiRedis } from "react-icons/di"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb, SiTailwindcss, SiJavascript, SiFirebase, SiShadcnui, SiSupabase, SiPython } from "react-icons/si"
import { FaNodeJs } from "react-icons/fa"

import { animate, motion } from "framer-motion"

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
  return (
    <div className="pb-24">
        <motion.h2
            whileInView={{ opacity:1, y: 0 }}
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5 }} 
            className="my-20 text-center text-4xl">Technologies
        </motion.h2>
        <motion.div 
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4">
            <motion.div
                initial="initial"
                animate="animate"
                variants={iconVariants(2.5)}>
                <RiReactjsLine className="text-7xl text-cyan-400" />
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                className="p-4">
                <SiMongodb className="text-7xl text-green-900" />
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(2)}
                className="p-4">
                <SiTailwindcss className="text-7xl text-cyan-700" />
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(6)}
                className="p-4">
                <FaNodeJs className="text-7xl text-green-500" />
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(4)}
                className="p-4">
                <SiJavascript className="text-7xl text-yellow-400" />
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                className="p-4">
                <SiFirebase className="text-7xl text-orange-600" />
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                className="p-4">
                <SiShadcnui className="text-7xl text-white" />
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                className="p-4">
                <SiSupabase className="text-7xl text-green-900" />
            </motion.div>
            <motion.div 
                initial="initial"
                animate="animate"
                variants={iconVariants(5)}
                className="p-4">
                <SiPython className="text-7xl text-blue-600" />
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies