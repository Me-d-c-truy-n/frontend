import { cn } from "../../utils/cn"
import { motion } from "framer-motion"
import React from "react"

export const Highlight = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  return (
    <motion.span
      initial={{
        backgroundSize: "0% 100%",
      }}
      animate={{
        backgroundSize: "100% 100%",
      }}
      transition={{
        duration: 1,
        ease: "linear",
        delay: 0.4,
      }}
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left center",
        display: "inline",
      }}
      className={cn(
        `relative inline-block p-[0.15rem] rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500`,
        className
      )}
    >
      {children}
    </motion.span>
  )
}
