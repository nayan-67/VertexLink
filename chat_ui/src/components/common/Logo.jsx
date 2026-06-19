import { MessagesSquare } from "lucide-react"

export default function Logo({ withText = true, size = "md" }) {
  const box = size === "sm" ? "h-9 w-9" : "h-11 w-11"
  return (
    <div className="flex items-center gap-3">
      <div className={`relative grid ${box} place-items-center rounded-2xl bg-brand-gradient shadow-glow`}>
        <MessagesSquare className="h-5 w-5 text-white" strokeWidth={2.4} />
      </div>
      {withText && (
        <div className="leading-tight">
          <p className="font-display text-lg font-bold tracking-tight">
            Vertex<span className="gradient-text">Link</span>
          </p>
          <p className="text-[11px] text-muted">Premium messaging</p>
        </div>
      )}
    </div>
  )
}
