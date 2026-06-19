import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Lock, Mail, Phone, User } from "lucide-react"
import AuthLayout from "@/components/auth/AuthLayout.jsx"
import FloatingInput from "@/components/auth/FloatingInput.jsx"
import SocialButtons from "@/components/auth/SocialButtons.jsx"
import { useToast } from "@/components/common/Toast.jsx"
import { BorderBeam } from "@/components/lightswind/border-beam.js"
import { api, getApiErrorMessage } from "@/lib/api.js"
import { setAuthToken, setAuthUser } from "@/lib/auth.js"
import { setEchoAuthToken } from "@/lib/echo.js"

export default function Register() {
  const navigate = useNavigate()
  const { notify } = useToast()
  const [form, setForm] = useState({ name: "", phone: "", email: "", password: "" })
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      if (form.password !== confirmPassword) {
        notify("Passwords do not match", "error")
        setLoading(false)
        return
      }

      const { data } = await api.post("/register", form)
      setAuthToken(data.token)
      setAuthUser(data.user)
      setEchoAuthToken(data.token)
      notify("Account created — welcome!")
      navigate("/login")
    } catch (error) {
      console.error("Registration failed", error)
      notify(getApiErrorMessage(error, "Registration failed"), "error")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <BorderBeam
        colorFrom="#60a5fa"
        colorTo="#22d3ee"
        size={50}
        duration={6}
        borderThickness={2}
        glowIntensity={3}
      />

      <div className="mb-7">
        <h2 className="font-display text-2xl font-bold">Create your account</h2>
        <p className="mt-1 text-sm text-muted">Join Vertex Link and start connecting in seconds.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <FloatingInput id="name" label="Full name" icon={User} value={form.name} onChange={update("name")} />
        <FloatingInput id="email" label="Email address" type="email" icon={Mail} value={form.email} onChange={update("email")} />
        <FloatingInput id="phone" label="Phone number" type="tel" icon={Phone} value={form.phone} onChange={update("phone")} />
        <FloatingInput id="password" label="Password" type="password" icon={Lock} value={form.password} onChange={update("password")} />
        <FloatingInput id="confirmPassword" label="Confirm password" type="password" icon={Lock} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        <label className="flex cursor-pointer items-start gap-2 text-sm text-muted">
          <input type="checkbox" defaultChecked className="mt-0.5 h-4 w-4 rounded border-white/20 bg-white/5 accent-brand-indigo" />
          <span>
            I agree to the <span className="text-brand-cyan">Terms</span> and{" "}
            <span className="text-brand-cyan">Privacy Policy</span>.
          </span>
        </label>

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
              Create account <ArrowRight className="h-4 w-4" />
            </>
          )}
        </motion.button>
      </form>

      <div className="my-6 flex items-center gap-4">
        <span className="h-px flex-1 bg-white/10" />
        <span className="text-xs text-muted">or sign up with</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <SocialButtons onClick={() => notify("Social sign up is a demo", "info")} />

      <p className="mt-7 text-center text-sm text-muted">
        Already have an account?{" "}
        <Link to="/login" className="font-medium text-brand-cyan transition hover:text-brand-indigo">
          Sign in
        </Link>
      </p>
    </AuthLayout>
  )
}
