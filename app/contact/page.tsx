"use client";

import React, { useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission logic
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-white text-[#1D2130] w-full">
      {/* Top Hero Section */}
      <section className="bg-[#FFF7E2] py-20 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Heading */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-slate-900" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
                  CONTACT US
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#1D2130] leading-tight">
                We&apos;d love to hear from you
              </h1>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md">
                Have any question in mind or want to enquire? Please feel free to
                contact us through the form or the following details.
              </p>
            </div>
          </AnimatedSection>

          {/* Right Column: Address & Contact Details */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="space-y-8 pt-2">
              {/* Let's talk */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-[#1D2130]">Let&apos;s talk!</h3>
                <div className="flex flex-wrap items-center gap-6 text-sm text-slate-700">
                  <span>+234 09012346514</span>
                  <span>hello@largerthani.com</span>
                </div>
              </div>

              {/* Head office */}
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#1D2130]">Headoffice</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                  8 Brewery Drive, Lagos, Nigeria.
                </p>
              </div>

              {/* Branch Office */}
              <div className="space-y-1">
                <h3 className="text-base font-bold text-[#1D2130]">Branch Office</h3>
                <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                  Opp Opolo round about, Yenagoa, Bayelsa, Nigeria.
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-4 pt-2">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs hover:bg-slate-700 transition-colors"
                  aria-label="Facebook"
                >
                  f
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs hover:bg-slate-700 transition-colors"
                  aria-label="Twitter"
                >
                  t
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs hover:bg-slate-700 transition-colors"
                  aria-label="LinkedIn"
                >
                  in
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 w-full">
        <div className="max-w-3xl mx-auto px-6">
          <AnimatedSection direction="up" delay={0.1}>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center space-y-3">
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-sm">
                  Thank you for contacting us. We will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2 bg-slate-900 text-white font-bold rounded-md text-xs"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* First Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-500">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      placeholder="John"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full py-2 border-b border-slate-300 focus:border-slate-900 focus:outline-none text-sm text-slate-900 transition-colors"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-500">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      placeholder="Doe"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full py-2 border-b border-slate-300 focus:border-slate-900 focus:outline-none text-sm text-slate-900 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Email ID */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-500">
                      Email ID
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="johndoe@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full py-2 border-b border-slate-300 focus:border-slate-900 focus:outline-none text-sm text-slate-900 transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div className="space-y-1">
                    <label className="block text-xs font-semibold text-slate-500">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full py-2 border-b border-slate-300 focus:border-slate-900 focus:outline-none text-sm text-slate-900 transition-colors"
                    />
                  </div>
                </div>

                {/* Message Box */}
                <div className="space-y-1">
                  <label className="block text-xs font-semibold text-slate-500">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    placeholder="Type your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 border border-slate-300 rounded-lg focus:border-slate-900 focus:outline-none text-sm text-slate-900 transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 bg-[#F2C94C] hover:bg-yellow-400 text-slate-900 font-bold rounded-md transition-colors text-sm shadow-sm disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send message"}
                  </button>
                </div>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>

      {/* Map Embed Section */}
      <section className="w-full h-[400px] bg-slate-100 overflow-hidden relative">
        <iframe
          title="Office Location Map"
          src="https://maps.google.com/maps?q=Lagos,%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 grayscale opacity-90 hover:grayscale-0 transition-all duration-300"
          allowFullScreen
          loading="lazy"
        />
      </section>
    </main>
  );
}