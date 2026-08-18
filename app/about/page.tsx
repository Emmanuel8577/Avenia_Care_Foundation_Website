"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";
import { VolunteerModal } from "@/components/VolunteerModal";

export default function AboutUsPage() {
  const [isVolunteerOpen, setIsVolunteerOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Team members data matching the design
  const teamMembers = [
    {
      name: "Leonard John Davies",
      role: "Cofounder, CEO",
      image: "/images/Leonard John Davies.png",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Francis Weber",
      role: "Vice Chairman",
      image: "/images/Francis Weber.png",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Kyla Obrien",
      role: "Head of Authority",
      image: "/images/Kyla Obrien.png",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Adrian Dixon",
      role: "Support Executive",
      image: "/images/Adrian Dixon.png",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Freddy Busby",
      role: "Project Manager",
      image: "/images/Freddy Busby.png",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Dale Banks",
      role: "Accountant, Finance",
      image: "/images/Dale Banks.png",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Miriam Middleton",
      role: "Cofounder, CEO",
      image: "/images/Miriam Middleton.png",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Ellen Walton",
      role: "Vice Chairman",
      image: "/images/Ellen Walton.png",
      facebook: "#",
      twitter: "#",
      linkedin: "#",
    },
  ];

  // Awards data matching the design
  const awards = [
    {
      year: "2021",
      title: "Best NGO Award",
      location: "BERLIN, GERMANY",
    },
    {
      year: "2018",
      title: "Global Award",
      location: "NEW YORK, USA",
    },
    {
      year: "2014",
      title: "CSN Award",
      location: "NEW DELHI, INDIA",
    },
    {
      year: "2010",
      title: "NGO of the year Award",
      location: "VIENNA, AUSTRIA",
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
      {/* Hero / Know About Us Section */}
       <section className="py-20 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-12">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-[2px] bg-slate-900" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
                    KNOW ABOUT US
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-[#1D2130] leading-tight">
                  We are a non-governmental organization
                </h1>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-lg md:text-xl font-bold text-[#1D2130] leading-snug">
                  Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Video / Banner Image Section */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="relative w-full h-[380px] md:h-[480px] rounded-3xl overflow-hidden shadow-lg group bg-black">
              {isVideoPlaying ? (
                <iframe
                  src="https://www.youtube.com/embed/zZX3EmgAtKo?autoplay=1&mute=1&enablejsapi=1"
                  title="What is the World Health Organization?"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <>
                  <Image
                    src="/images/Aenean.png"
                    alt="Volunteers smiling together"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      aria-label="Play Video"
                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform cursor-pointer"
                    >
                      <svg
                        className="w-6 h-6 text-slate-900 translate-x-0.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                </>
              )}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision Section (Light Yellow Container) */}
      <section className="bg-[#FFF7E2] py-20 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="up" delay={0.1}>
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
                  OUR MISSION
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1D2130] leading-snug">
                  We make sure to provide inclusive care for children with special needs
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
                  OUR VISION
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#1D2130] leading-snug">
                  Provide more inclusive care to children around the world
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
              </div>
            </AnimatedSection>
          </div>

          {/* Our Supporters Logos */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-slate-800 block">
                OUR SUPPORTERS
              </span>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
                {Array.from({ length: 6 }).map((_, idx) => (
                  <div key={idx} className="flex justify-center items-center">
                    <span className="font-extrabold text-xl text-slate-800 tracking-tight flex items-center gap-1">
                      <span className="w-3 h-3 rounded-full bg-slate-900 inline-block" />
                      logoipsum
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Awards & Recognitions */}
      <section className="py-20 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-12">
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D2130] text-center">
              Awards & Recognitions
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {awards.map((award, index) => (
              <AnimatedSection
                key={award.year}
                direction="up"
                delay={0.1 * (index + 1)}
              >
                <div className="space-y-3 flex flex-col items-center">
                  {/* Laurel Wreath Award Icon */}
                  <div className="w-16 h-16 bg-[#F2C94C]/20 rounded-full flex items-center justify-center text-[#F2C94C]">
                    <svg className="w-10 h-10 text-amber-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l2.4 5.2 5.6.8-4 4 1 5.6-5-2.8-5 2.8 1-5.6-4-4 5.6-.8z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-extrabold text-[#1D2130]">
                    {award.year}
                  </h3>
                  <div className="space-y-0.5">
                    <p className="font-bold text-sm text-[#1D2130]">
                      {award.title}
                    </p>
                    <p className="text-[10px] font-bold uppercase text-slate-400 tracking-widest">
                      {award.location}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Our Journey Yellow Card */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="bg-[#F2C94C] rounded-3xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-lg">
              <div className="space-y-6 text-[#1D2130]">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-900">
                  OUR JOURNEY
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  How we raised 34M
                </h2>
                <p className="text-slate-800 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.
                </p>

                {/* Stats Counter */}
                <div className="flex flex-wrap gap-8 pt-4">
                  <div>
                    <span className="block text-3xl font-extrabold text-slate-900">
                      34M+
                    </span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                      Donation Received
                    </span>
                  </div>
                  <div>
                    <span className="block text-3xl font-extrabold text-slate-900">
                      400+
                    </span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                      Volunteers
                    </span>
                  </div>
                  <div>
                    <span className="block text-3xl font-extrabold text-slate-900">
                      20+
                    </span>
                    <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                      Care homes
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative w-full h-[280px] md:h-[340px] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src="/images/together.png"
                  alt="Team raised funds together"
                  fill
                  className="object-cover"
                />
                <iframe
                  width="1521"
                  height="561"
                  src="https://www.youtube.com/embed/zZX3EmgAtKo"
                  allowFullScreen
                />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="py-20 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-12">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="text-center space-y-3 max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D2130]">
                Meet our team
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
              </p>
            </div>
          </AnimatedSection>

          {/* Team Grid (4 cols) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection
                key={member.name}
                direction="up"
                delay={0.05 * (index + 1)}
              >
                <div className="space-y-4 text-center group">
                  <div className="relative w-full h-[260px] rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-[#1D2130]">
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Icons */}
                  <div className="flex items-center justify-center gap-3 text-slate-700 pt-1">
                    <a href={member.facebook} aria-label="Facebook" className="hover:text-slate-900 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href={member.twitter} aria-label="Twitter" className="hover:text-slate-900 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                      </svg>
                    </a>
                    <a href={member.linkedin} aria-label="LinkedIn" className="hover:text-slate-900 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </a>
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