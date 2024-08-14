"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "001+82 10 2906 1754",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ga1754@naver.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Jeollabuk-do, Republic of Korea",
  },
];

export default function Contact() {
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
      className="pb-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[20px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-4 p-5 bg-[#113351] rounded-xl">
              <h3 className="text-3xl text-accent">Let{"'"}s work together</h3>
              <p className="text-modernzen/60">
                hello hello hello hello hello hello hello hello hello hello
                hello hello hello hello hello hello hello hello hello hello
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone number" />
              </div>
              {/* select */}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Front Development</SelectItem>
                    <SelectItem value="cst">Full Stack Development</SelectItem>
                    <SelectItem value="mst">UI/UX Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                className="h-[136px] resize-none"
                placeholder="Type your message here."
              />
              {/* button */}
              <Button size="default" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div
            className="flex-1 flex items-center xl:justify-end order-1
          xl:order-none mb-6 xl:mb-0"
          >
            <ul className="flex flex-col gap-6">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-4">
                    <div
                      className="size-[44px] xl:size-[64px] bg-[#113351]
                    text-accent rounded-[4px] flex items-center justify-center"
                    >
                      <div className="text-[24px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-modernzen/60">{item.title}</p>
                      <h3 className="text-lg">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
