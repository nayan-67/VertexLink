import { motion } from "framer-motion"

export default function IconButton({ children, label, active, className = "", ...props }) {
  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={label}
      title={label}
      className={`grid sm:h-10 sm:w-10 place-items-center rounded-xl border border-white/5 text-muted transition-colors hover:border-brand-indigo/40 hover:bg-white/5 hover:text-white ${
        active ? "bg-white/5 text-white" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  )
}
