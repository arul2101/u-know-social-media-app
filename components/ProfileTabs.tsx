import Link from "next/link"

import { GoFileMedia, GoPeople, GoInfo } from "react-icons/go";
import { FaRegFileLines } from "react-icons/fa6";

type ProfileTabsProps = {
  active: string;
}

const ProfileTabs: React.FC<ProfileTabsProps> = ({active}) => {
  const tabClasses = 'flex gap-1 px-4 py-1 items-center border-b-4 border-b-white';
  const activeTabClasses = 'flex gap-1 px-4 py-1 items-center border-socialBlue border-b-4 text-socialBlue font-bold';

  return (
    <div className="pt-8 md:mt-10 flex gap-0">
      <Link href={`/posts`} className={active === 'posts' ? activeTabClasses : tabClasses}>
        <span className="text-[1.2rem]">
          <FaRegFileLines />
        </span>
        <span className="hidden sm:block">Posts</span>
      </Link>
      <Link href={`/belom`} className={active === 'about' ? activeTabClasses : tabClasses}>
        <span className="text-[1.2rem]">
          <GoInfo />
        </span>
        <span className="hidden sm:block">About</span>
      </Link>
      <Link href={`/belom`} className={active === 'friends'? activeTabClasses : tabClasses}>
        <span className="text-[1.2rem]">
          <GoPeople />
        </span>
        <span className="hidden sm:block">Friends</span>
      </Link>
      <Link href={`/belom`} className={active === 'photos' ? activeTabClasses : tabClasses}>
        <span className="text-[1.2rem]">
          <GoFileMedia />
        </span>
        <span className="hidden sm:block">Photos</span>
      </Link>
    </div>
  )
}

export default ProfileTabs