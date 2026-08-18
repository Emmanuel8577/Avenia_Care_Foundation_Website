"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Play, X } from "lucide-react";

export const HeroSection = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative w-full h-[calc(100vh-80px)] min-h-[600px] max-h-[800px] overflow-hidden bg-slate-900">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/Hero_Image.png"
          alt="Inclusive care for children with special needs"
          fill
          priority
          className="object-cover object-center opacity-70"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex flex-col justify-between py-16 text-white">
        {/* Main Heading & Action CTA */}
        <div className="my-auto max-w-2xl space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.15] tracking-tight"
          >
            Inclusive care for children with special needs
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex items-center gap-6 pt-2"
          >
            <Link
              href="/what-we-do"
              className="px-7 py-3.5 bg-white text-slate-900 hover:bg-slate-100 text-sm font-semibold rounded-md transition-all shadow-md"
            >
              What we do
            </Link>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="flex items-center gap-3 text-sm font-semibold text-white hover:text-slate-200 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Play className="w-4 h-4 text-white fill-current translate-x-0.5" />
              </span>
              Play Video
            </button>
          </motion.div>
        </div>

        {/* Bottom Progress/Stat Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full flex items-center justify-between text-xs sm:text-sm font-medium border-t border-white/20 pt-4"
        >
          <span>230 children under our care</span>
          <div className="hidden sm:block flex-1 mx-8 h-[1px] bg-white/20" />
          <span>58 donations collected</span>
        </motion.div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white p-2 bg-black/50 rounded-full hover:bg-black transition-colors z-10"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/zZX3EmgAtKo" title="What is the World Health Organization?"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
};