
"use client"

export default function Topbar({ title }: { title: string }) {
  return (
    <div className="relative mb-6" style={{ perspective: "1000px" }}>
      {/* ===== 3D animations ===== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes tbPulse { 0%,100% { opacity: .5; } 50% { opacity: 1; } }
        @keyframes tbShine { from { transform: translateX(-120%) skewX(-20deg); } to { transform: translateX(300%) skewX(-20deg); } }
        @keyframes tbSpinCube { from { transform: rotateX(0) rotateY(0); } to { transform: rotateX(360deg) rotateY(360deg); } }
        @keyframes tbOrb { 0%,100% { transform: translateY(0) translateZ(0); } 50% { transform: translateY(-6px) translateZ(20px); } }
        @keyframes tbTitle { 0%,100% { text-shadow: 0 0 12px rgba(34,211,238,.8), 0 0 30px rgba(34,211,238,.4); } 50% { text-shadow: 0 0 18px rgba(168,85,247,.8), 0 0 40px rgba(168,85,247,.4); } }
        .tb-pulse { animation: tbPulse 2.5s ease-in-out infinite; }
        .tb-title { animation: tbTitle 4s ease-in-out infinite; }
        .tb-cube { width: 22px; height: 22px; position: relative; transform-style: preserve-3d; animation: tbSpinCube 10s linear infinite; }
        .tb-cube span { position: absolute; inset: 0; border: 1.5px solid #22d3ee; background: rgba(34,211,238,.08); }
        .tb-cube span:nth-child(1) { transform: translateZ(11px); }
        .tb-cube span:nth-child(2) { transform: rotateY(180deg) translateZ(11px); }
        .tb-cube span:nth-child(3) { transform: rotateY(90deg) translateZ(11px); border-color:#a855f7; }
        .tb-cube span:nth-child(4) { transform: rotateY(-90deg) translateZ(11px); border-color:#a855f7; }
        .tb-cube span:nth-child(5) { transform: rotateX(90deg) translateZ(11px); }
        .tb-cube span:nth-child(6) { transform: rotateX(-90deg) translateZ(11px); }
      `,
        }}
      />

      {/* 🌌 Neon Gradient Bar */}
      <div
        className="relative overflow-hidden bg-gradient-to-r from-[#050b1f] via-[#0a1a45] to-[#1a0b3d]
        text-white px-6 py-5 border-b border-cyan-400/50
        shadow-[0_8px_30px_rgba(34,211,238,0.25)]
        flex items-center justify-between"
      >
        {/* moving shine */}
        <div
          className="absolute inset-y-0 w-24 bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent pointer-events-none"
          style={{ animation: "tbShine 6s ease-in-out infinite" }}
        />

        {/* ⭐ Stars */}
        <span className="absolute top-2 left-6 text-cyan-300/80 text-lg tb-pulse">✦</span>
        <span className="absolute top-6 right-24 text-purple-300/80 text-sm tb-pulse">✧</span>
        <span className="absolute bottom-2 left-1/3 text-cyan-300/60 text-sm tb-pulse">✦</span>

        {/* 🔮 Glow orbs */}
        <div className="absolute -top-6 left-24 w-24 h-10 bg-cyan-400/25 rounded-full blur-xl" />
        <div className="absolute -top-4 left-40 w-16 h-8 bg-purple-500/25 rounded-full blur-xl" />
        <div className="absolute top-1 right-32 w-20 h-9 bg-cyan-400/20 rounded-full blur-xl" />

        {/* 🧊 3D orbs / cube (balloons ki jagah) */}
        <div className="absolute top-3 right-8 hidden md:block" style={{ perspective: "300px" }}>
          <div className="tb-cube">
            <span /><span /><span /><span /><span /><span />
          </div>
        </div>
        <div
          className="absolute top-6 right-16 w-4 h-4 rounded-full bg-gradient-to-br from-cyan-300 to-sky-500 shadow-[0_0_12px_rgba(34,211,238,0.9)] hidden md:block"
          style={{ animation: "tbOrb 3s ease-in-out infinite" }}
        />
        <div
          className="absolute top-3 right-20 w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-fuchsia-500 shadow-[0_0_12px_rgba(168,85,247,0.9)] hidden md:block"
          style={{ animation: "tbOrb 4s ease-in-out infinite", animationDelay: "0.8s" }}
        />

        {/* LEFT SPACE (balance) */}
        <div className="w-24"></div>

        {/* 🧠 CENTER TITLE */}
        <h1 className="tb-title relative z-10 text-4xl font-extrabold tracking-wide text-cyan-200 text-center">
          {title}
        </h1>

        {/* 👤 USER CHIP */}
        <div
          className="relative z-10 bg-gradient-to-r from-cyan-400/20 to-purple-500/30 px-4 py-1.5 rounded-full text-sm font-medium
          backdrop-blur border border-cyan-400/50 shadow-[0_0_14px_rgba(34,211,238,0.4)]
          transition-transform duration-300 hover:[transform:translateZ(20px)_scale(1.08)_rotateX(8deg)]"
        >
          User
        </div>
      </div>

      {/* ✨ Glow */}
      <div className="absolute inset-x-10 -bottom-4 h-10 bg-cyan-400/20 blur-2xl rounded-full pointer-events-none" />
    </div>
  )
}
