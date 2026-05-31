import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Sidebar from "@/components/chat/Sidebar.jsx"
import ChatHeader from "@/components/chat/ChatHeader.jsx"
import MessageList from "@/components/chat/MessageList.jsx"
import MessageInput from "@/components/chat/MessageInput.jsx"
import ProfilePanel from "@/components/chat/ProfilePanel.jsx"
import EmptyState from "@/components/chat/EmptyState.jsx"
import SettingsModal from "@/components/chat/SettingsModal.jsx"
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/lightswind/resizable"
import { conversations as initialConversations } from "@/data/chats.js"

export default function ChatPage() {
  const [conversations, setConversations] = useState(initialConversations)
  const [activeId, setActiveId] = useState("c1")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [settingsOpen, setSettingsOpen] = useState(false)

  const active = conversations.find((c) => c.id === activeId)

  const selectConversation = (id) => {
    setActiveId(id)
    setSidebarOpen(false)
    setConversations((prev) => prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c)))
  }

  const sendMessage = (text) => {
    const time = new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
    setConversations((prev) =>
      prev.map((c) =>
        c.id === activeId
          ? {
            ...c,
            lastMessage: text,
            time: "now",
            messages: [...c.messages, { id: `m${Date.now()}`, from: "me", text, time, read: false }],
          }
          : c,
      ),
    )
  }

  const chatArea = (
    <main className="flex h-full min-w-0 flex-1 flex-col bg-ink-950/40">
      {active ? (
        <>
          <ChatHeader
            conversation={active}
            onOpenSidebar={() => setSidebarOpen(true)}
            onToggleProfile={() => setProfileOpen((p) => !p)}
          />
          <MessageList conversation={active} messages={active.messages} typing={active.typing} />
          <MessageInput onSend={sendMessage} />
        </>
      ) : (
        <EmptyState />
      )}
    </main>
  )

  return (
    <div className="h-full w-full overflow-hidden">
      {/* Desktop layout */}
      <div className="hidden h-full w-full lg:flex">
        <div className="flex h-full min-w-0 flex-1">
          <ResizablePanelGroup direction="horizontal" autoSaveId="chat-layout" className="h-full w-full">
            <ResizablePanel
              id="sidebar"
              defaultSize="24"
              minSize="18"
              maxSize="32"
              groupResizeBehavior="preserve-pixel-size"
              className="border-r border-white/5"
            >
              <Sidebar
                conversations={conversations}
                activeId={activeId}
                onSelect={selectConversation}
                onOpenSettings={() => setSettingsOpen(true)}
              />
            </ResizablePanel>
            <ResizableHandle className="cursor-col-resize hover:bg-white/10 hover:w-1 transition-all" />
            <ResizablePanel id="chat" defaultSize="76" minSize="40" className="min-w-0">
              {chatArea}
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        <AnimatePresence>
          {profileOpen && active && (
            <motion.aside
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 350, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
              className="h-full shrink-0 overflow-hidden border-l border-white/5"
            >
              <div className="h-full w-87.5">
                <ProfilePanel conversation={active} onClose={() => setProfileOpen(false)} />
              </div>
            </motion.aside>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile sidebar drawer */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSidebarOpen(false)}
              className="fixed inset-0 z-40 bg-ink-950/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 left-0 z-50 w-80 max-w-[85%] lg:hidden"
            >
              <Sidebar
                conversations={conversations}
                activeId={activeId}
                onSelect={selectConversation}
                onOpenSettings={() => setSettingsOpen(true)}
                onClose={() => setSidebarOpen(false)}
              />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile layout */}
      <div className="flex h-full w-full lg:hidden">
        {chatArea}
      </div>

      {/* Mobile / tablet profile drawer */}
      <AnimatePresence>
        {profileOpen && active && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setProfileOpen(false)}
              className="fixed inset-0 z-40 bg-ink-950/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed inset-y-0 right-0 z-50 w-80 max-w-[85%] lg:hidden"
            >
              <ProfilePanel conversation={active} onClose={() => setProfileOpen(false)} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <SettingsModal open={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  )
}
