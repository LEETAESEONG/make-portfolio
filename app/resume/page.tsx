"use client";
// icons, tooltip, tap. scroll-area, motion
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaPython,
  FaFigma,
  FaVuejs,
  FaJava,
  FaJira,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiBootstrap,
  SiNextdotjs,
  SiMysql,
  SiDjango,
  SiRedux,
} from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Image from "next/image";
// image
import ddobak from "../../public/resume/projects/ddobak.png";
import refill from "../../public/resume/projects/refill.png";
import donworry from "../../public/resume/projects/donworry.png";
import ttiving from "../../public/resume/projects/ttiving.png";

// about data
const about = {
  title: "About me",
  description: "hello my name is Lee Taeseong",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Taeseong Lee",
    },
    {
      fieldName: "Phone",
      fieldValue: "001+82 10 2906 1754",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Korean",
    },
    {
      fieldName: "Email",
      fieldValue: "ga1754@naver.com",
    },
    {
      fieldName: "Job Seeking",
      fieldValue: "Yes",
    },
  ],
};
// project data
const project = {
  icon: "/assets/resume/badge.svg",
  title: "My team projects",
  description:
    "everybody hello everybody hello everybody hello everybody hello everybody hello everybody hello",
  items: [
    {
      serviceName: "TTobakTTobak",
      theme: "AI-based Handwriting Creation Service",
      position: "Front-end, Team Leader",
      tech: "React, Redux/Toolkit, React-Router-Dom, TypeScript",
      duration: "July 2023 - August 2023",
    },
    {
      serviceName: "DonWorry",
      theme: "User Spending Management and Improvement Service",
      position: "Front-end",
      tech: "React-Native, TypeScript",
      duration: "August 2023 - October 2023",
    },
    {
      serviceName: "RE:Fill",
      theme: "AI Self-Diagnosis and Consultation Platform for Hair Loss",
      position: "Front-end",
      tech: "React, TypeScript, Tailwind CSS",
      duration: "July 2023 - August 2023",
    },
    {
      serviceName: "TTiving",
      theme:
        "Movie Recommendation and Filming Location Search Service Based on Custom Algorithms",
      position: "Full-stack, Team Leader",
      tech: "Django, Vue, Vuex, Bootstrap",
      duration: "May 2023 - May 2023",
    },
  ],
};
// experience data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "hellohellohelloh ellohellohellohellohelloh ellohellohellohellohellohello",
  items: [
    {
      institution: "Samsung SW Academy For Youth (SSAFY)",
      degree:
        "Python Track: Intensive coding education based on web technologies and algorithms && Project-based self-directed learning",
      duration: "Jan 2023 - Nov 2023",
    },
    {
      institution: "K-Digital Basic Competency Training",
      degree: "Elise Track: Python Basics and Machine Learning",
      duration: "Jan 2022 - Fev 2022",
    },
  ],
};
// skills
const skills = {
  title: "My skills",
  description: "my skills",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaVuejs />,
      name: "vue.js",
    },
    {
      icon: <SiRedux />,
      name: "redux",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <SiBootstrap />,
      name: "bootstrap",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <SiDjango />,
      name: "django",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
    {
      icon: <FaJira />,
      name: "jira",
    },
  ],
};

export default function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[76vh] flex items-center justify-center py-8 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="project"
          className="flex flex-col xl:flex-row gap-[40px]"
        >
          <TabsList className="flex flex-col w-full max-w-[340px] mx-auto xl:mx-0 gap-4">
            <TabsTrigger value="project">Project</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[73vh] w-full">
            {/* project */}
            <TabsContent value="project" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{project.title}</h3>
                <p className="max-w-[560px] text-white/60 mx-auto xl:mx-0">
                  {project.description}
                </p>
                <ScrollArea className="h-[400px] lg:h-[360px]">
                  <ul className="grid gap-[20px] grid-cols-1">
                    {project.items.map((item) => {
                      return (
                        <li
                          key={item.serviceName}
                          className="bg-[#232329] h-[460px] py-6 px-10 rounded-xl
                        flex flex-col justify-between items-center lg:items-start gap-1
                        xs:h-[400px] sm:h-[340px] md:h-[320px] lg:h-[300px] xl:h-[280px]"
                        >
                          <p className="text-accent">{item.duration}</p>
                          <div>
                            <h3 className="text-3xl min-h-[50px] text-center lg:text-left">
                              {item.serviceName}
                            </h3>
                          </div>
                          {/* dot */}
                          <div>
                            <div className="flex items-start gap-[6px]">
                              <div className="flex items-center gap-[6px]">
                                <div className="size-[6px] rounded-full bg-accent"></div>
                                <span className="text-accent">Position:</span>
                              </div>
                              <p className="text-left">{item.position}</p>
                            </div>
                            <div className="flex items-start gap-[6px]">
                              <div className="flex items-center gap-[6px]">
                                <div className="size-[6px] rounded-full bg-accent"></div>
                                <span className="text-accent">Tech:</span>
                              </div>
                              <p className="text-left">{item.tech}</p>
                            </div>
                            <div className="flex items-start gap-[6px]">
                              <div className="flex items-center gap-[6px]">
                                <div className="size-[6px] rounded-full bg-accent"></div>
                                <span className="text-accent">Theme:</span>
                              </div>
                              <p className="text-left">{item.theme}</p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[20px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[560px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px] lg:h-[360px]">
                  <ul className="grid gap-[20px] grid-cols-1">
                    {education.items.map((item) => {
                      return (
                        <li
                          key={item.institution}
                          className="bg-[#232329] h-[360px] py-6 px-10 rounded-xl
                        flex flex-col justify-between items-center lg:items-start gap-1
                        sm:h-[240px] xl:h-[220px]"
                        >
                          <p className="text-accent">{item.duration}</p>
                          <div>
                            <h3 className="text-xl min-h-[20px] text-center lg:text-left">
                              {item.degree}
                            </h3>
                          </div>
                          {/* dot */}
                          <div>
                            <div className="flex items-center gap-[12px]">
                              <div className="size-[8px] rounded-full bg-accent"></div>
                              <p className="text-left text-white/60">
                                {item.institution}
                              </p>
                            </div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="size-full pb-5">
              <div className="flex flex-col gap-[20px]">
                <div className="flex flex-col gap-[20px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[560px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px] lg:h-[360px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:gap-[20px] gap-1">
                    {skills.skillList.map((skill) => {
                      return (
                        <li key={skill.name}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger
                                className="w-full h-[140px] bg-[#232329] hover:text-accent
                            rounded-xl flex justify-center items-center"
                              >
                                <div className="text-5xl transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent className="bg-white rounded-[4px] px-2">
                                <p className="capitalize text-black">
                                  {skill.name}
                                </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[20px]">
                <h3 className="text-3xl font-bold">{about.title}</h3>
                <p className="max-w-[560px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul
                  className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0"
                >
                  {about.info.map((item) => {
                    return (
                      <li
                        key={item.fieldName}
                        className="flex items-center justify-center xl:justify-start
                        gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
