
"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  LayoutDashboard,
  BookOpen,
  Users,
  FileText,
  Settings,
  BarChart,
  GraduationCap,
  ClipboardList,
  Bell,
  HelpCircle,
  ArrowLeft,
} from "lucide-react"

export default function Sidebar({ role }: { role: string }) {
  const pathname = usePathname()

  // Admin jab Trainer/Student ka page kholta hai to "Back to Admin" dikhane ke liye
  const [fromAdmin, setFromAdmin] = useState(false)

  useEffect(() => {
    try {
      if (role === "admin") {
        sessionStorage.removeItem("viewAsAdmin")
        setFromAdmin(false)
      } else {
        setFromAdmin(sessionStorage.getItem("viewAsAdmin") === "1")
      }
    } catch {
      setFromAdmin(false)
    }
  }, [role, pathname])

  const menu: any = {
    admin: [
      { name: "Dashboard", path: "/admin", icon: LayoutDashboard },
      { name: "Courses", path: "/admin/courses", icon: BookOpen },
      { name: "Trainers", path: "/trainer", icon: Users },
      { name: "Students", path: "/student", icon: GraduationCap },
      { name: "Kids LMS", path: "/admin/kids", icon: BookOpen },
      { name: "Reports", path: "/admin/reports", icon: BarChart },
      { name: "Settings", path: "/admin/settings", icon: Settings },
    ],
    trainer: [
      { name: "Dashboard", path: "/trainer", icon: LayoutDashboard },
      { name: "Assignments", path: "/trainer/assignments", icon: ClipboardList },
      { name: "Attendance", path: "/trainer/attendance", icon: FileText },
      { name: "Courses", path: "/trainer/courses", icon: BookOpen },
      { name: "Students", path: "/trainer/students", icon: Users },
      { name: "Reports", path: "/trainer/reports", icon: BarChart },
    ],
    student: [
      { name: "Dashboard", path: "/student", icon: LayoutDashboard },
      { name: "Assignments", path: "/student/assignments", icon: ClipboardList },
      { name: "Progress", path: "/student/progress", icon: BarChart },
      { name: "Notifications", path: "/student/notifications", icon: Bell },
      { name: "Help", path: "/student/help", icon: HelpCircle },
    ],
  }

  return (
    <aside
      className="sticky top-0 self-start h-screen shrink-0 w-64 overflow-hidden bg-[#050b1f] text-white px-5 py-6
      border-r border-cyan-400/30 shadow-[0_0_40px_rgba(34,211,238,0.15)]"
      style={{ perspective: "1000px" }}
    >
      {/* ===== 3D animations ===== */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes sbGridMove { from { background-position: 0 0; } to { background-position: 0 40px; } }
        @keyframes sbPulse { 0%,100% { opacity: .5; } 50% { opacity: 1; } }
        @keyframes sbFloat { 0%,100% { transform: translateY(0) rotateY(0deg); } 50% { transform: translateY(-6px) rotateY(12deg); } }
        @keyframes sbSpin { from { transform: rotateY(0deg) rotateX(60deg); } to { transform: rotateY(360deg) rotateX(60deg); } }
        @keyframes sbSlide { from { opacity: 0; transform: translateX(-30px) rotateY(25deg); } to { opacity: 1; transform: translateX(0) rotateY(0); } }
        .sb-pulse { animation: sbPulse 2.5s ease-in-out infinite; }
        .sb-float { animation: sbFloat 5s ease-in-out infinite; }
        .sb-slide { animation: sbSlide .6s ease-out both; }
      `,
        }}
      />

      {/* 3D Grid floor */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-25 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,211,238,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          transform: "rotateX(65deg)",
          transformOrigin: "bottom",
          animation: "sbGridMove 4s linear infinite",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />

      {/* ⭐ STARS */}
      <span className="absolute top-8 left-6 text-cyan-300 text-xl sb-pulse">✦</span>
      <span className="absolute top-28 right-6 text-purple-400 text-lg sb-pulse">✧</span>
      <span className="absolute bottom-32 left-10 text-cyan-300/50 text-sm sb-pulse">✦</span>
      <span className="absolute bottom-20 right-12 text-purple-300 text-lg sb-pulse">✧</span>

      {/* 🔵 NEON BLOBS */}
      <div className="absolute -top-24 -left-24 w-44 h-44 bg-cyan-400/25 rounded-full blur-3xl sb-pulse" />
      <div className="absolute bottom-0 -right-24 w-52 h-52 bg-purple-500/25 rounded-full blur-3xl sb-pulse" />

      {/* 3D ring */}
      <div
        className="absolute top-1/2 -right-8 w-16 h-16 rounded-full border-2 border-purple-500/60"
        style={{ animation: "sbSpin 8s linear infinite", boxShadow: "0 0 14px rgba(168,85,247,.6)" }}
      />

      {/* Logo */}
      <div className="relative z-10 flex justify-center mb-10 sb-float">
        <img
          src="/logo1.jpeg"
          alt="logo"
          className="h-12 drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]"
        />
      </div>

      {/* ⬅ Back to Admin (sirf tab dikhta hai jab Admin ne Trainer/Student page khola ho) */}
      {fromAdmin && (
        <Link
          href="/admin"
          onClick={() => {
            try {
              sessionStorage.removeItem("viewAsAdmin")
            } catch {}
          }}
          className="sb-slide relative z-10 mb-5 flex items-center gap-3 px-4 py-3 rounded-2xl border border-purple-400/60
          bg-gradient-to-r from-purple-500/30 to-pink-500/30 text-purple-100 font-semibold text-sm
          shadow-[0_0_18px_rgba(168,85,247,0.45)] transition-all duration-300
          hover:[transform:translateX(-6px)_translateZ(20px)] hover:shadow-[0_0_28px_rgba(168,85,247,0.8)]"
        >
          <ArrowLeft size={18} />
          <span>Back to Admin</span>
        </Link>
      )}

      {/* Menu */}
      <nav className="relative z-10 space-y-3" style={{ transformStyle: "preserve-3d" }}>
        {menu[role].map((item: any, i: number) => {
          const Icon = item.icon
          const isActive = pathname === item.path

          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => {
                // Admin ne Trainers/Students par click kiya to yaad rakho
                if (role === "admin" && (item.path === "/trainer" || item.path === "/student")) {
                  try {
                    sessionStorage.setItem("viewAsAdmin", "1")
                  } catch {}
                }
              }}
              style={{ animationDelay: `${i * 0.07}s` }}
              className={`sb-slide group flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all duration-300
              hover:[transform:translateX(8px)_translateZ(20px)_rotateY(-8deg)]
              ${
                isActive
                  ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-white border-white/30 shadow-[0_0_22px_rgba(34,211,238,0.7)]"
                  : "bg-white/5 border-cyan-400/20 text-slate-300 hover:bg-cyan-400/10 hover:text-cyan-200 hover:border-cyan-400/60 hover:shadow-[0_0_16px_rgba(34,211,238,0.4)]"
              }`}
            >
              <Icon size={18} className={isActive ? "" : "group-hover:drop-shadow-[0_0_6px_rgba(34,211,238,0.9)]"} />
              <span className="text-sm font-semibold">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
