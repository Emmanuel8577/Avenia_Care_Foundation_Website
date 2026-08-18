"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { VolunteerModal } from "@/components/VolunteerModal";

export default function WhatWeDoPage() {
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);

  // Data for the 6 Service Feature Cards
  const services = [
    {
      title: "Family support",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      icon: (
        <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      title: "Health benefits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      icon: (
        <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Education",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      icon: (
        <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
    },
    {
      title: "Basic amenities",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      icon: (
        <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h4m-4 0V11m0 0h4m-4 0H9" />
        </svg>
      ),
    },
    {
      title: "Therapy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      icon: (
        <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Public outreach",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
      icon: (
        <svg className="w-5 h-5 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A2.5 2.5 0 013 11.2V8.8a2.5 2.5 0 012.436-2.483l5.064-.288a2.5 2.5 0 012.5 2.483v5.376a2.5 2.5 0 01-2.5 2.483l-5.064-.288z" />
        </svg>
      ),
    },
  ];

  // Projects cards data
  const projects = [
    {
      title: "Mission smile 1k: Outdoor charity",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      bgImage: "/images/children.png",
      slug: "mission-smile-1k",
    },
    {
      title: "Weekly excursions",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      bgImage: "/images/bus.png",
      slug: "weekly-excursions",
    },
    {
      title: "Monthly public awareness",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      bgImage: "/images/class.png",
      slug: "monthly-public-awareness",
    },
  ];

  // Events list data
  const events = [
    {
      day: "13",
      month: "APR",
      title: "A day with our wonderful children",
      slug: "a-day-with-our-wonderful-children",
    },
    {
      day: "25",
      month: "APR",
      title: "Seminar: Caring for children with autism",
      slug: "seminar-caring-for-children-with-autism",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-[#1D2130] w-full">
      {/* Hero / Header Section */}
      <section className="py-20 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-slate-900" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
                  WHAT WE DO
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-[#1D2130] leading-tight">
                We are working cross country
              </h1>
              <p className="text-slate-600 text-base leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <div className="relative w-full h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/images/happy_children.png"
                alt="Happy Children"
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid Section (Light Yellow Container) */}
      <section className="bg-[#FFF7E2] py-20 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-12">
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#1D2130] leading-tight max-w-2xl">
              What we do for our kids with special needs
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection
                key={service.title}
                direction="up"
                delay={0.1 * (index + 1)}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F2C94C] rounded-lg shadow-sm shrink-0">
                    {service.icon}
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-[#1D2130]">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-12">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-slate-900" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
                  PROJECTS WE HAVE DONE
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-[#1D2130] leading-tight max-w-2xl">
                We are creating a place where children with special needs can thrive
              </h2>
            </div>
          </AnimatedSection>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection
                key={project.slug}
                direction="up"
                delay={0.1 * (index + 1)}
              >
                <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg group flex flex-col justify-end p-6 text-white">
                  <Image
                    src={project.bgImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                  <div className="relative z-10 space-y-4">
                    <h3 className="text-2xl font-bold leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-slate-200 text-xs leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-block px-5 py-2.5 bg-white hover:bg-slate-100 text-slate-900 font-bold rounded-md text-xs transition-colors shadow-sm"
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

      {/* CTA Banner */}
      <section className="pb-20 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden py-20 px-8 text-center text-white shadow-xl min-h-[360px] flex items-center justify-center">
              <Image
                src="/images/children.png"
                alt="Children banner"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  You can contribute to provide a place for children with special needs!
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  <button
                    onClick={() => setIsVolunteerOpen(true)}
                    className="px-6 py-3.5 bg-[#F2C94C] hover:bg-yellow-400 text-slate-900 font-bold rounded-md transition-colors text-sm shadow-md"
                  >
                    Join as a volunteer
                  </button>
                  <Link
                    href="/donate"
                    className="px-6 py-3.5 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-md transition-colors text-sm shadow-md"
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Events Section */}
      <section className="pb-24 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-8">
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className="text-3xl font-extrabold text-[#1D2130]">
              Our Events
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {events.map((event, index) => (
              <AnimatedSection
                key={event.slug}
                direction="up"
                delay={0.1 * (index + 1)}
              >
                <Link
                  href={`/events/${event.slug}`}
                  className="bg-[#F2C94C] hover:bg-yellow-400 transition-colors rounded-2xl p-6 md:p-8 flex items-center justify-between shadow-md group"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-center shrink-0">
                      <span className="block text-3xl md:text-4xl font-extrabold text-slate-900">
                        {event.day}
                      </span>
                      <span className="block text-xs font-bold uppercase tracking-wider text-slate-800">
                        {event.month}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800">
                          NEXT EVENTS
                        </span>
                        <div className="w-8 h-[1px] bg-slate-800" />
                      </div>
                      <h3 className="text-base md:text-xl font-extrabold text-slate-900 group-hover:underline">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 ml-4 group-hover:scale-110 transition-transform">
                    <svg
                      className="w-5 h-5 text-slate-900"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Modal Component */}
      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />
    </main>
  );
}