import { useEffect, useState } from "react";
import { mockUsers } from "../data/mockData";

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const theme = "dark"; // Force dark theme

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setUsers(mockUsers);
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            Loading dashboard...
          </p>
        </div>
      </div>
    );
  }

  // Calculate statistics
  const totalUsers = users.length;
  const uniqueCompanies = new Set(users.map((user) => user.company.name)).size;
  const uniqueCities = new Set(users.map((user) => user.address.city)).size;
  const totalWebsites = users.filter((user) => user.website).length;

  const stats = [
    {
      label: "Total Users",
      value: totalUsers,
      icon: "👥",
      color: "from-pink-500 to-purple-600",
      bgColor: theme === "dark" ? "bg-purple-500/10" : "bg-purple-100",
    },
    {
      label: "Companies",
      value: uniqueCompanies,
      icon: "🏢",
      color: "from-blue-500 to-cyan-600",
      bgColor: theme === "dark" ? "bg-blue-500/10" : "bg-blue-100",
    },
    {
      label: "Cities",
      value: uniqueCities,
      icon: "🌍",
      color: "from-green-500 to-emerald-600",
      bgColor: theme === "dark" ? "bg-green-500/10" : "bg-green-100",
    },
    {
      label: "Websites",
      value: totalWebsites,
      icon: "🌐",
      color: "from-orange-500 to-yellow-600",
      bgColor: theme === "dark" ? "bg-orange-500/10" : "bg-orange-100",
    },
  ];

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 bg-linear-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
          Welcome back! Here's your overview
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 ${
              theme === "dark"
                ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
                : "bg-white/50 backdrop-blur-xl border border-gray-200"
            } hover:shadow-xl shadow-purple-500/20 transition-all hover:scale-105`}
          >
            <div className="flex items-center justify-between mb-4">
              <div
                className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center text-2xl`}
              >
                {stat.icon}
              </div>
              <div
                className={`px-3 py-1 rounded-full text-xs font-medium bg-linear-to-r ${stat.color} text-white shadow-lg`}
              >
                Active
              </div>
            </div>
            <h3 className="text-3xl font-bold mb-1">{stat.value}</h3>
            <p
              className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Users */}
      <div
        className={`rounded-2xl p-6 ${
          theme === "dark"
            ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
            : "bg-white/50 backdrop-blur-xl border border-gray-200"
        } mb-10 shadow-xl shadow-purple-500/10`}
      >
        <h2 className="text-2xl font-bold mb-6">Recent Users</h2>
        <div className="space-y-3">
          {users.slice(0, 5).map((user) => (
            <div
              key={user.id}
              className={`flex items-center justify-between p-4 rounded-xl ${
                theme === "dark"
                  ? "bg-gray-800/50 hover:bg-gray-800"
                  : "bg-gray-50 hover:bg-gray-100"
              } transition-all`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                  {user.name[0]}
                </div>
                <div>
                  <h3 className="font-semibold">{user.name}</h3>
                  <p
                    className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                  >
                    {user.email}
                  </p>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <p className="font-medium">{user.company.name}</p>
                <p
                  className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                >
                  {user.address.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Chart Placeholder */}
      <div
        className={`rounded-2xl p-6 ${
          theme === "dark"
            ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
            : "bg-white/50 backdrop-blur-xl border border-gray-200"
        } shadow-xl shadow-purple-500/10`}
      >
        <h2 className="text-2xl font-bold mb-6">User Activity</h2>
        <div className="flex items-end justify-between gap-2 sm:gap-3 h-64">
          {[65, 85, 45, 95, 70, 55, 80, 90, 60, 75, 50, 100].map(
            (height, index) => (
              <div
                key={index}
                className="flex-1 bg-linear-to-t from-purple-600 to-pink-500 rounded-t-lg transition-all hover:from-purple-500 hover:to-pink-400 shadow-lg"
                style={{ height: `${height}%` }}
              ></div>
            ),
          )}
        </div>
        <div className="flex justify-between mt-4 text-xs sm:text-sm text-gray-400">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
          <span>Jul</span>
          <span>Aug</span>
          <span>Sep</span>
          <span>Oct</span>
          <span>Nov</span>
          <span>Dec</span>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
