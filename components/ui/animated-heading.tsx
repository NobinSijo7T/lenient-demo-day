"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface AnimatedHeadingProps extends Omit<HTMLMotionProps<"h1">, "as"> {
  as?: HeadingTag;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedHeading({
  as = "h2",
  children,
  className,
  delay = 0,
  ...props
}: AnimatedHeadingProps) {
  const MotionTag = motion[as] as React.ElementType;

  return (
    <MotionTag
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        delay: delay,
      }}
      className={cn(className)}
      {...props}
    >
      {children}
    </MotionTag>
  );
}

export default AnimatedHeading;
