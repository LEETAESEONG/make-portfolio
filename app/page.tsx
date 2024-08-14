import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socail from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import GetUsersData from "./utils/get-users-data";

export default function Home() {
  GetUsersData();
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div
          className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-0 xl:pb-6"
        >
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Front-End Developer</span>
            <h1 className="h1 mb-6">
              <span className="text-accent">L</span>atest{" "}
              <span className="text-accent">T</span>ech{" "}
              <span className="text-accent">S</span>tudy
              <br /> <span className="text-accent">L</span>ee{" "}
              <span className="text-accent">T</span>ae{" "}
              <span className="text-accent">S</span>eong
            </h1>
            <p className="max-w-[500px] mb-9 text-modernzen/80">
              I have completed the Samsung Software Academy for Youth (SSAFY)
              program. I{"'"}m proficient in JavaScript and Python. Currently,
              My great interest is Next.js and I{"'"}m studying it.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socail
                  containerStyles="flex gap-2 xl:gap-6"
                  iconStyles="w-[108px] h-9 border border-accent rounded-full flex
                  justify-center items-center text-base text-accent hover:bg-accent 
                  hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
