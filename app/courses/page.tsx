"use client";

import Sidebar from "../components/sidebar";
import TopBar from "../components/TopBar";

const courses = [
  "Excel",
  "Power BI",
  "IELTS",
  "Web Development",
  "WordPress",
  "Digital Marketing",
  "Social Media Marketing",
  "Video Editing",
  "Game Development",
  "Chinese Language Course",
];

export default function Courses() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6">
        <TopBar />

        <h1 className="text-2xl font-bold mb-6">Available Courses</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition"
            >

              <h2 className="font-semibold text-lg">{course}</h2>

              <p className="text-gray-500 text-sm mt-2">Active Course</p>

              <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-lg">
                View Details
              </button>

            </div>
          ))}

        </div>
      </main>
    </div>
  );
}
