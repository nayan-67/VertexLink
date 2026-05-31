import { motion } from "framer-motion"
import { Check, CheckCheck } from "lucide-react"
import Avatar from "../common/Avatar.jsx"

export default function MessageBubble({ message, conversation }) {
  const mine = message.from === "me"

  return (
    <motion.div
      initial={{ opacity: 0, y: 12, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 380, damping: 28 }}
      className={`flex items-end gap-2.5 ${mine ? "flex-row-reverse" : ""}`}
    >
      {!mine && <Avatar initials={conversation.avatar} color={conversation.color} size="sm" />}
      <div className={`flex max-w-[78%] flex-col gap-1 sm:max-w-[65%] ${mine ? "items-end" : "items-start"}`}>
        {message.author && !mine && <span className="px-1 text-[11px] font-medium text-brand-cyan">{message.author}</span>}

        {message.image ? (
          <div className={`overflow-hidden rounded-2xl ${mine ? "rounded-br-md" : "rounded-bl-md"}`}>
            <div className={`h-40 w-56 bg-gradient-to-br ${message.image}`} />
          </div>
        ) : (
          <div
            className={`rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
              mine
                ? "rounded-br-md bg-brand-gradient text-white shadow-glow"
                : "glass rounded-bl-md text-[var(--text)]"
            }`}
          >
            {message.text}
          </div>
        )}

        <div className={`flex items-center gap-1 px-1 text-[10px] text-muted ${mine ? "flex-row-reverse" : ""}`}>
          <span>{message.time}</span>
          {mine && (message.read ? <CheckCheck className="h-3.5 w-3.5 text-brand-cyan" /> : <Check className="h-3.5 w-3.5" />)}
        </div>
      </div>
    </motion.div>
  )
}
