import Link from "next/link";
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="py-8 xl:py-12 text-modernzen">
      <div className="container mx-auto flex justify-between itmes-center">
        {/* logo */}
        <Link href={"/"}>
          <h1 className="text-4xl font-semibold">
            <span className="text-accent">LTS</span>eong
            <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>
        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
