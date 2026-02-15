import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import MainIcon from "../assets/Icons/MainIcon.png";

function Navbar({ isAuthenticated }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    navigate("/");
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded flex items-center justify-center">
            <img src={MainIcon} alt="BrandIcon" />
          </div>
          <span className="text-xl font-semibold text-white">Squid</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <>
            <Link
              to="/"
              className={`text-sm transition ${
                isActive("/") ? "text-white" : "text-gray-400 hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`text-sm transition ${
                isActive("/dashboard")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/dashboard/users"
              className={`text-sm transition ${
                isActive("/dashboard/users")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Users
            </Link>
            <Link
              to="/dashboard/settings"
              className={`text-sm transition ${
                isActive("/dashboard/settings")
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Settings
            </Link>
            <div className="h-6 w-px bg-gray-700"></div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-linear-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {(localStorage.getItem("userName") || "U")[0].toUpperCase()}
              </div>
              <button
                onClick={handleLogout}
                className="text-sm text-gray-400 hover:text-white transition"
              >
                Logout
              </button>
            </div>
          </>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-gray-900">
          <nav className="px-6 py-4 space-y-3">
            {isAuthenticated ? (
              <>
                <Link
                  to="/dashboard"
                  className="block text-sm text-gray-400 hover:text-white transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/dashboard/users"
                  className="block text-sm text-gray-400 hover:text-white transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Users
                </Link>
                <Link
                  to="/dashboard/settings"
                  className="block text-sm text-gray-400 hover:text-white transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Settings
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-sm text-gray-400 hover:text-white transition py-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/"
                  className="block text-sm text-gray-400 hover:text-white transition py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <a
                  href="#features"
                  className="block text-sm text-gray-400 hover:text-white transition py-2"
                >
                  Features
                </a>
                <a
                  href="#contact"
                  className="block text-sm text-gray-400 hover:text-white transition py-2"
                >
                  Contact
                </a>
                <Link
                  to="/login"
                  className="block px-6 py-2.5 text-sm bg-linear-to-r from-pink-400 to-purple-500 rounded-lg hover:opacity-90 transition font-medium text-white text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
