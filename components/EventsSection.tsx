"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { VolunteerModal } from "@/components/VolunteerModal";

export const EventsSection = () => {
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);

  const events = [
    {
      date: "13",
      month: "APR",
      title: "A day with our wonderful children",
      link: "/events/1",
    },
    {
      date: "25",
      month: "APR",
      title: "Seminar: Caring for children with autism",
      link: "/events/2",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Call to Action Banner */}
        <AnimatedSection direction="up" delay={0.1}>
          <div className="relative w-full h-[360px] md:h-[400px] rounded-3xl overflow-hidden shadow-xl flex items-center justify-center text-center p-8 mb-24">
            <Image
              src="/images/children.png"
              alt="Children smiling"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative z-10 max-w-3xl space-y-8">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
                You can contribute to provide a place for children with special
                needs!
              </h2>

              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => setIsVolunteerOpen(true)}
                  className="px-6 py-3.5 bg-[#F2C94C] hover:bg-[#e0b73e] text-slate-900 font-semibold text-sm rounded-md transition-colors"
                >
                  Join as a volunteer
                </button>

                <Link
                  href="/donate"
                  className="px-8 py-3.5 bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm rounded-md transition-colors"
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Events Block */}
        <AnimatedSection direction="up" delay={0.2}>
          <div className="space-y-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#1D2130]">
                Our Events
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {events.map((event, index) => (
                <Link
                  key={index}
                  href={event.link}
                  className="group bg-[#F2C94C] p-8 md:p-10 rounded-2xl flex items-center justify-between transition-transform duration-300 hover:-translate-y-1 shadow-md"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-center shrink-0">
                      <span className="block text-3xl md:text-4xl font-extrabold text-slate-900 leading-none">
                        {event.date}
                      </span>
                      <span className="block text-xs font-bold uppercase tracking-widest text-slate-800 mt-1">
                        {event.month}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800">
                          Next Events
                        </span>
                        <div className="w-8 h-[2px] bg-slate-900" />
                      </div>
                      <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:underline">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-slate-900 shrink-0 ml-4 group-hover:translate-x-1 transition-transform">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Volunteer Modal */}
      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />
    </section>
  );
};
