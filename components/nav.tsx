"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            className={cn("", {
              "text-accent border-b-2 border-accent capitalize font-medium hover:text-accent transition-all":
                link.path === pathname,
            })}
            href={link.path}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
