import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { LogOut, Moon, Search, Settings, Sun, X } from "lucide-react"
import Avatar from "../common/Avatar.jsx"
import Logo from "../common/Logo.jsx"
import IconButton from "../common/IconButton.jsx"
import StatWidgets from "./StatWidgets.jsx"
import { currentUser } from "../../data/chats.js"
import { useTheme } from "../../context/ThemeContext.jsx"
import { useToast } from "../common/Toast.jsx"
import { CoolThemeToggle } from "@/components/lightswind/cool-theme-toggle"

export default function Sidebar({ conversations, activeId, onSelect, onOpenSettings, onClose }) {
  const [query, setQuery] = useState("")
  const { theme, toggleTheme } = useTheme()
  const { notify } = useToast()
  const navigate = useNavigate()

  const filtered = conversations.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()))

  return (
    <aside className="flex h-full w-full flex-col gap-4 bg-ink-900/60 p-4">
      <div className="flex items-center justify-between">
        <Logo />
        <button onClick={onClose} className="text-muted hover:text-white lg:hidden" aria-label="Close menu">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="relative">
        <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search conversations"
          className="h-11 w-full rounded-2xl border border-white/10 bg-white/5 pl-10 pr-4 text-sm outline-none transition focus:border-brand-indigo/50 focus:shadow-glow"
        />
      </div>

      <StatWidgets />

      <div className="flex items-center justify-between px-1">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">Messages</p>
        <span className="rounded-full bg-white/5 px-2 py-0.5 text-[10px] text-muted">{filtered.length}</span>
      </div>

      <div className="scroll-area -mr-2 flex-1 space-y-1 overflow-y-auto pr-2">
        {filtered.map((c) => {
          const active = c.id === activeId
          return (
            <motion.button
              key={c.id}
              onClick={() => onSelect(c.id)}
              whileTap={{ scale: 0.98 }}
              className={`flex w-full items-center gap-3 rounded-2xl p-2.5 text-left transition-colors ${active ? "glass shadow-soft" : "hover:bg-white/5"
                }`}
            >
              <Avatar initials={c.avatar} color={c.color} online={c.online} />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-medium">{c.name}</p>
                  <span className="shrink-0 text-[10px] text-muted">{c.time}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <p className={`truncate text-xs ${c.typing ? "text-brand-cyan" : "text-muted"}`}>
                    {c.typing ? "typing…" : c.lastMessage}
                  </p>
                  {c.unread > 0 && (
                    <span className="grid h-5 min-w-5 shrink-0 place-items-center rounded-full bg-brand-gradient px-1.5 text-[10px] font-semibold text-white">
                      {c.unread}
                    </span>
                  )}
                </div>
              </div>
            </motion.button>
          )
        })}
      </div>

      <div className="glass flex items-center gap-3 rounded-2xl p-2.5">
        <Avatar initials={currentUser.avatar} color={currentUser.color} online />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium">{currentUser.name}</p>
          <p className="truncate text-[11px] text-emerald-400">{currentUser.status}</p>
        </div>
        {/* <IconButton label="Toggle theme" >
          {theme === "dark" ? <Sun className="h-4.5 w-4.5" style={{ height: 18, width: 18 }} /> : <Moon style={{ height: 18, width: 18 }} />}
        </IconButton> */}
        <div onClick={toggleTheme} className="">
          <CoolThemeToggle size="sm"/>
        </div>
        {/* <CoolThemeToggle size="sm" onClick={toggleTheme}/> */}
        <IconButton label="Settings" onClick={onOpenSettings}>
          <Settings style={{ height: 18, width: 18 }} />
        </IconButton>
        {/* <IconButton
          label="Log out"
          onClick={() => {
            notify("Signed out", "info")
            navigate("/login")
          }}
        >
          <LogOut style={{ height: 18, width: 18 }} />
        </IconButton> */}
      </div>
    </aside>
  )
}
