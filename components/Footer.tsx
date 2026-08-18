"use client";

import React, { useState } from "react";
import Link from "next/link";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-[#0B0F19] text-white py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Logo / Brand Name */}
          <div className="lg:col-span-3">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              Avenia Care Foundation<span className="italic font-normal">i</span>
            </Link>
          </div>

          {/* Navigation Columns */}
          <div className="lg:col-span-4 grid grid-cols-3 gap-6 text-sm">
            {/* Home Column */}
            <div className="space-y-4">
              <h4 className="font-bold text-white">Home</h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/about#team" className="hover:text-white transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/what-we-do" className="hover:text-white transition-colors">
                    What we do
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* More Column */}
            <div className="space-y-4">
              <h4 className="font-bold text-white">More</h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  {/* Updated to link to dynamic subpage route standard */}
                  <Link href="/projects/1" className="hover:text-white transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  {/* Updated to link to dynamic subpage route standard */}
                  <Link href="/events/1" className="hover:text-white transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/donate" className="hover:text-white transition-colors">
                    Donate
                  </Link>
                </li>
                <li>
                  <Link href="/media" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect Column */}
            <div className="space-y-4">
              <h4 className="font-bold text-white">Connect</h4>
              <ul className="space-y-3 text-slate-400">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
                    Linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Subscribe Form */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
              Subscribe to get latest updates
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="w-full bg-transparent border border-slate-700 text-white placeholder-slate-500 px-5 py-3.5 rounded-l-md sm:rounded-r-none focus:outline-none focus:border-slate-500 text-sm"
              />
              <button
                type="submit"
                className="px-8 py-3.5 bg-white text-slate-900 font-semibold text-sm rounded-r-md sm:rounded-l-none hover:bg-slate-100 transition-colors mt-3 sm:mt-0 shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};