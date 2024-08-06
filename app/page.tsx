import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Front-End Developer</span>
            <h1 className="h1 mb-6">
              <span className="text-accent">L</span>atest{" "}
              <span className="text-accent">T</span>ech{" "}
              <span className="text-accent">S</span>tudy
              <br /> <span className="text-accent">L</span>ee{" "}
              <span className="text-accent">T</span>ae{" "}
              <span className="text-accent">S</span>eong
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I have completed the Samsung Software Academy for Youth (SSAFY)
              program and am proficient in JavaScript and Python. Currently, I
              am studying Next.js with great interest.
            </p>
            {/* btn and socials */}
            
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}
