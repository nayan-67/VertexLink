import { motion } from "framer-motion"
import Avatar from "../common/Avatar.jsx"

export default function TypingIndicator({ conversation }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="flex items-end gap-2.5">
      <Avatar initials={conversation.avatar} color={conversation.color} size="sm" />
      <div className="glass flex items-center gap-1.5 rounded-2xl rounded-bl-md px-4 py-3.5">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-2 w-2 rounded-full bg-brand-cyan"
            animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  )
}
