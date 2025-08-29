"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Profile Image */}
      <div className="relative w-[220px] h-[220px] xl:w-[340px] xl:h-[340px]">
        <Image
          src="/assets/photo.png"
          priority
          quality={100}
          fill
          alt="Profile"
          className="object-contain mix-blend-lighten"
        />
      </div>

      {/* Animated Circular Stroke */}
      <motion.svg
        className="absolute w-[260px] h-[260px] xl:w-[360px] xl:h-[360px]"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="253"
          cy="253"
          r="250"
          stroke="#10B981" // emerald-500
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: [
              "15 120 25 25",
              "16 25 92 72",
              "4 250 22 22",
            ],
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.svg>
    </div>
  );
};

export default Photo;
