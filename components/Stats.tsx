"use client";

import CountUp from "react-countup";

const stats = [
  {
    key: 1234,
    num: 1,
    text: "Years of experience",
  },
  {
    key: 5678,
    num: 4,
    text: "Projects completed",
  },
  /*
    JavaScript, Python, Java, TypeScript
    React, React-Native, Vue, Django, Next
    SQL
   */
  {
    key: 9101,
    num: 11,
    text: "Technologies used",
  },
  {
    key: 1213,
    num: 1182,
    text: "Code commits",
  },
];

export default function Stats() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={item.key}
                className="flex-1 flex gap-4 items-center justify-center 
                xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
