import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Lock, Mail } from "lucide-react"
import AuthLayout from "../components/auth/AuthLayout.jsx"
import FloatingInput from "../components/auth/FloatingInput.jsx"
import SocialButtons from "../components/auth/SocialButtons.jsx"
import { useToast } from "../components/common/Toast.jsx"
import { BorderBeam } from "@/components/lightswind/border-beam.js"

export default function Login() {
  const navigate = useNavigate()
  const { notify } = useToast()
  const [email, setEmail] = useState("aria@novachat.app")
  const [password, setPassword] = useState("password")
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      notify("Welcome back, Aria!")
      navigate("/app")
    }, 900)
  }

  return (
    <AuthLayout>
      <BorderBeam
        colorFrom="#60a5fa"
        colorTo="#22d3ee"
        size={50}
        duration={6}
        borderThickness={2}
        glowIntensity={3} />
      <div className="mb-7">
        <h2 className="font-display text-2xl font-bold">Welcome back</h2>
        <p className="mt-1 text-sm text-muted">Sign in to continue to your conversations.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <FloatingInput id="email" label="Email address" type="email" icon={Mail} value={email} onChange={(e) => setEmail(e.target.value)} />
        <FloatingInput id="password" label="Password" type="password" icon={Lock} value={password} onChange={(e) => setPassword(e.target.value)} />

        <div className="flex items-center justify-between text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-muted">
            <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-white/20 bg-white/5 accent-brand-indigo" />
            Remember me
          </label>
          <button type="button" className="text-brand-cyan transition hover:text-brand-indigo">
            Forgot password?
          </button>
        </div>

        <motion.button
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-gradient py-3.5 font-semibold text-white shadow-glow transition disabled:opacity-70"
        >
          {loading ? (
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          ) : (
            <>
              Sign in <ArrowRight className="h-4 w-4" />
            </>
          )}
        </motion.button>
      </form>

      <div className="my-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-white/10" />
        <span className="text-xs text-muted">or continue with</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <SocialButtons onClick={() => notify("Social login is a demo", "info")} />

      <p className="mt-7 text-center text-sm text-muted">
        Don&apos;t have an account?{" "}
        <Link to="/register" className="font-medium text-brand-cyan transition hover:text-brand-indigo">
          Create one
        </Link>
      </p>
    </AuthLayout>
  )
}
