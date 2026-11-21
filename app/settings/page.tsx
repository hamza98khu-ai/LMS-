"use client";

import Sidebar from "../components/sidebar";
import TopBar from "../components/TopBar";

export default function Settings() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6">
        <TopBar />

        <div className="max-w-xl">
          <h1 className="text-2xl font-bold mb-6">Profile Settings</h1>

          <div className="bg-white p-6 rounded-xl shadow">

            {/* Profile Pic */}
            <div className="flex items-center gap-4 mb-6">

              <img src="0" className="rounded-full" />

              <button className="bg-teal-600 text-white px-4 py-2 rounded-lg">
                Change Photo
              </button>

            </div>

            {/* Form */}
            <div className="space-y-4">

              <div>
                <label className="text-sm text-gray-500">Full Name</label>
                <input
                  type="text"
                  placeholder="John Smith"
                  className="w-full border p-2 rounded-lg"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Contact Number</label>
                <input
                  type="text"
                  placeholder="+92 300 0000000"
                  className="w-full border p-2 rounded-lg"
                />
              </div>

              <div>
                <label className="text-sm text-gray-500">Email</label>
                <input
                  type="email"
                  placeholder="admin@gmail.com"
                  className="w-full border p-2 rounded-lg"
                />
              </div>

              <button className="bg-green-600 text-white w-full py-2 rounded-lg mt-3">
                Save Changes
              </button>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
