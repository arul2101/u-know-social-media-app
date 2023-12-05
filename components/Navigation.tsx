'use client'

import Link from "next/link"
import Card from "./Card"
import { usePathname } from "next/navigation";
import { GoHome, GoPeople, GoBookmark, GoBell, GoSignOut } from "react-icons/go";

const Navigation: React.FC = () => {
  const activeElementClasses = 'text-sm md:text-md flex gap-1 md:gap-3 py-3 my-1 bg-socialBlue text-white md:-mx-7 px-6 md:px-7 rounded-md shadow-md shadow-gray-300 items-center';
  const nonActiveElementClasses = 'text-sm md:text-md flex gap-1 md:gap-3 py-2 my-2 hover:bg-blue-500 hover:bg-opacity-20 md:-mx-4 px-6 md:px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300 items-center';
  const pathname = usePathname()

  return (
    <Card noPadding={true}>
      <div className="px-4 py-2 flex justify-between md:block shadow-md shadow-gray-500 md:shadow-none">
        <h2 className="text-gray-400 mb-3 hidden md:block">Navigation</h2>
        <Link href="/" className={pathname === '/' ? activeElementClasses : nonActiveElementClasses}>
          <span className="text-[1.8rem]">
            <GoHome />
          </span>
          <span className="hidden md:block">Home</span>
        </Link>
        <Link href="/profile/friends" className={pathname === '/profile/friends' ? activeElementClasses : nonActiveElementClasses}>
          <span className="text-[1.8rem]">
            <GoPeople />
          </span>
          <span className="hidden md:block">Friends</span>
        </Link>
        <Link href="/saved" className={pathname === '/saved' ? activeElementClasses : nonActiveElementClasses}>
          <span className="text-[1.8rem]">
            <GoBookmark />
          </span>
          <span className="hidden md:block">Saved posts</span>
        </Link>
        <Link href="/notifications" className={pathname === '/notifications' ? activeElementClasses : nonActiveElementClasses}>
          <span className="text-[1.8rem]">
            <GoBell />
          </span>
          <span className="hidden md:block">Notifications</span>
        </Link>
        <button className="w-full -my-2">
          <span className={nonActiveElementClasses}>
            <span className="text-[1.8rem]">
              <GoSignOut />
            </span>
            <span className="hidden md:block">Logout</span>
          </span>
        </button>
      </div>

    </Card>
  )
}

export default Navigation