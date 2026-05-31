// Decorative animated gradient background blobs.
export default function Aurora({ className = "" }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div
        className="aurora animate-float"
        style={{ width: 480, height: 480, top: "-120px", left: "-80px", background: "#3b82f6" }}
      />
      <div
        className="aurora animate-float"
        style={{ width: 420, height: 420, bottom: "-140px", right: "-60px", background: "#22d3ee", animationDelay: "1.5s" }}
      />
      <div
        className="aurora animate-float"
        style={{ width: 360, height: 360, top: "40%", left: "55%", background: "#8b5cf6", animationDelay: "3s" }}
      />
    </div>
  )
}
