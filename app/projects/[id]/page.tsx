"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Edit3, LayoutGrid, Image as ImageIcon, Compass } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

export default function ProjectDetailPage() {
  const stats = [
    {
      icon: Edit3,
      title: "20+ orphanage visit in 2 months",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: LayoutGrid,
      title: "230 People Have donated",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: ImageIcon,
      title: "30+ people joined",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
    {
      icon: Compass,
      title: "1.2m Raised for this initiate",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
    },
  ];

  const moreProjects = [
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
    <main className="min-h-screen bg-white text-[#1D2130] w-full">
      {/* Top Details Section */}
      <section className="pt-16 pb-20 w-full">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 space-y-10">
          {/* Section Header */}
          <AnimatedSection direction="up" delay={0.1}>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-[2px] bg-slate-900" />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-800">
                  OUR PROJECT
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-[#1D2130] leading-tight">
                Mission Smile 1k: Outdoor charity outreach
              </h1>
            </div>
          </AnimatedSection>

          {/* Paragraph Group 1 */}
          <AnimatedSection direction="up" delay={0.2}>
            <div className="space-y-6 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean
                rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut
                est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla
                quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
              </p>
              <p>
                Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus
                dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras. Mauris morbi sed dignissim a in nec aliquam
                fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer
                faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et
                pulvinar eget.
              </p>
              <p>
                Consectetur feugiat quis hac enim nullam in enim. Tellus nisi dapibus libero rutrum vitae nisl, cursus in sed. Egestas
                mi ultricies et consectetur vel non. Augue enim enim, eget ut sit purus, justo nisl pharetra. Tincidunt leo aenean dui,
                varius metus, vel. Maecenas eu rhoncus, est nunc nisi volutpat, amet venenatis faucibus. Enim, vel nunc purus feugiat
                purus tincidunt neque. Massa ultricies faucibus pellentesque risus duis est.
              </p>
            </div>
          </AnimatedSection>

          {/* Featured Image */}
          <AnimatedSection direction="up" delay={0.3}>
            <div className="relative w-full h-[360px] md:h-[480px] rounded-3xl overflow-hidden shadow-md">
              <Image
                src="/images/charity.png"
                alt="Mission Smile Outdoor Charity Outreach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 896px"
              />
            </div>
          </AnimatedSection>

          {/* Content Heading & Bullets */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#1D2130]">
                Some cool heading
              </h2>
              <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio
                orci lectus urna ante consequat erat non morbi. Rhoncus ullamcorper dictum sit non semper sit tellus adipiscing. Est
                sapien rhoncus sit vestibulum sollicitudin. Tellus urna malesuada eu id tempus lorem. Est aliquam sem bibendum
                felis interdum pharetra. Diam fermentum in lectus morbi at eget sit quisque. Semper commodo viverra donec
                magna egestas nibh. Condimentum pellentesque auctor ornare at at tellus nunc cras eu. Velit dignissim penatibus
                faucibus tempus. Arcu pharetra morbi bibendum et dolor volutpat amet. Sed mauris amet mi sed purus vitae odio. Mi
                eu lectus suscipit sagittis, ultrices ut dui.
              </p>

              <ul className="space-y-3 pt-2 text-sm md:text-base text-slate-800 font-bold">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  <span>Posuere sed pulvinar enim faucibus justo, cursus.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  <span>In diam facilisi at sit convallis blandit blandit in.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                  <span>Maecenas odio orci lectus urna ante consequat erat non morbi.</span>
                </li>
              </ul>

              <p className="text-slate-600 text-sm md:text-base leading-relaxed pt-2">
                Posuere sed pulvinar enim faucibus justo, cursus. In diam facilisi at sit convallis blandit blandit in. Maecenas odio
                orci lectus urna ante consequat erat non morbi.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Beige Statistics Section */}
      <section className="bg-[#FFF7E2] py-20 w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <AnimatedSection key={idx} direction="up" delay={0.1 * idx}>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-slate-800 text-white rounded-lg shrink-0 mt-1">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl md:text-2xl font-bold text-[#1D2130]">
                        {stat.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* More Projects Section */}
      <section className="py-24 bg-white w-full">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-16">
          <AnimatedSection direction="up" delay={0.1}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-slate-900" />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-900">
                MORE PROJECTS
              </span>
            </div>
          </AnimatedSection>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {moreProjects.map((project, index) => (
              <AnimatedSection
                key={index}
                direction="up"
                delay={0.2 + index * 0.15}
              >
                <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg group flex flex-col justify-between p-8 text-white">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

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

          {/* Volunteer CTA Banner */}
          <AnimatedSection direction="up" delay={0.4}>
            <div className="relative rounded-3xl overflow-hidden py-20 px-8 text-center text-white shadow-xl min-h-[380px] flex items-center justify-center">
              <Image
                src="/images/children.png"
                alt="Children background"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />

              <div className="relative z-10 max-w-2xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
                  You can contribute to provide a place for children with special needs!
                </h2>
                <div className="flex flex-wrap justify-center items-center gap-4">
                  <Link
                    href="/volunteer"
                    className="px-6 py-3.5 bg-[#F2C94C] hover:bg-yellow-400 text-slate-900 font-bold rounded-md transition-colors text-sm"
                  >
                    Join as a volunteer
                  </Link>
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
    </main>
  );
}