import { motion } from "framer-motion"
import { ShieldCheck, Sparkles, Zap } from "lucide-react"
import Aurora from "../common/Aurora.jsx"
import Logo from "../common/Logo.jsx"
import { ShinyText } from "@/components/lightswind/shiny-text";
import { AuroraTextEffect } from "../lightswind/aurora-text-effect.js";

const highlights = [
  { icon: Zap, title: "Realtime everything", text: "Messages, presence and typing sync instantly." },
  { icon: ShieldCheck, title: "End-to-end secure", text: "Your conversations stay private by default." },
  { icon: Sparkles, title: "Beautifully crafted", text: "A premium interface that feels effortless." },
]

export default function AuthLayout({ children }) {
  return (
    <div className="relative grid min-h-dvh w-full lg:grid-cols-2">
      {/* Illustration / brand panel */}
      <div className="relative hidden overflow-hidden bg-ink-950 lg:block">
        <Aurora />
        <div className="relative z-10 flex h-full flex-col justify-between p-12">
          <Logo />
          <div className="space-y-8">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="font-display text-4xl font-bold leading-tight text-balance"
              >
                <ShinyText className="font-bold mr-2" size="4xl" baseColor="#fff"
                  shineColor="#fff">
                  Conversations that feel
                </ShinyText>
                <span className="gradient-text">alive</span>.
              </motion.h1>
              <p className="mt-4 max-w-md text-pretty text-muted">
                Nova Chat brings your team and friends together with a fast, elegant and secure messaging experience.
              </p>
            </div>
            <div className="space-y-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.12 }}
                  className="glass flex items-start gap-4 rounded-2xl p-4"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-gradient-soft text-brand-cyan">
                    <h.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-medium">{h.title}</p>
                    <p className="text-sm text-muted">{h.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <p className="text-xs text-muted">Trusted by 40,000+ teams worldwide</p>
        </div>
      </div>

      {/* Form panel */}
      <div className="relative flex items-center justify-center overflow-hidden p-6 sm:p-10">
        <Aurora className="opacity-40 lg:hidden" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass relative z-10 w-full max-w-md rounded-3xl p-8 shadow-soft"
        >
          <div className="mb-8 lg:hidden">
            <Logo />
          </div>
          {children}
        </motion.div>
      </div>
    </div>
  )
}
