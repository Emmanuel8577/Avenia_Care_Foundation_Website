"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function EventDetailPage() {
  const otherEvents = [
    {
      date: "23",
      month: "APR",
      title: "Say no to plastic usage and save the planet",
      link: "/events/3",
    },
    {
      date: "30",
      month: "APR",
      title: "Monthly orphanage visits",
      link: "/events/4",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Yellow/Beige Hero Header */}
      <section className="bg-[#FFF7E2] py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-left space-y-8">
          <AnimatedSection direction="up" delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1D2130] leading-tight">
              A day with our wonderful children
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <div className="flex flex-wrap items-center gap-6 text-slate-800 text-sm font-medium pt-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-slate-900" />
                <span>Opp Opolo round about, Yenagoa, Bayelsa, Nigeria</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-slate-900" />
                <span>April 13, 2022 8:30 AM</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          {/* About Section Text */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D2130]">
                About
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean
                rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut
                est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla
                quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
              </p>

              <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus
                dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim a in nec aliquam
                fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer
                faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et
                pulvinar eget.
              </p>
            </div>
          </AnimatedSection>

          {/* Event Image Banner */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="relative w-full h-[350px] md:h-[480px] rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/images/children.png"
                alt="A day with our wonderful children"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 800px"
              />
            </div>
          </AnimatedSection>

          {/* Additional Description Text */}
          <AnimatedSection direction="up" delay={0.3}>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean
              rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut
              est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla
              quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
            </p>
          </AnimatedSection>

          {/* Other Events Section */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="pt-12 space-y-8">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D2130]">
                  Other events
                </h2>
              </div>

              <div className="space-y-6">
                {otherEvents.map((event, index) => (
                  <Link
                    key={index}
                    href={event.link}
                    className="group bg-[#F2C94C] p-8 md:p-10 rounded-2xl flex items-center justify-between transition-transform duration-300 hover:-translate-y-1 shadow-md"
                  >
                    <div className="flex items-center gap-8">
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
      </section>
    </main>
  );
}