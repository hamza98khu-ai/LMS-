"use client";

import { FiBell, FiLogOut } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="flex justify-between items-center mb-6 bg-white p-4 rounded-xl shadow">

      <h1 className="text-xl font-bold">Admin Dashboard</h1>

      <div className="flex items-center gap-4">

        <FiBell className="text-xl cursor-pointer" />

        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40"
            className="rounded-full"
            alt="profile"
          />
          <span>Digi Arno</span>
        </div>

        <button className="bg-red-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          <FiLogOut />
          Logout
        </button>

      </div>

    </div>
  );
}
