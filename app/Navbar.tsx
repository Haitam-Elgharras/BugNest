"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { href: "/", label: "Dashboard" },
    { href: "/issues", label: "Issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b mb-5 h-12 items-center px-5">
      <Link href="/">
        <AiFillBug size={20} />
      </Link>
      <ul className="flex space-x-6">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={classNames({
              "text-zinc-900": currentPath === href,
              "text-zinc-500": currentPath !== href,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
