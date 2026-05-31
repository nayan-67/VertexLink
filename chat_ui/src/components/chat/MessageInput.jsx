import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Mic, Paperclip, Send, Smile } from "lucide-react"
import IconButton from "../common/IconButton.jsx"

const emojis = ["😀", "😍", "🔥", "🎉", "👍", "🙏", "😎", "🚀", "💜", "✨", "😂", "❤️", "👏", "🤝", "💡", "✅"]

export default function MessageInput({ onSend }) {
  const [text, setText] = useState("")
  const [showEmoji, setShowEmoji] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    onSend(text.trim())
    setText("")
    setShowEmoji(false)
  }

  return (
    <div className="relative px-4 pb-4 pt-2 sm:px-6">
      <AnimatePresence>
        {showEmoji && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.96 }}
            className="glass absolute bottom-20 left-4 z-30 grid w-64 grid-cols-8 gap-1 rounded-2xl p-3 shadow-soft sm:left-6"
          >
            {emojis.map((e) => (
              <button
                key={e}
                onClick={() => setText((t) => t + e)}
                className="rounded-lg p-1 text-lg transition hover:scale-125 hover:bg-white/5"
              >
                {e}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={submit} className="flex items-center gap-2">
        <div className="glass flex min-w-0 min-h-11.25 flex-1 items-center gap-1.5 rounded-2xl px-2 py-1.5">
          <IconButton
            label="Emoji"
            type="button"
            active={showEmoji}
            onClick={() => setShowEmoji((s) => !s)}
            className="h-auto w-auto rounded-md sm:h-9 sm:w-9 sm:rounded-lg"
          >
            <Smile className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
          </IconButton>
          <IconButton label="Attach file" type="button" className="h-auto w-auto rounded-md sm:h-9 sm:w-9 sm:rounded-lg">
            <Paperclip className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
          </IconButton>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type a message…"
            className="min-w-0 flex-1 bg-transparent px-1 text-sm outline-none placeholder:text-muted sm:px-2"
          />
          <IconButton label="Voice message" type="button" className="h-auto w-auto rounded-md sm:h-9 sm:w-9 sm:rounded-lg">
            <Mic className="h-4 w-4 sm:h-4.5 sm:w-4.5" />
          </IconButton>
        </div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.9 }}
          className="grid h-10 w-10 sm:h-11 sm:w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient text-white shadow-glow transition bg-[linear-gradient(135deg,#0ea5e9,#6366f1)] sm:bg-none sm:hover:bg-[linear-gradient(135deg,#0ea5e9,#6366f1)] "
          aria-label="Send message"
        >
          <Send className="h-4.5 w-4.5" style={{ height: 18, width: 18 }} />
        </motion.button>
      </form>
    </div>
  )
}
