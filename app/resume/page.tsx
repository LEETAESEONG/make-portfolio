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
      serviceName: "Ttobakttobak",
      theme: "AI Self-Diagnosis and Consultation Platform for Hair Loss)",
      position:
        "Front-end Developer (React, Redux/Toolkit, React-Router-Dom, TypeScript), Team Leader",
      duration: "July 2023 - August 2023",
    },
    {
      serviceName: "DonWorry",
      theme: "User Spending Management and Improvement Service",
      position: "Front-end Developer (React-Native, TypeScript)",
      duration: "August 2023 - October 2023",
    },
    {
      serviceName: "RE:Fill",
      theme: "AI Self-Diagnosis and Consultation Platform for Hair Loss",
      position: "Front-end Developer (React, TypeScript, Tailwind CSS)",
      duration: "July 2023 - August 2023",
    },
    {
      serviceName: "TTiving",
      them: "Movie Recommendation and Filming Location Search Service Based on Custom Algorithms",
      position:
        "Full-stack Developer (Django, Vue, Vuex, Bootstrap), Team Leader",
      duration: "May 2023 - May 2023",
    },
  ],
};
// experience data
const experience = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "hellohellohellohellohellohellohellohellohellohellohellohellohellohello",
  items: [
    {
      institution: "Samsung SW Academy For Youth (SSAFY)",
      degree:
        "Intensive coding education based on web technologies and algorithms, Project-based self-directed learning",
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
  return <motion.div>resume page</motion.div>;
}
