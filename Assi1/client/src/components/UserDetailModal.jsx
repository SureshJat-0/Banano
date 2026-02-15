function UserDetailModal({ user, onClose, theme }) {
  if (!user) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div
        className={`max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${
          theme === "dark"
            ? "bg-gray-900 border border-gray-800"
            : "bg-white border border-gray-200"
        } shadow-2xl`}
      >
        {/* Header */}
        <div
          className={`sticky top-0 p-6 border-b ${
            theme === "dark"
              ? "border-gray-800 bg-gray-900"
              : "border-gray-200 bg-white"
          } flex items-center justify-between z-10`}
        >
          <h2 className="text-2xl font-bold">User Details</h2>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg transition ${
              theme === "dark"
                ? "hover:bg-gray-800 text-gray-400 hover:text-white"
                : "hover:bg-gray-100 text-gray-600 hover:text-gray-900"
            }`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Profile Section */}
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 bg-linear-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shrink-0">
              {user.name[0]}
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-1">{user.name}</h3>
              <p
                className={`text-lg mb-2 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                @{user.username}
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-linear-to-r from-pink-500 to-purple-600 text-white text-sm rounded-full font-medium">
                  Active
                </span>
                <span
                  className={`px-3 py-1 text-sm rounded-full font-medium ${
                    theme === "dark"
                      ? "bg-gray-800 text-gray-300"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  ID: {user.id}
                </span>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div
            className={`rounded-xl p-5 ${
              theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
            }`}
          >
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <span>📱</span> Contact Information
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span
                  className={`text-sm font-medium w-24 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Email:
                </span>
                <a
                  href={`mailto:${user.email}`}
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  {user.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className={`text-sm font-medium w-24 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Phone:
                </span>
                <a
                  href={`tel:${user.phone}`}
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  {user.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className={`text-sm font-medium w-24 ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  Website:
                </span>
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition"
                >
                  {user.website}
                </a>
              </div>
            </div>
          </div>

          {/* Address */}
          <div
            className={`rounded-xl p-5 ${
              theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
            }`}
          >
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <span>📍</span> Address
            </h4>
            <div className="space-y-2">
              <p>
                {user.address.street}, {user.address.suite}
              </p>
              <p>
                {user.address.city}, {user.address.zipcode}
              </p>
            </div>
          </div>

          {/* Company */}
          <div
            className={`rounded-xl p-5 ${
              theme === "dark" ? "bg-gray-800/50" : "bg-gray-50"
            }`}
          >
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <span>🏢</span> Company
            </h4>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-xl mb-1">
                  {user.company.name}
                </p>
                <p
                  className={`text-sm italic ${
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  "{user.company.catchPhrase}"
                </p>
              </div>
              <div
                className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
              >
                <span className="font-medium">Business:</span> {user.company.bs}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button className="flex-1 py-3 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition font-medium">
              Send Message
            </button>
            <button
              className={`flex-1 py-3 rounded-lg font-medium transition ${
                theme === "dark"
                  ? "bg-gray-800 hover:bg-gray-700 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-900"
              }`}
            >
              Edit User
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetailModal;
