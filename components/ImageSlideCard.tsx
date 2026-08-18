"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImageSlideCardProps {
  src: string;
  alt: string;
  title: string;
  category?: string;
  direction?: "left" | "right" | "up";
  delay?: number;
}

export const ImageSlideCard = ({
  src,
  alt,
  title,
  category,
  direction = "left",
  delay = 0.1,
}: ImageSlideCardProps) => {
  const xOffset = direction === "left" ? -80 : direction === "right" ? 80 : 0;
  const yOffset = direction === "up" ? 50 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: xOffset, y: yOffset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl bg-neutral-900 shadow-xl"
    >
      <div className="relative h-80 w-full overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          className="h-full w-full"
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-opacity duration-300 group-hover:opacity-90"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
        {category && (
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-1">
            {category}
          </span>
        )}
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
    </motion.div>
  );
};