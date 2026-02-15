import "../App.css";
import HeroGroup from "../assets/HeroGroup.png";
import globe from "../assets/Globe.png";
import world from "../assets/world.png";
import circleIcons from "../assets/CircleIcons.png";
import MainIcon from "../assets/Icons/MainIcon.png";
import Icon1 from "../assets/Icons/Icon1.svg";
import Icon2 from "../assets/Icons/Icon2.svg";
import Icon3 from "../assets/Icons/Icon3.png";
import Icon4 from "../assets/Icons/Icon4.svg";
import Icon5 from "../assets/Icons/Icon5.svg";
import Icon6 from "../assets/Icons/Icon6.svg";
import ComIcon1 from "../assets/Icons/ComIcon1.png";
import ComIcon2 from "../assets/Icons/ComIcon2.png";
import ComIcon3 from "../assets/Icons/ComIcon3.png";
import ComIcon4 from "../assets/Icons/ComIcon4.png";
import ComIcon5 from "../assets/Icons/ComIcon5.png";
import ComIcon6 from "../assets/Icons/ComIcon6.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function LandingPage() {
  return (
    <div className="app-shell text-white min-h-screen overflow-x-hidden">
      <Navbar isAuthenticated={false} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
              Beautiful Landing Page
              <br />
              Design for You
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem
            </p>
            <Link
              to="/login"
              className="inline-block px-8 py-3.5 text-sm bg-linear-to-r from-pink-400 to-purple-500 rounded-lg hover:opacity-90 transition font-medium shadow-lg shadow-pink-500/20"
            >
              Get Started
            </Link>
          </div>

          {/* Dashboard Mockup */}
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl">
              <div className="border-gray-800/50 rounded-3xl flex justify-center">
                <img src={HeroGroup} alt="Hero section image" />
              </div>
            </div>
          </div>
        </div>

        {/* Background Gradients */}
        <div className="absolute bottom-0 left-0 w-1/2 h-96 bg-linear-to-r from-pink-500/20 to-transparent blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-96 bg-linear-to-l from-purple-500/20 to-transparent blur-[120px] pointer-events-none"></div>
      </section>

      {/* Feature Boxes Section */}
      <section className="py-32 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Feature Boxes
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              A good design is not only aesthetically pleasing, but also
              functional. It should be able to solve the problem
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[Icon1, Icon2, Icon3, Icon4, Icon5, Icon6].map((item, index) => (
              <div
                key={index}
                className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-3xl p-8 hover:border-gray-700 transition-all group hover:bg-gray-900/80"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-2xl`}
                >
                  <img src={item} alt="" />
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Fully Customizable
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  A good design is not only aesthetically pleasing, but also
                  functional. It should be able to solve the problem
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-20 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Icon Circle */}
            <img src={circleIcons} alt="Circle Icons" />

            {/* Content */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                We're here to guide and help you at all times
              </h2>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                A good design is not only aesthetically pleasing, but also
                functional. It should be able to solve the problem
              </p>
              <button className="px-8 py-3.5 bg-linear-to-r from-pink-400 to-purple-500 rounded-lg hover:opacity-90 transition font-medium shadow-lg shadow-pink-500/20">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <section className="py-20 px-6 lg:px-8 bg-gray-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-16 leading-tight">
            Companies we Worked
            <br />
            With in Since 2015
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-16">
            {[ComIcon1, ComIcon2, ComIcon3, ComIcon4, ComIcon5, ComIcon6].map(
              (company, index) => (
                <div
                  key={index}
                  className={`text-2xl lg:text-3xl transition cursor-pointer`}
                >
                  <img src={company} alt="icon" />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative flex justify-between bg-linear-160 from-[#FF9898] to-[#8054FF] rounded-[2.5rem] p-12 lg:p-16 overflow-hidden">
            <div className="z-10 max-w-xl">
              <p className="text-pink-900 text-sm font-medium mb-3">
                Join with Our Team
              </p>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight">
                Fell Free to Join our
                <br />
                15 Days Free Trial
              </h2>
              <button className="px-8 py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition font-medium shadow-xl">
                Download Template
              </button>
            </div>

            {/* world image */}
            <div className="absolute right-0 top-10 w-120 h-68">
              <img src={world} alt="world" />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Globe Wireframe */}
            <div className="relative hidden lg:block">
              <div className="w-full max-w-md aspect-square">
                <img src={globe} alt="globe" />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                Get In Touch
              </h2>
              <p className="text-gray-400 text-lg mb-10">
                A good design is not only aesthetically pleasing, but also
                functional. It should be able to solve the problem
              </p>

              <form className="space-y-5">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-4 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:border-purple-500 transition placeholder:text-gray-600 text-white"
                />
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-5 py-4 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:border-purple-500 transition placeholder:text-gray-600 text-white"
                />
                <textarea
                  placeholder="Message"
                  rows="6"
                  className="w-full px-5 py-4 bg-gray-900/50 border border-gray-800 rounded-xl focus:outline-none focus:border-purple-500 transition resize-none placeholder:text-gray-600 text-white"
                ></textarea>
                <button
                  type="submit"
                  className="px-10 py-4 bg-linear-to-r from-pink-400 to-purple-500 rounded-xl hover:opacity-90 transition font-medium shadow-lg shadow-pink-500/20"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 lg:px-8 border-t border-gray-900 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded flex items-center justify-center">
                  <img src={MainIcon} alt="Brand Icon" />
                </div>
                <span className="text-2xl font-semibold">Squid</span>
              </div>
              <p className="text-gray-500 leading-relaxed max-w-sm">
                A good design is not only aesthetically pleasing, but also
                functional. It should be able to solve the problem
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold text-white mb-5">Sections</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition text-sm"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition text-sm"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition text-sm"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-5">Portfolio</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition text-sm"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition text-sm"
                  >
                    All Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition text-sm"
                  >
                    Product Single
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition text-sm"
                  >
                    Archive
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-5">Utilities</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition text-sm"
                  >
                    Style Guide
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition text-sm"
                  >
                    Licenses
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition text-sm"
                  >
                    Changelog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-500 hover:text-white transition text-sm"
                  >
                    404 Error Page
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-gray-600">
              All Rights Reserved. Copyright 2023
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-900 hover:bg-gray-800 rounded-lg flex items-center justify-center transition"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LandingPage;
