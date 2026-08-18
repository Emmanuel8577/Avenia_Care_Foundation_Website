"use client";

import React from "react";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";

export const StatsSection = () => {
  const legendItems = [
    { color: "bg-[#B5EAD7]", label: "40% child care home" },
    { color: "bg-[#C7CEEA]", label: "35% cleanliness program" },
    { color: "bg-[#FFDAC1]", label: "10% helping people" },
    { color: "bg-[#E2F0CB]", label: "10% excursions" },
    { color: "bg-[#FFB7B2]", label: "5% feeding the poor" },
  ];

  return (
    <section className="py-24 bg-[#0B0F19] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Information & Legends */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="space-y-8 max-w-xl">
              <h2 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                How we spend your donations and where it goes
              </h2>

              <p className="text-slate-400 text-sm leading-relaxed">
                We understand that when you make a donation, you want to know
                exactly where your money is going and we pledge to be transparent.
              </p>

              {/* Color Legend Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-4 gap-x-6 pt-4">
                {legendItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <span
                      className={`w-4 h-4 rounded-sm ${item.color} shrink-0`}
                    />
                    <span className="text-xs font-semibold text-slate-200">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Right Side: Chart Visual */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative w-full max-w-[450px] aspect-square mx-auto">
              <Image
                src="/images/Chart.png"
                alt="Donation breakdown chart"
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};