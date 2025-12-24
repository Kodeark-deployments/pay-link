"use client";

import { useState } from "react";
import { Menu, X, LayoutDashboard, Plus } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full border-b border-gray-800 bg-black/50 backdrop-blur-xl fixed top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                AI PAY-LINK™
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="/dashboard"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                Dashboard
              </a>
              <a
                href="/create"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                Create
              </a>
              <a
                href="/create"
                className="px-4 py-2 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {open ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-4 space-y-3 bg-gray-900/95 backdrop-blur-xl border-t border-gray-800">
            <a
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="font-medium">Dashboard</span>
            </a>
            
            <a
              href="/create"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200"
            >
              <Plus className="w-5 h-5" />
              <span className="font-medium">Create Link</span>
            </a>

            <div className="pt-3 border-t border-gray-800">
              <a
                href="/create"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 text-white font-semibold hover:opacity-90 transition-opacity duration-200"
              >
                Get Started
              </a>
            </div>

            <div className="flex justify-center gap-6 pt-2">
              <a
                href="/"
                onClick={() => setOpen(false)}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Pricing
              </a>
              <a
                href="/"
                onClick={() => setOpen(false)}
                className="text-sm text-gray-400 hover:text-white transition-colors duration-200"
              >
                Help
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navbar;