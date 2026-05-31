import { createContext, useCallback, useContext, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, Info, X } from "lucide-react"

const ToastContext = createContext({ notify: () => {} })

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const notify = useCallback((message, type = "success") => {
    const id = Math.random().toString(36).slice(2)
    setToasts((t) => [...t, { id, message, type }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 3200)
  }, [])

  const dismiss = (id) => setToasts((t) => t.filter((x) => x.id !== id))

  return (
    <ToastContext.Provider value={{ notify }}>
      {children}
      <div className="pointer-events-none fixed bottom-5 right-5 z-[100] flex w-full max-w-xs flex-col gap-3">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              layout
              initial={{ opacity: 0, x: 60, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 60, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="glass pointer-events-auto flex items-center gap-3 rounded-2xl px-4 py-3 shadow-soft"
            >
              <span
                className={`grid h-8 w-8 shrink-0 place-items-center rounded-xl ${
                  t.type === "success" ? "bg-emerald-500/15 text-emerald-300" : "bg-blue-500/15 text-blue-300"
                }`}
              >
                {t.type === "success" ? <CheckCircle2 className="h-4 w-4" /> : <Info className="h-4 w-4" />}
              </span>
              <p className="flex-1 text-sm">{t.message}</p>
              <button onClick={() => dismiss(t.id)} className="text-muted transition hover:text-white" aria-label="Dismiss">
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)
