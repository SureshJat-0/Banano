import Navbar from "./Navbar";

function DashboardLayout({ children }) {
  const theme = "dark"; // Force dark theme

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isAuthenticated={true} />

      {/* Main Content */}
      <main className="pt-20 px-6 lg:px-8 max-w-7xl mx-auto">{children}</main>
    </div>
  );
}

export default DashboardLayout;
