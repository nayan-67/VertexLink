import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function FloatingInput({ id, label, type = "text", icon: Icon, value, onChange }) {
  const [focused, setFocused] = useState(false)
  const [show, setShow] = useState(false)
  const isPassword = type === "password"
  const inputType = isPassword ? (show ? "text" : "password") : type
  const active = focused || (value && value.length > 0)

  return (
    <div className="relative">
      {Icon && (
        <Icon
          className={`pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 transition-colors ${
            active ? "text-brand-indigo" : "text-muted"
          }`}
          style={{ height: 18, width: 18 }}
        />
      )}
      <input
        id={id}
        type={inputType}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder=" "
        className={`peer h-14 w-full rounded-2xl border bg-white/5 ${Icon ? "pl-11" : "pl-4"} ${
          isPassword ? "pr-11" : "pr-4"
        } pt-4 text-sm text-[var(--text)] outline-none transition-all ${
          focused ? "border-brand-indigo/60 shadow-glow" : "border-white/10"
        }`}
      />
      <label
        htmlFor={id}
        className={`pointer-events-none absolute ${Icon ? "left-11" : "left-4"} transition-all ${
          active ? "top-2 text-[11px] text-brand-indigo" : "top-1/2 -translate-y-1/2 text-sm text-muted"
        }`}
      >
        {label}
      </label>
      {isPassword && (
        <button
          type="button"
          onClick={() => setShow((s) => !s)}
          className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted transition hover:text-white"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff className="h-4.5 w-4.5" style={{ height: 18, width: 18 }} /> : <Eye style={{ height: 18, width: 18 }} />}
        </button>
      )}
    </div>
  )
}
