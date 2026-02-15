import { useState, useEffect } from "react";

function Settings() {
  const theme = "dark"; // Force dark theme
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    bio: "",
    location: "",
    website: "",
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    // Load settings from localStorage
    const savedName = localStorage.getItem("userName") || "";
    const savedEmail = localStorage.getItem("userEmail") || "";
    const savedBio = localStorage.getItem("userBio") || "";
    const savedLocation = localStorage.getItem("userLocation") || "";
    const savedWebsite = localStorage.getItem("userWebsite") || "";

    setFormData({
      fullName: savedName,
      email: savedEmail,
      bio: savedBio,
      location: savedLocation,
      website: savedWebsite,
    });
  }, []);

  const handleThemeToggle = () => {
    // Theme is forced to dark, so this does nothing
    // Kept for UI compatibility
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save to localStorage
    localStorage.setItem("userName", formData.fullName);
    localStorage.setItem("userEmail", formData.email);
    localStorage.setItem("userBio", formData.bio);
    localStorage.setItem("userLocation", formData.location);
    localStorage.setItem("userWebsite", formData.website);

    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="py-8">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3 bg-linear-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          Settings
        </h1>
        <p className={theme === "dark" ? "text-gray-400" : "text-gray-600"}>
          Manage your account settings and preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Theme Card */}
          <div
            className={`rounded-2xl p-6 ${
              theme === "dark"
                ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
                : "bg-white/50 backdrop-blur-xl border border-gray-200"
            } shadow-xl shadow-purple-500/10`}
          >
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <span>🎨</span> Appearance
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Theme</p>
                  <p className="text-sm text-gray-400">Dark mode (Fixed)</p>
                </div>
                <button
                  onClick={handleThemeToggle}
                  className="relative w-14 h-7 rounded-full transition bg-linear-to-r from-pink-500 to-purple-600"
                  disabled
                >
                  <div className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform translate-x-7" />
                </button>
              </div>

              {/* Theme Preview */}
              <div className="space-y-2">
                <p className="text-sm font-medium text-gray-400">Preview</p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    disabled
                    className="p-3 rounded-lg border-2 transition border-gray-300 bg-white opacity-50 cursor-not-allowed"
                  >
                    <div className="w-full h-8 bg-gray-100 rounded mb-2"></div>
                    <p className="text-xs text-gray-700 font-medium">Light</p>
                  </button>
                  <button
                    disabled
                    className="p-3 rounded-lg border-2 transition border-purple-500 bg-gray-900"
                  >
                    <div className="w-full h-8 bg-gray-800 rounded mb-2"></div>
                    <p className="text-xs text-gray-300 font-medium">Dark ✓</p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div
            className={`rounded-2xl p-6 ${
              theme === "dark"
                ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
                : "bg-white/50 backdrop-blur-xl border border-gray-200"
            } shadow-xl shadow-purple-500/10`}
          >
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <span>📈</span> Quick Stats
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span
                  className={
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }
                >
                  Profile views
                </span>
                <span className="font-bold">1,234</span>
              </div>
              <div className="flex justify-between">
                <span
                  className={
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }
                >
                  Last login
                </span>
                <span className="font-bold">Today</span>
              </div>
              <div className="flex justify-between">
                <span
                  className={
                    theme === "dark" ? "text-gray-400" : "text-gray-600"
                  }
                >
                  Member since
                </span>
                <span className="font-bold">2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Profile Form */}
        <div className="lg:col-span-2">
          <div
            className={`rounded-2xl p-6 ${
              theme === "dark"
                ? "bg-gray-900/50 backdrop-blur-xl border border-gray-800"
                : "bg-white/50 backdrop-blur-xl border border-gray-200"
            } shadow-xl shadow-purple-500/10`}
          >
            <h3 className="font-semibold text-lg mb-6 flex items-center gap-2">
              <span>👤</span> Profile Information
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Avatar */}
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 bg-linear-to-br from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-xl shadow-purple-500/30">
                  {formData.fullName ? formData.fullName[0].toUpperCase() : "U"}
                </div>
                <div>
                  <button
                    type="button"
                    className={`px-4 py-2 rounded-lg font-medium transition mb-2 ${
                      theme === "dark"
                        ? "bg-gray-800 hover:bg-gray-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                    }`}
                  >
                    Change Avatar
                  </button>
                  <p
                    className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
                  >
                    JPG, PNG or GIF. Max size 2MB
                  </p>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === "dark"
                      ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                  } focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition`}
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === "dark"
                      ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                  } focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition`}
                  placeholder="john@example.com"
                />
              </div>

              {/* Bio */}
              <div>
                <label
                  className={`block text-sm font-medium mb-2 ${
                    theme === "dark" ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Bio
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleInputChange}
                  rows="4"
                  className={`w-full px-4 py-3 rounded-lg border ${
                    theme === "dark"
                      ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                      : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                  } focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition resize-none`}
                  placeholder="Tell us about yourself..."
                />
              </div>

              {/* Location & Website */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === "dark"
                        ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                    } focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition`}
                    placeholder="San Francisco, CA"
                  />
                </div>
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      theme === "dark"
                        ? "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                        : "bg-gray-50 border-gray-300 text-gray-900 placeholder-gray-400"
                    } focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition`}
                    placeholder="https://example.com"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 py-3 bg-linear-to-r from-pink-500 to-purple-600 text-white rounded-lg hover:from-pink-600 hover:to-purple-700 transition font-medium shadow-xl shadow-purple-500/30"
                >
                  {saved ? "✓ Saved!" : "Save Changes"}
                </button>
                <button
                  type="button"
                  className={`px-6 py-3 rounded-lg font-medium transition ${
                    theme === "dark"
                      ? "bg-gray-800 hover:bg-gray-700 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-900"
                  }`}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>

          {/* Danger Zone */}
          <div
            className={`rounded-2xl p-6 mt-6 ${
              theme === "dark"
                ? "bg-red-950/20 backdrop-blur-xl border border-red-900/50"
                : "bg-red-50/50 backdrop-blur-xl border border-red-200"
            } shadow-xl shadow-red-500/10`}
          >
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-red-500">
              <span>⚠️</span> Danger Zone
            </h3>
            <p
              className={`text-sm mb-4 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}
            >
              Once you delete your account, there is no going back. Please be
              certain.
            </p>
            <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition font-medium">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
