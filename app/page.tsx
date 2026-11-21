"use client";

import React from "react";
import {
  FiUsers,
  FiBook,
  FiBell,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import Sidebar from "./components/sidebar";
import TopBar from "./components/TopBar";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* ================= SIDEBAR ================= */}
      
<Sidebar />
      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 p-6">

        {/* ========== TOP BAR ========== */}
        <TopBar />

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

  {/* Card 1 */}
  <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center">

    <div className="flex items-center gap-4">
      <img className="h-12 w-12" src="/stu.png" alt="" />

      <div>
        <p className="text-gray-500 text-sm">Total Students</p>
        <h1 className="text-2xl font-bold">275</h1>
      </div>
    </div>

    <div className="bg-green-100 p-1 rounded-full">
      <img src="/star.png" className="h-10 w-10" />
    </div>

  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center">

    <div className="flex items-center gap-4">
      <img className="h-12 w-12" src="/teacher.png" alt="" />

      <div>
        <p className="text-gray-500 text-sm">Total Trainers</p>
        <h1 className="text-2xl font-bold">32</h1>
      </div>
    </div>

    <div className="bg-blue-100 p-1 rounded-full">
      <img src="/star.png" className="h-10 w-10" />
    </div>

  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center">

    <div className="flex items-center gap-4">
      <img className="h-12 w-12" src="/Courses.png" alt="" />

      <div>
        <p className="text-gray-500 text-sm">Total Courses</p>
        <h1 className="text-2xl font-bold">18</h1>
      </div>
    </div>

    <div className="bg-green-100 p-1 rounded-full">
      <img src="/star.png" className="h-10 w-10" />
    </div>

  </div>

  {/* Card 4 */}
  <div className="bg-white rounded-xl shadow-md p-5 flex justify-between items-center">

    <div className="flex items-center gap-4">
      <img className="h-12 w-12" src="/approval.png" alt="" />

      <div>
        <p className="text-gray-500 text-sm">Pending Approvals</p>
        <h1 className="text-2xl font-bold">5</h1>
      </div>
    </div>

    <div className="bg-orange-100 p-1 rounded-full">
      <img src="/star.png" className="h-10 w-10" />
    </div>

  </div>

</div>

        {/* ========== LOWER SECTION ========== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

          {/* Recent Activities */}
      <div className="bg-white rounded-xl shadow p-5 lg:col-span-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Activities</h2>
          <button className="text-sm text-emerald-600 font-medium">
            New All →
          </button>
        </div>

        <div className="space-y-5">
          {/* Item */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              ▶
            </div>
            <div className="flex-1">
              <p className="font-medium">
                New IOPS students “Advanced Python Programming”
              </p>
              <p className="text-sm text-gray-500">
                New 5 course students on platform
              </p>
            </div>
            <span className="text-sm text-gray-400">
              Progress • 23%
            </span>
          </div>

          {/* Item */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
              👤
            </div>
            <div className="flex-1">
              <p className="font-medium">Student Maaz Ali has registered</p>
              <p className="text-sm text-gray-500">
                Web development foundation course
              </p>
            </div>
            <span className="text-sm text-gray-400">
              Progress • 27%
            </span>
          </div>
        </div>
      </div>

      {/* Pending Approvals */}
      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-lg font-semibold mb-4">Pending Approvals</h2>

        <div className="space-y-5">
          <div>
            <p className="font-medium text-sm mb-2">
              Advanced Python Progress
            </p>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-emerald-500 h-2 rounded-full w-[70%]" />
            </div>
          </div>

          <div>
            <p className="font-medium text-sm mb-2">
              Basic Science Fundamentals
            </p>
            <div className="w-full bg-gray-200 h-2 rounded-full">
              <div className="bg-emerald-500 h-2 rounded-full w-[50%]" />
            </div>
          </div>

          <div className="flex gap-3">
            <button className="bg-emerald-500 text-white px-4 py-2 rounded-md text-sm">
              Update All
            </button>
            <button className="bg-gray-100 text-gray-700 px-4 py-2 rounded-md text-sm">
              Decline
            </button>
          </div>
        </div>
      </div>

      {/* System Notifications */}
      <div className="bg-white rounded-xl shadow p-5">
        <h2 className="text-lg font-semibold mb-4">System Notifications</h2>

        <div className="space-y-4 text-sm">
          <div className="flex justify-between">
            <p>📌 Upcoming Assignments</p>
            <span className="text-gray-400">3:17</span>
          </div>

          <div className="flex justify-between">
            <p>📄 Course approvals details</p>
            <span className="text-gray-400">5 min</span>
          </div>

          <div className="flex justify-between">
            <p>🔔 Additions to the Machine Tools</p>
            <span className="text-gray-400">10 sec</span>
          </div>
        </div>
      </div>

        </div>

      </main>
    </div>
  );
}

