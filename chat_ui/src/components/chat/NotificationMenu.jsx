import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Bell } from "lucide-react"
import IconButton from "../common/IconButton.jsx"

const items = [
  { id: 1, title: "Maya sent you a message", time: "2m ago", color: "from-fuchsia-500 to-pink-400", initials: "MR" },
  { id: 2, title: "Design Guild: 5 new messages", time: "12m ago", color: "from-violet-500 to-indigo-400", initials: "DG" },
  { id: 3, title: "Priya shared an analytics report", time: "1h ago", color: "from-sky-500 to-blue-400", initials: "PN" },
]

export default function NotificationMenu() {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const onClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener("mousedown", onClick)
    return () => document.removeEventListener("mousedown", onClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <div className="relative">
        <IconButton className="w-9 h-9" label="Notifications" active={open} onClick={() => setOpen((o) => !o)}>
          <Bell style={{ height: 18, width: 18 }} />
        </IconButton>
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-brand-cyan" />
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            className="glass absolute right-0 top-12 z-50 w-72 overflow-hidden rounded-2xl shadow-soft"
          >
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
              <p className="text-sm font-semibold">Notifications</p>
              <span className="rounded-full bg-brand-gradient px-2 py-0.5 text-[10px] font-semibold text-white">3 new</span>
            </div>
            <div className="max-h-72 overflow-y-auto scroll-area">
              {items.map((n) => (
                <button key={n.id} className="flex w-full items-center gap-3 px-4 py-3 text-left transition hover:bg-white/5">
                  <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${n.color} text-xs font-semibold text-white`}>
                    {n.initials}
                  </span>
                  <div className="min-w-0">
                    <p className="truncate text-sm">{n.title}</p>
                    <p className="text-[11px] text-muted">{n.time}</p>
                  </div>
                </button>
              ))}
            </div>
            <button className="w-full border-t border-white/5 py-2.5 text-center text-xs text-brand-cyan transition hover:bg-white/5">
              Mark all as read
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
