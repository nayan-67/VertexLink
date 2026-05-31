import { motion } from "framer-motion"
import { stats } from "../../data/chats.js"

const tones = {
  cyan: "text-brand-cyan",
  indigo: "text-brand-indigo",
  violet: "text-brand-violet",
}

export default function StatWidgets() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.06 }}
          className="glass rounded-2xl p-3"
        >
          <div className="flex items-baseline justify-between">
            <span className="font-display text-xl font-bold">{s.value}</span>
            <span className={`text-[10px] font-medium ${tones[s.tone]}`}>{s.delta}</span>
          </div>
          <p className="mt-0.5 truncate text-[11px] text-muted">{s.label}</p>
        </motion.div>
      ))}
    </div>
  )
}
