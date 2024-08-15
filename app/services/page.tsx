"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "React.js",
    description:
      "I have experience using React.js in three different projects. I can create responsive web designs with Tailwind CSS and manage state using Redux/Toolkit.",
    href: "https://github.com/LEETAESEONG/Ddobak",
  },
  {
    num: "02",
    title: "Next.js",
    description:
      "Like React.js, I studied this technology on my own and learned about SSR through online courses. I am capable of creating responsive websites in simple projects.",
    href: "https://github.com/LEETAESEONG/Do-it",
  },
  {
    num: "03",
    title: "Vue.js",
    description:
      "I received specialized training in Vue.js at the SSAFY. I am proficient in UI/UX development using Bootstrap and state management with Vuex.",
    href: "https://github.com/LEETAESEONG/TTiving",
  },
  {
    num: "04",
    title: "Figma",
    description:
      "I am capable of creating simple UI/UX designs using Figma. I pay attention to details down to 1px and have experience designing for both web and mobile platforms.",
    href: "https://www.figma.com/design/cCTUT1gURh1zebCWU5K2Sa/C210?node-id=0-1&t=FnkXYcwEamqgYHNp-0",
  },
];

export default function Services() {
  return (
    <section className="min-h-[76vh] flex flex-col justify-center py-8 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[40px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-4 group"
              >
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div
                    className="text-5xl font-extrabold text-outline 
                  text-transparent group-hover:text-outline-hover transition-all
                  duration-500"
                  >
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="size-[50px] rounded-full bg-white
                  group-hover:bg-accent transition-all duration-500 flex
                  justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title */}
                <h2
                  className="text-[36px] font-bold leading-none text-modernzen
                group-hover:text-accent transition-all duration-500"
                >
                  {service.title}
                </h2>
                {/* description */}
                <p className="text-modernzen/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
