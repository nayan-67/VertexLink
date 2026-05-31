import { motion } from "framer-motion"
import { Bell, Image as ImageIcon, Phone, Star, Video, X } from "lucide-react"
import Avatar from "../common/Avatar.jsx"
import IconButton from "../common/IconButton.jsx"
import { mutualGroups, sharedMedia } from "../../data/chats.js"

export default function ProfilePanel({ conversation, onClose }) {
  return (
    <div className="scroll-area flex h-full w-full flex-col gap-5 overflow-y-auto bg-ink-900/60 p-5">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">Profile</p>
        <button onClick={onClose} className="text-muted hover:text-white" aria-label="Close profile">
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="glass flex flex-col items-center rounded-3xl p-6 text-center">
        <Avatar initials={conversation.avatar} color={conversation.color} size="xl" online={conversation.online} ring />
        <p className="mt-4 font-display text-lg font-bold">{conversation.name}</p>
        <p className="text-sm text-muted">{conversation.role}</p>
        <div className="mt-4 flex gap-2">
          <IconButton label="Call"><Phone style={{ height: 18, width: 18 }} /></IconButton>
          <IconButton label="Video"><Video style={{ height: 18, width: 18 }} /></IconButton>
          <IconButton label="Notifications"><Bell style={{ height: 18, width: 18 }} /></IconButton>
          <IconButton label="Favorite"><Star style={{ height: 18, width: 18 }} /></IconButton>
        </div>
      </div>

      <div className="glass rounded-2xl p-4">
        <p className="text-xs font-medium uppercase tracking-wider text-muted">About</p>
        <p className="mt-2 text-sm leading-relaxed">
          Crafting delightful product experiences. Coffee enthusiast, weekend hiker and pixel perfectionist.
        </p>
      </div>

      <div className="glass rounded-2xl p-4">
        <div className="mb-3 flex items-center justify-between">
          <p className="flex items-center gap-2 text-sm font-medium">
            <ImageIcon className="h-4 w-4 text-brand-cyan" /> Shared media
          </p>
          <button className="text-xs text-brand-cyan">See all</button>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {sharedMedia.map((g, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className={`aspect-square cursor-pointer rounded-xl bg-gradient-to-br ${g}`}
            />
          ))}
        </div>
      </div>

      <div className="glass rounded-2xl p-4">
        <p className="mb-3 text-sm font-medium">Mutual groups</p>
        <div className="space-y-2">
          {mutualGroups.map((g) => (
            <div key={g.name} className="flex items-center gap-3">
              <Avatar initials={g.name.slice(0, 2)} color={g.color} size="sm" />
              <div className="min-w-0">
                <p className="truncate text-sm">{g.name}</p>
                <p className="text-[11px] text-muted">{g.members} members</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
