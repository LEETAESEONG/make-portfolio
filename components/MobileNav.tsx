"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { links } from "./Nav";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog"; // DialogDescription 추가

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
        <DialogDescription className="sr-only">
          This is the navigation menu
        </DialogDescription>{" "}
        {/* 설명 추가 */}
        {/* logo */}
        <div className="mt-24 mb-24 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
              LTS<span className="text-accent">.</span>{" "}
            </h1>
          </Link>
        </div>
        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                <SheetTrigger>{link.name}</SheetTrigger>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
