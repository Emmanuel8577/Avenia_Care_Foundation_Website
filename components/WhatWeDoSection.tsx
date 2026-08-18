"use client";

import React from "react";
import Image from "next/image";
import { Building2, HeartHandshake, GraduationCap, Dog } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export const WhatWeDoSection = () => {
  const services = [
    {
      icon: Building2,
      title: "Family support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      icon: HeartHandshake,
      title: "Health benefits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      icon: GraduationCap,
      title: "Scholarships",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      icon: Dog,
      title: "Therapy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];

  return (
    <section className="py-20 bg-[#FFF7E2]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Heading and Services List */}
          <AnimatedSection direction="left" delay={0.1}>
            <div className="space-y-8 max-w-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-slate-900" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-900">
                  What We Do
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1D2130] leading-tight">
                Some services we provide for our children
              </h2>

              <p className="text-slate-600 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in
                eros elementum tristique.
              </p>

              {/* Service Items Grid with Left Border Indicator */}
              <div className="space-y-6 pt-2 pl-4 border-l-2 border-slate-200">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div key={index} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-md bg-slate-900 text-white flex items-center justify-center shrink-0 mt-1">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#1D2130] mb-1">
                          {service.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </AnimatedSection>

          {/* Right Column: Image with rounded corners */}
          <AnimatedSection direction="right" delay={0.2}>
            <div className="relative w-full h-[450px] md:h-[550px] rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/images/littlekid.png"
                alt="Child listening with headphones"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};