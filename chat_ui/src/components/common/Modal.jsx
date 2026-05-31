import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

export default function Modal({ open, onClose, title, subtitle, children, footer }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[90] grid place-items-center bg-ink-950/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-lg overflow-hidden rounded-3xl shadow-soft"
          >
            <div className="flex items-start justify-between border-b border-white/5 p-5">
              <div>
                <h3 className="font-display text-lg font-bold">{title}</h3>
                {subtitle && <p className="text-sm text-muted">{subtitle}</p>}
              </div>
              <button onClick={onClose} className="text-muted transition hover:text-white" aria-label="Close">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="scroll-area max-h-[60vh] overflow-y-auto p-5">{children}</div>
            {footer && <div className="border-t border-white/5 p-5">{footer}</div>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
