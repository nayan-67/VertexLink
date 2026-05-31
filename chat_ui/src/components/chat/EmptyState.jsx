import { motion } from "framer-motion"
import { MessagesSquare } from "lucide-react"
import Aurora from "../common/Aurora.jsx"

export default function EmptyState() {
  return (
    <div className="relative flex h-full flex-col items-center justify-center overflow-hidden p-8 text-center">
      <Aurora className="opacity-30" />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 grid h-20 w-20 place-items-center rounded-3xl bg-brand-gradient shadow-glow animate-float"
      >
        <MessagesSquare className="h-9 w-9 text-white" />
      </motion.div>
      <h3 className="relative z-10 mt-6 font-display text-2xl font-bold">Your messages</h3>
      <p className="relative z-10 mt-2 max-w-sm text-pretty text-muted">
        Select a conversation from the sidebar to start chatting, or search for someone new to connect with.
      </p>
    </div>
  )
}
