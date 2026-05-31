import { useEffect, useRef } from "react"
import { AnimatePresence } from "framer-motion"
import MessageBubble from "./MessageBubble.jsx"
import TypingIndicator from "./TypingIndicator.jsx"

export default function MessageList({ conversation, messages, typing }) {
  const endRef = useRef(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages, typing])

  return (
    <div className="scroll-area flex-1 space-y-4 overflow-y-auto px-4 py-6 sm:px-8">
      <div className="mx-auto w-fit rounded-full bg-white/5 px-3 py-1 text-[11px] text-muted">Today</div>
      <AnimatePresence initial={false}>
        {messages.map((m) => (
          <MessageBubble key={m.id} message={m} conversation={conversation} />
        ))}
      </AnimatePresence>
      {typing && <TypingIndicator conversation={conversation} />}
      <div ref={endRef} />
    </div>
  )
}
