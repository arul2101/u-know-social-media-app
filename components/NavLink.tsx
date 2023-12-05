'use client'

import Link from "next/link"
import { usePathname } from "next/navigation";

type NavLinkProps = {
  icon: React.ReactNode;
  title: string;
  path: string;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, title, path }) => {
  const activeElementClasses = 'text-sm md:text-md flex gap-1 md:gap-3 py-3 my-1 bg-socialBlue text-white md:-mx-7 px-6 md:px-7 rounded-md shadow-md shadow-gray-300 items-center';
  const nonActiveElementClasses = 'text-sm md:text-md flex gap-1 md:gap-3 py-2 my-2 hover:bg-blue-500 hover:bg-opacity-20 md:-mx-4 px-6 md:px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300 items-center';
  const pathname = usePathname()

  return (
    <Link href={path} className={pathname === path ? activeElementClasses : nonActiveElementClasses}>
      <span className="text-[1.8rem]">
        {icon}
      </span>
      <span className="hidden md:block">{title}</span>
    </Link>
  )
}

export default NavLink