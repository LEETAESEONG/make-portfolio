"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import profileImage from "../public/assets/rounded_LeeTaeseong.png";

export default function Photo() {
  return (
    <div className="size-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="absolute size-[298px] xl:size-[448px] mix-blend-lighten"
        >
          <Image
            src={profileImage}
            alt="profileImage"
            priority
            quality={100}
            fill
            className="object-contain"
            sizes="width: 100%"
          />
        </motion.div>
        {/* circle */}
        <motion.svg
          className="size-[300px] xl:size-[456px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx={253}
            cy={253}
            r={250}
            stroke={"#00ff99"}
            strokeWidth={4}
            strokeLinecap={"round"}
            strokeLinejoin={"round"}
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
}
