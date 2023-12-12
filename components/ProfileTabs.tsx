import { GoFileMedia, GoPeople, GoInfo } from "react-icons/go";
import { FaRegFileLines } from "react-icons/fa6";
import ProfileTabItem from "./ProfileTabItem";

type ProfileTabsProps = {
  active: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

const menus = [
  { label: 'Posts', href: '/profile/posts', icon: <FaRegFileLines /> },
  // { label: 'About', href: '/profile/about', icon: <GoInfo /> },
  { label: 'Friends', href: '/profile/friends', icon: <GoPeople /> },
  { label: 'Photos', href: '/profile/photos', icon: <GoFileMedia /> },
]

const ProfileTabs: React.FC<ProfileTabsProps> = ({active, setActivePage}) => {
  return (
    <div className="pt-8 mt-10 flex gap-0">
      {menus.map((menu, index) => (
        <ProfileTabItem
          active={active}
          icon={menu.icon}
          label={menu.label}
          key={index}
          setActivePage={setActivePage}
        />
      ))}
    </div>
  )
}

export default ProfileTabs