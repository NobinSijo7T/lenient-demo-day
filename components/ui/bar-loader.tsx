"use client";

import { motion, Variants } from "framer-motion";

const variants: Variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

export const BarLoader = () => {
  return (
    <div className="grid place-content-center bg-violet-600 px-4 py-24 w-full h-full">
      <motion.div
        transition={{
          staggerChildren: 0.25,
        }}
        initial="initial"
        animate="animate"
        className="flex gap-1"
      >
        <motion.div variants={variants} className="h-12 w-2 bg-white" />
        <motion.div variants={variants} className="h-12 w-2 bg-white" />
        <motion.div variants={variants} className="h-12 w-2 bg-white" />
        <motion.div variants={variants} className="h-12 w-2 bg-white" />
        <motion.div variants={variants} className="h-12 w-2 bg-white" />
      </motion.div>
    </div>
  );
};

export default BarLoader;
