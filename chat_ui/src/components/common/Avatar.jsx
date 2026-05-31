const sizes = {
  sm: "h-9 w-9 text-xs",
  md: "h-11 w-11 text-sm",
  lg: "h-14 w-14 text-base",
  xl: "h-24 w-24 text-2xl",
}

export default function Avatar({ initials, color = "from-blue-500 to-cyan-400", size = "md", online, ring }) {
  return (
    <span className="relative inline-flex shrink-0">
      <span
        className={`inline-flex items-center justify-center rounded-2xl bg-gradient-to-br ${color} ${sizes[size]} font-semibold text-white shadow-soft ${
          ring ? "ring-2 ring-white/15" : ""
        }`}
      >
        {initials}
      </span>
      {online !== undefined && (
        <span
          className={`absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-ink-900 ${
            online ? "bg-emerald-400" : "bg-slate-500"
          }`}
        >
          {online && (
            <span className="absolute inset-0 rounded-full bg-emerald-400 animate-pulse-ring" />
          )}
        </span>
      )}
    </span>
  )
}
