import { useEffect, useState } from "react";
import { mockUsers } from "../data/mockData";
import UserDetailModal from "../components/UserDetailModal";

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' or 'desc'
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState("table"); // 'table' or 'cards'
  const [selectedUser, setSelectedUser] = useState(null);
  const theme = "dark"; // Force dark theme
  const usersPerPage = 5;

  useEffect(() => {
    // Simulate API loading
    setTimeout(() => {
      setUsers(mockUsers);
      setFilteredUsers(mockUsers);
      setLoading(false);
    }, 500);
  }, []);

  // Search functionality
  useEffect(() => {
    let result = users.filter(
      (user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()),
    );

    // Sort
    result.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });

    setFilteredUsers(result);
    setCurrentPage(1); // Reset to first page on search/sort
  }, [searchTerm, sortOrder, users]);

  // Pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
          <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
            Loading users...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 bg-linear-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Users
        </h1>
        <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
          Manage and view all users
        </p>
      </div>

      {/* Controls */}
      <div
        className={`rounded-2xl p-6 mb-6 ${
          theme === "dark"
            ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
            : "bg-white/50 backdrop-blur-xl border border-gray-200"
        } shadow-xl shadow-purple-500/10`}
      >
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          {/* Search */}
          <div className="flex-1 w-full lg:max-w-md">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by name or email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full px-4 py-3 pl-11 rounded-lg border ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                    : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                } focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition`}
              />
              <svg
                className={`absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 ${
                  theme === "dark" ? "text-gray-500" : "text-gray-400"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Sort and View Toggle */}
          <div className="flex gap-2 w-full lg:w-auto">
            {/* Sort */}
            <button
              onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
              className={`flex-1 lg:flex-none px-4 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              }`}
            >
              <span>Sort {sortOrder === "asc" ? "A-Z" : "Z-A"}</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    sortOrder === "asc"
                      ? "M3 4h13M3 8h9m-9 4h6m4 0l4-4m0 0l4 4m-4-4v12"
                      : "M3 4h13M3 8h9m-9 4h9m5-4v12m0 0l-4-4m4 4l4-4"
                  }
                />
              </svg>
            </button>

            {/* View Toggle */}
            <div
              className={`flex rounded-lg p-1 ${theme === "dark" ? "bg-gray-800" : "bg-gray-100"}`}
            >
              <button
                onClick={() => setViewMode("table")}
                className={`px-4 py-2 rounded ${
                  viewMode === "table"
                    ? "bg-linear-to-r from-pink-500 to-purple-600 text-white"
                    : theme === "dark"
                      ? "text-gray-400"
                      : "text-gray-600"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
              </button>
              <button
                onClick={() => setViewMode("cards")}
                className={`px-4 py-2 rounded ${
                  viewMode === "cards"
                    ? "bg-linear-to-r from-pink-500 to-purple-600 text-white"
                    : theme === "dark"
                      ? "text-gray-400"
                      : "text-gray-600"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Results count */}
        <p
          className={`mt-4 text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
        >
          Showing {indexOfFirstUser + 1}-
          {Math.min(indexOfLastUser, filteredUsers.length)} of{" "}
          {filteredUsers.length} users
        </p>
      </div>

      {/* Users Display */}
      {viewMode === "table" ? (
        /* Table View */
        <div
          className={`rounded-2xl overflow-hidden ${
            theme === "dark"
              ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
              : "bg-white/50 backdrop-blur-xl border border-gray-200"
          } shadow-xl shadow-purple-500/10`}
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead
                className={theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"}
              >
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    User
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Email
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Company
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    City
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {currentUsers.map((user) => (
                  <tr
                    key={user.id}
                    className={`transition ${
                      theme === "dark"
                        ? "hover:bg-gray-800/30"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-linear-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                          {user.name[0]}
                        </div>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p
                            className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                          >
                            @{user.username}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <p
                        className={
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }
                      >
                        {user.email}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p
                        className={
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }
                      >
                        {user.company.name}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <p
                        className={
                          theme === "dark" ? "text-gray-300" : "text-gray-700"
                        }
                      >
                        {user.address.city}
                      </p>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => setSelectedUser(user)}
                        className="px-4 py-2 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition text-sm font-medium shadow-lg shadow-purple-500/30"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Cards View */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentUsers.map((user) => (
            <div
              key={user.id}
              className={`rounded-2xl p-6 ${
                theme === "dark"
                  ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
                  : "bg-white/50 backdrop-blur-xl border border-gray-200"
              } hover:shadow-xl shadow-purple-500/20 transition-all hover:scale-105`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-16 h-16 bg-linear-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  {user.name[0]}
                </div>
                <button
                  onClick={() => setSelectedUser(user)}
                  className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>
              </div>
              <h3 className="text-xl font-bold mb-1">{user.name}</h3>
              <p
                className={`text-sm mb-3 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                @{user.username}
              </p>
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-400">📧</span>
                  <span
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
                  >
                    {user.email}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-400">🏢</span>
                  <span
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
                  >
                    {user.company.name}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-400">📍</span>
                  <span
                    className={
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }
                  >
                    {user.address.city}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedUser(user)}
                className="w-full py-2 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition font-medium shadow-lg shadow-purple-500/30"
              >
                View Full Details
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="mt-8 flex justify-center">
        <div
          className={`flex flex-wrap gap-2 p-2 rounded-xl ${
            theme === "dark"
              ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
              : "bg-white/50 backdrop-blur-xl border border-gray-200"
          } shadow-xl shadow-purple-500/10`}
        >
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              currentPage === 1
                ? theme === "dark"
                  ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
                : theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
            }`}
          >
            Previous
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                currentPage === index + 1
                  ? "bg-linear-to-r from-pink-500 to-purple-600 text-white"
                  : theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700 text-white"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-medium transition ${
              currentPage === totalPages
                ? theme === "dark"
                  ? "bg-gray-800 text-gray-600 cursor-not-allowed"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
                : theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
            }`}
          >
            Next
          </button>
        </div>
      </div>

      {/* User Detail Modal */}
      {selectedUser && (
        <UserDetailModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
          theme={theme}
        />
      )}
    </div>
  );
}

export default Users;
