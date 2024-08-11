"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { Home, Users } from "lucide-react";

const NavBar = () => {
  const pathname = usePathname();

  const linkClasses = (path: string) =>
    clsx(
      "flex items-center space-x-2 py-2 px-4 rounded transition-colors duration-300",
      pathname === path
        ? "bg-gray-800 text-white font-bold"
        : "text-gray-700 hover:bg-gray-200 hover:text-black",
    );

  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link href="/admin" className={linkClasses("/admin")}>
            <Home className="w-5 h-5" />
            <span>Home</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/users" className={linkClasses("/admin/users")}>
            <Users className="w-5 h-5" />
            <span>Users</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
