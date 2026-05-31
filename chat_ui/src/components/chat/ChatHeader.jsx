import { Menu, Phone, Video, PanelRightOpen } from "lucide-react"
import Avatar from "../common/Avatar.jsx"
import IconButton from "../common/IconButton.jsx"
import NotificationMenu from "./NotificationMenu.jsx"
import { useToast } from "../common/Toast.jsx"

export default function ChatHeader({ conversation, onOpenSidebar, onToggleProfile }) {
  const { notify } = useToast()

  return (
    <header className="glass sticky top-0 z-20 flex items-center gap-3 rounded-none border-x-0 border-t-0 px-4 pb-3 pt-[calc(0.75rem+env(safe-area-inset-top))] sm:px-6">
      <button onClick={onOpenSidebar} className="text-muted hover:text-white lg:hidden" aria-label="Open menu">
        <Menu className="h-5 w-5" />
      </button>

      <button onClick={onToggleProfile} className="flex min-w-0 items-center gap-3 text-left">
        <Avatar initials={conversation.avatar} color={conversation.color} online={conversation.online} />
        <div className="min-w-0">
          <p className="truncate font-display text-base font-semibold">{conversation.name}</p>
          <p className={`truncate text-xs ${conversation.online ? "text-emerald-400" : "text-muted"}`}>
            {conversation.typing ? "typing…" : conversation.lastActive}
          </p>
        </div>
      </button>

      <div className="ml-auto flex items-center gap-1.5">
        <IconButton className="w-9 h-9" label="Voice call" onClick={() => notify("Starting voice call…", "info")}>
          <Phone style={{ height: 18, width: 18 }} />
        </IconButton>
        <IconButton className="w-9 h-9" label="Video call" onClick={() => notify("Starting video call…", "info")}>
          <Video style={{ height: 18, width: 18 }} />
        </IconButton>
        <NotificationMenu />
        <IconButton className="w-9 h-9 hidden sm:grid" label="Toggle profile" onClick={onToggleProfile}>
          <PanelRightOpen style={{ height: 18, width: 18 }} />
        </IconButton>
      </div>
    </header>
  )
}
