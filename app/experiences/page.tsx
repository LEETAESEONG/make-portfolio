"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "forntend forntend forntend forntend forntend forntend forntend",
    stack: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Redux/Toolkit" },
      { name: "React-Router-dom" },
    ],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "forntend forntend forntend forntend forntend forntend forntend",
    stack: [
      { name: "React-Native" },
      { name: "TypeScript" },
      { name: "figma" },
    ],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "forntend forntend forntend forntend forntend forntend forntend",
    stack: [{ name: "React.js" }, { name: "TypeScript" }, { name: "figma" }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "full stack",
    title: "project 4",
    description:
      "forntend forntend forntend forntend forntend forntend forntend",
    stack: [{ name: "Vue.js" }, { name: "Vuex" }, { name: "Django" }],
    image: "",
    live: "",
    github: "",
  },
];

export default function Experiences() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperClass) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[73vh] flex flex-col justify-center py-8 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[20px]">
          <div
            className="w-full xl:w-[50%] xl:h-[420px] flex flex-col
          xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[20px]">
              {/* outline num*/}
              <div
                className="text-7xl leading-none font-extrabold text-transparent
              text-outline"
              ></div>
              {/* project category */}
              <h2
                className="text-[36px] font-bold leading-none text-white
              group-hover:text-accent transition-all duration-500 capitalize"
              >
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="size-[64px] rounded-full
                      bg-white/5 flex justify-center items-center hover:text-accent"
                      >
                        <BsArrowUpRight className="text-white text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger
                        className="size-[64px] rounded-full
                      bg-white/5 flex justify-center items-center hover:text-accent"
                      >
                        <BsGithub className="text-white text-3xl" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={20}
              slidesPerView={1}
              onSlideChange={handleSlideChange}
              className="xl:h-[480px] mb-6"
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div
                      className="h-[440px] relative flex justify-center
                    items-center bg-pink-50/20"
                    >
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt="projectImage"
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
