"use client";
import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import thumb1 from "../../public/work/thumb1.png";
import thumb2 from "../../public/work/thumb2.png";
import thumb3 from "../../public/work/thumb3.png";
import thumb4 from "../../public/work/thumb4.png";
import thumb5 from "../../public/work/thumb5.png";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "project 1",
    description:
      "forntend forntend forntend forntend forntend forntend forntend",
    stack: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Redux/Toolkit" },
    ],
    image: thumb1,
    live: "",
    github: "https://github.com/LEETAESEONG/Do-it",
  },
  {
    num: "02",
    category: "frontend",
    title: "project 2",
    description:
      "forntend forntend forntend forntend forntend forntend forntend",
    stack: [
      { name: "React.js" },
      { name: "TypeScript" },
      { name: "Redux/Toolkit" },
      { name: "React_Router_dom" },
    ],
    image: thumb2,
    live: "",
    github: "https://github.com/LEETAESEONG/Ddobak",
  },
  {
    num: "03",
    category: "frontend",
    title: "project 3",
    description:
      "forntend forntend forntend forntend forntend forntend forntend",
    stack: [{ name: "ReactNative" }, { name: "TypeScript" }, { name: "Figma" }],
    image: thumb3,
    live: "",
    github: "https://github.com/LEETAESEONG/DonWorry",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
      "forntend forntend forntend forntend forntend forntend forntend",
    stack: [{ name: "React.js" }, { name: "TypeScript" }, { name: "figma" }],
    image: thumb4,
    live: "",
    github: "https://github.com/LEETAESEONG/ReFill",
  },
  {
    num: "05",
    category: "full stack",
    title: "project 5",
    description:
      "forntend forntend forntend forntend forntend forntend forntend",
    stack: [{ name: "Vue.js" }, { name: "Vuex" }, { name: "Django" }],
    image: thumb5,
    live: "",
    github: "https://github.com/LEETAESEONG/TTiving",
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
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
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
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent break-words">
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
                      bg-white/5 flex justify-center items-center hover:text-accent text-white text-3xl"
                      >
                        <BsArrowUpRight />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white rounded-[4px] px-2">
                        <p className="capitalize text-black">Live project</p>
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
                      bg-white/5 flex justify-center items-center hover:text-accent text-white text-3xl"
                      >
                        <BsGithub />
                      </TooltipTrigger>
                      <TooltipContent className="bg-white rounded-[4px] px-2">
                        <p className="capitalize text-black">
                          Github repository
                        </p>
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
                      className="h-[420px] relative flex justify-center
                    items-center bg-pink-50/20 rounded-xl"
                    >
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 size-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative size-full rounded-xl">
                        <Image
                          src={project.image}
                          fill
                          alt="projectImage"
                          sizes="w-100vh"
                          priority={index == 0 ? true : false}
                          className="rounded-xl"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
                xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
                size-[44px] flex justify-center items-center transition-all rounded-xl"
                iconsStyles=""
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
