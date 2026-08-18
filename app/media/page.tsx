"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { VolunteerModal } from "@/components/VolunteerModal";

// Sample events data with unique IDs for dynamic routing
const eventsData = [
  {
    id: "a-day-with-our-wonderful-children",
    day: "13",
    month: "APR",
    title: "A day with our wonderful children",
  },
  {
    id: "seminar-caring-for-children-with-autism",
    day: "25",
    month: "APR",
    title: "Seminar: Caring for children with autism",
  },
];

// Sample top news cards data
const newsData = [
  {
    id: "autism-care-day",
    title: "Autism care day",
    date: "15th Nov 2026",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
    image: "/images/autism.png",
  },
  {
    id: "down-syndrome-outreach",
    title: "Down syndrome outreach",
    date: "15th Nov 2026",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
    image: "/images/littlekid.png",
  },
  {
    id: "caring-for-children-with-cerebral-palsy",
    title: "Caring for children with cerebral palsy",
    date: "15th Nov 2026",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
    image: "/images/cerebral-palsy.png",
  },
];

export default function MediaPage() {
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-[#1D2130] w-full">
      {/* Top Hero Section & News Cards */}
      <section className="bg-[#FFF7E2] py-20 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Top News Heading */}
          <AnimatedSection direction="up" delay={0.1} className="lg:col-span-6">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-slate-900" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
                  TOP NEWS
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1D2130] leading-tight">
                Our goal is to provide inclusive care for children with special needs
              </h1>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
              </p>
              <Link
                href="/media/our-goal-is-to-provide-inclusive-care"
                className="inline-block px-8 py-3.5 bg-[#F2C94C] hover:bg-yellow-400 text-slate-900 font-bold rounded-md transition-colors text-sm shadow-md"
              >
                Read more
              </Link>
            </div>
          </AnimatedSection>

          {/* Right Column: Top News Sidebar Card Stack */}
          <AnimatedSection direction="up" delay={0.2} className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 shadow-xl space-y-6 border border-slate-100">
              {newsData.map((item) => (
                <Link
                  key={item.id}
                  href={`/media/${item.id}`}
                  className="group flex flex-col sm:flex-row items-center gap-4 p-2 rounded-2xl hover:bg-slate-50 transition-colors"
                >
                  <div className="relative w-full sm:w-36 h-28 rounded-2xl overflow-hidden shrink-0 bg-slate-100">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-1.5 w-full">
                    <h3 className="text-base font-bold text-[#1D2130] group-hover:text-amber-600 transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                    <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      {item.date}
                    </p>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="py-16 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <AnimatedSection direction="up" delay={0.3}>
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
                    className="px-6 py-3.5 bg-[#F2C94C] hover:bg-yellow-400 text-slate-900 font-bold rounded-md transition-colors text-sm"
                  >
                    Join as a volunteer
                  </button>
                  <Link
                    href="/donate"
                    className="px-6 py-3.5 bg-white text-slate-900 hover:bg-slate-100 font-bold rounded-md transition-colors text-sm"
                  >
                    Donate
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Our Events Section */}
      <section className="py-16 pb-24 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-12">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D2130]">
                Our Events
              </h2>
            </div>
          </AnimatedSection>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {eventsData.map((event, idx) => (
              <AnimatedSection key={event.id} direction="up" delay={0.1 * (idx + 1)}>
                <Link
                  href={`/events/${event.id}`}
                  className="block bg-[#F2C94C] hover:bg-yellow-400 transition-colors rounded-2xl p-8 shadow-sm group"
                >
                  <div className="flex items-center justify-between gap-6">
                    {/* Date Badge */}
                    <div className="flex items-baseline gap-2 shrink-0">
                      <span className="text-4xl font-extrabold text-slate-900">
                        {event.day}
                      </span>
                      <span className="text-xs font-bold text-slate-900 uppercase tracking-widest">
                        {event.month}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-800">
                          NEXT EVENTS
                        </span>
                        <div className="w-8 h-[1.5px] bg-slate-900" />
                      </div>
                      <h3 className="text-lg font-extrabold text-slate-900 group-hover:underline leading-snug">
                        {event.title}
                      </h3>
                    </div>

                    {/* Arrow Button */}
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0 text-slate-900 group-hover:scale-110 transition-transform shadow-sm">
                      <svg
                        className="w-5 h-5"
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
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Modal */}
      <VolunteerModal
        isOpen={isVolunteerOpen}
        onClose={() => setIsVolunteerOpen(false)}
      />
    </main>
  );
}