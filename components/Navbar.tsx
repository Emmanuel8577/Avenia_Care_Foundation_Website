"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Media", href: "/media" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-black tracking-tight text-slate-900">
          largerthan<span className="italic font-serif font-normal">i</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-slate-900 ${
                  isActive ? "text-slate-900 font-semibold" : "text-slate-600"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Donate Button */}
        <div className="hidden md:block">
          <Link
            href="/donate"
            className="px-6 py-3 bg-[#1D2130] hover:bg-slate-800 text-white text-sm font-medium rounded-md transition-all shadow-sm"
          >
            Donate
          </Link>
        </div>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium text-slate-700 hover:text-slate-900"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full py-3 bg-[#1D2130] text-white text-sm font-medium rounded-md mt-4"
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
};