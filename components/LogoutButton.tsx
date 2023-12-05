import { GoSignOut } from "react-icons/go"

const LogoutButton: React.FC = () => {
  return (
    <button className="md:w-full -my-2">
      <span className="text-sm md:text-md flex gap-1 md:gap-3 py-2 my-2 hover:bg-blue-500 hover:bg-opacity-20 md:-mx-4 px-6 md:px-4 rounded-md transition-all hover:scale-110 hover:shadow-md shadow-gray-300 items-center">
        <span className="text-[1.8rem]">
          <GoSignOut />
        </span>
        <span className="hidden md:block">Logout</span>
      </span>
    </button>
  )
}

export default LogoutButton