"use client";

import Link from "next/link";
import { FiUsers, FiBook, FiSettings } from "react-icons/fi";



export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-gradient-to-b from-teal-600 to-emerald-600 text-white p-5">
     
      {/* Logo */}
      <div className="flex justify-center mb-8">
        <img src="/logo.png" className="h-12" alt="logo" />
      </div>

      {/* Menu */}
      <ul className="space-y-4">

        <li className="flex items-center gap-3 hover:bg-white/20 p-3 rounded-lg">
          <FiUsers />
          <Link href="/dashboard">Dashboard</Link>
        </li>

        <li className="flex items-center gap-3 hover:bg-white/20 p-3 rounded-lg">
          <FiUsers />
          <Link href="/users">Users</Link>
        </li>

        <li className="flex items-center gap-3 hover:bg-white/20 p-3 rounded-lg">
          <FiBook />
          <Link href="/courses">Courses</Link>
        </li>

        <li className="flex items-center gap-3 hover:bg-white/20 p-3 rounded-lg">
          <FiSettings />
          <Link href="/settings">Settings</Link>
        </li>

        <li className="flex items-center gap-3 hover:bg-white/20 p-3 rounded-lg">
          <FiBook />
          <Link href="/kids">Kids LMS</Link>
        </li>

      </ul>

    </div>
  );
}
