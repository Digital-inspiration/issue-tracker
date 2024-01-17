'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ImBug } from "react-icons/im";
import classNames from "classnames";


const NavBar = () => {

    const currentPath = usePathname();
    console.log(currentPath);

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Link href="/">
        <ImBug />
      </Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <li>
            <Link
              key={link.href}
              className={classNames({
                'text-zinc-950': currentPath === link.href,
                'text-zinc-500': currentPath !== link.href,
                'hover: text-zinc-700 transition-colors': true
              })}
              href={link.href}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
