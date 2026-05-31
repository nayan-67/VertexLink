import { useState } from "react"
import { Bell, Moon, Palette, ShieldCheck, User } from "lucide-react"
import Modal from "../common/Modal.jsx"
import Toggle from "../common/Toggle.jsx"
import Avatar from "../common/Avatar.jsx"
import { currentUser } from "../../data/chats.js"
import { useTheme } from "../../context/ThemeContext.jsx"
import { useToast } from "../common/Toast.jsx"

const tabs = [
  { id: "profile", label: "Profile", icon: User },
  { id: "appearance", label: "Appearance", icon: Palette },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "privacy", label: "Privacy", icon: ShieldCheck },
]

function Row({ title, desc, children }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-white/5 p-3.5">
      <div>
        <p className="text-sm font-medium">{title}</p>
        {desc && <p className="text-xs text-muted">{desc}</p>}
      </div>
      {children}
    </div>
  )
}

export default function SettingsModal({ open, onClose }) {
  const [tab, setTab] = useState("profile")
  const [name, setName] = useState(currentUser.name)
  const [bio, setBio] = useState("Product designer crafting delightful experiences.")
  const [toggles, setToggles] = useState({ msg: true, mention: true, sound: false, readReceipts: true, online: true })
  const { theme, toggleTheme } = useTheme()
  const { notify } = useToast()

  const set = (key) => (val) => setToggles((t) => ({ ...t, [key]: val }))

  return (
    <Modal
      open={open}
      onClose={onClose}
      title="Settings"
      subtitle="Manage your profile and preferences"
      footer={
        <div className="flex justify-end gap-3">
          <button onClick={onClose} className="rounded-xl border border-white/10 px-4 py-2 text-sm transition hover:bg-white/5">
            Cancel
          </button>
          <button
            onClick={() => {
              notify("Settings saved")
              onClose()
            }}
            className="rounded-xl bg-brand-gradient px-4 py-2 text-sm font-semibold text-white shadow-glow"
          >
            Save changes
          </button>
        </div>
      }
    >
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm transition ${
              tab === t.id ? "bg-brand-gradient text-white shadow-glow" : "border border-white/5 text-muted hover:bg-white/5"
            }`}
          >
            <t.icon className="h-4 w-4" /> {t.label}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {tab === "profile" && (
          <>
            <div className="flex items-center gap-4">
              <Avatar initials={currentUser.avatar} color={currentUser.color} size="lg" />
              <button className="rounded-xl border border-white/10 px-3 py-2 text-sm transition hover:bg-white/5">
                Change avatar
              </button>
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-muted">Display name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="h-11 w-full rounded-2xl border border-white/10 bg-white/5 px-4 text-sm outline-none focus:border-brand-indigo/50"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs text-muted">Bio</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-4 text-sm outline-none focus:border-brand-indigo/50"
              />
            </div>
          </>
        )}

        {tab === "appearance" && (
          <>
            <Row title="Dark mode" desc="Use the dark futuristic theme">
              <button onClick={toggleTheme} className="flex items-center gap-2 text-sm text-brand-cyan">
                <Moon className="h-4 w-4" /> {theme === "dark" ? "On" : "Off"}
              </button>
            </Row>
            <Row title="Compact messages" desc="Reduce spacing between bubbles">
              <Toggle checked={toggles.sound} onChange={set("sound")} />
            </Row>
          </>
        )}

        {tab === "notifications" && (
          <>
            <Row title="Direct messages" desc="Notify me about new messages">
              <Toggle checked={toggles.msg} onChange={set("msg")} />
            </Row>
            <Row title="Mentions" desc="Notify me when I'm mentioned">
              <Toggle checked={toggles.mention} onChange={set("mention")} />
            </Row>
            <Row title="Sounds" desc="Play a sound for new messages">
              <Toggle checked={toggles.sound} onChange={set("sound")} />
            </Row>
          </>
        )}

        {tab === "privacy" && (
          <>
            <Row title="Read receipts" desc="Let others know you've read">
              <Toggle checked={toggles.readReceipts} onChange={set("readReceipts")} />
            </Row>
            <Row title="Show online status" desc="Display when you're active">
              <Toggle checked={toggles.online} onChange={set("online")} />
            </Row>
          </>
        )}
      </div>
    </Modal>
  )
}
