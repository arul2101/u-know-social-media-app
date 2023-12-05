import Card from "./Card"
import { GoHome, GoPeople, GoBookmark, GoBell } from "react-icons/go";
import NavLink from "./NavLink";
import LogoutButton from "./LogoutButton";

const menus = [
  {
    id: 1,
    title: "Home",
    path: "/",
    icon: <GoHome />
  },
  {
    id: 2,
    title: "Friends",
    path: "/friends",
    icon: <GoPeople />
  },
  {
    id: 3,
    title: "Saved Post",
    path: "/saved-post",
    icon: <GoBookmark />,
  },
  {
    id: 4,
    title: "Notifications",
    path: "/notifications",
    icon: <GoBell />
  }
]

const Navigation: React.FC = () => {
  return (
    <Card noPadding={true}>
      <div className="px-4 py-2 flex justify-between md:block md:shadow-md shadow-gray-500 max-sm:w-full">
        {menus.map(menu =>
          <NavLink
            key={menu.id}
            title={menu.title}
            icon={menu.icon}
            path={menu.path}
          />
        )}
        <LogoutButton />
      </div>
    </Card>
  )
}

export default Navigation