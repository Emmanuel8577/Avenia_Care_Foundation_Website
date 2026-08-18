"use client";

import React, { useState } from "react";

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function VolunteerModal({ isOpen, onClose }: VolunteerModalProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFormData({ firstName: "", lastName: "", email: "", message: "" });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8 space-y-6 shadow-2xl relative border border-slate-100">
        {/* Close Icon Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-6 right-6 w-8 h-8 rounded-md bg-[#1D2130] text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-slate-900">
              Application Received!
            </h3>
            <p className="text-slate-600 text-sm max-w-xs mx-auto">
              Thank you for signing up to volunteer. Our team will reach out to
              you shortly.
            </p>
            <button
              onClick={handleResetAndClose}
              className="mt-4 px-6 py-2.5 bg-[#1D2130] text-white font-bold rounded-lg text-xs"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="space-y-2 pr-6">
              <h2 className="text-3xl font-extrabold text-[#1D2130]">
                Join as a volunteer
              </h2>
              <p className="text-slate-500 text-xs leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen
                varius enim in eros elementum tristique.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* First Name */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-semibold text-slate-500">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full py-1.5 border-b border-slate-300 focus:border-slate-900 focus:outline-none text-sm text-slate-900"
                  />
                </div>

                {/* Last Name */}
                <div className="space-y-1">
                  <label className="block text-[11px] font-semibold text-slate-500">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full py-1.5 border-b border-slate-300 focus:border-slate-900 focus:outline-none text-sm text-slate-900"
                  />
                </div>
              </div>

              {/* Email Id */}
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold text-slate-500">
                  Email Id
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full py-1.5 border-b border-slate-300 focus:border-slate-900 focus:outline-none text-sm text-slate-900"
                />
              </div>

              {/* Message */}
              <div className="space-y-1">
                <label className="block text-[11px] font-semibold text-slate-500">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Type your Message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none text-sm text-slate-900 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 bg-[#F2C94C] hover:bg-yellow-400 text-slate-900 font-bold rounded-md transition-colors text-xs shadow-sm disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Send message"}
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}