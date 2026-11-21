"use client";

import Sidebar from "../components/sidebar";
import TopBar from "../components/TopBar";

const students = [
  { id: 1, name: "Ali Khan", email: "ali@gmail.com", course: "Excel" },
  { id: 2, name: "Sara Ahmed", email: "sara@gmail.com", course: "Power BI" },
  { id: 3, name: "Usman Tariq", email: "usman@gmail.com", course: "Web Dev" },
  { id: 4, name: "Hassan Raza", email: "hassan@gmail.com", course: "IELTS" },
];

export default function Users() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6">
        <TopBar />

        <h1 className="text-2xl font-bold mb-6">Registered Students</h1>

        <div className="bg-white rounded-xl shadow p-5 overflow-x-auto">

          <table className="w-full">

n          <thead>
            <tr className="border-b text-left">
              <th className="p-2">ID</th>
              <th className="p-2">Name</th>
              <th className="p-2">Email</th>
              <th className="p-2">Course</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.id} className="border-b">

                <td className="p-2">{student.id}</td>
                <td className="p-2">{student.name}</td>
                <td className="p-2">{student.email}</td>
                <td className="p-2">{student.course}</td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
      </main>
    </div>
  );
}
