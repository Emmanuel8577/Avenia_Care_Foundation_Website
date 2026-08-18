"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, X } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export const AboutSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Text Content */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="space-y-6 max-w-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-slate-900" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-900">
                  Know About Us
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1D2130] leading-tight">
                We provide a place for children with special needs
              </h2>

              <p className="text-slate-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique.
              </p>

              <p className="text-slate-600 leading-relaxed">
                Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
                libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere.
              </p>

              <div className="pt-2">
                <Link
                  href="/about"
                  className="inline-block px-8 py-3.5 bg-[#F2C94C] hover:bg-[#e0b73e] text-slate-900 font-semibold text-sm rounded-md transition-colors"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </AnimatedSection>

          {/* Right Video Thumbnail */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative w-full h-[400px] md:h-[480px] rounded-3xl overflow-hidden shadow-lg group">
              <Image
                src="/images/about.png"
                alt="Children walking together in a park"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

              {/* Play Button Overlay */}
              <button
                onClick={() => setIsVideoOpen(true)}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform"
                aria-label="Play About Video"
              >
                <Play className="w-6 h-6 text-slate-900 fill-current translate-x-0.5" />
              </button>
            </div>
          </AnimatedSection>
        </div>

        {/* Our Supporters Bar */}
        <AnimatedSection direction="up" delay={0.3}>
          <div className="border-t border-slate-100 pt-10">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-8">
              Our Supporters
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num} className="flex items-center gap-2 font-bold text-slate-800 text-lg">
                  <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs">
                    logo
                  </div>
                  <span>logoipsum</span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Embedded Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white p-2 bg-black/50 rounded-full hover:bg-black transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/zZX3EmgAtKo" 
              title="What is the World Health Organization?" 
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};