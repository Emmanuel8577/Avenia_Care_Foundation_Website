"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "./AnimatedSection";

export const ProjectsSection = () => {
  const projects = [
    {
      image: "/images/children.png",
      title: "Mission smile 1k: Outdoor charity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "/projects/1",
    },
    {
      image: "/images/bus.png",
      title: "Weekly excursions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "/projects/2",
    },
    {
      image: "/images/class.png",
      title: "Monthly public awareness",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "/projects/3",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="max-w-2xl mb-16 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-slate-900" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-900">
                Projects We Have Done
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1D2130] leading-tight">
              We are creating a place where children with special needs can
              thrive
            </h2>
          </div>
        </AnimatedSection>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection
              key={index}
              direction="up"
              delay={0.2 + index * 0.15}
            >
              <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg group flex flex-col justify-between p-8 text-white">
                {/* Background Image */}
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

                {/* Content Overlay */}
                <div className="relative z-10 space-y-3">
                  <h3 className="text-2xl font-bold leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-200 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                <div className="relative z-10 pt-4">
                  <Link
                    href={project.link}
                    className="inline-block px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 text-sm font-semibold rounded-md transition-colors shadow-md"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
