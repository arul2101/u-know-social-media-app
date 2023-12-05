import Avatar from "./Avatar"
import { CiImageOn } from "react-icons/ci";

const FormComment: React.FC = () => {
  return (
    <div className="flex mt-4 gap-3">
      <div>
        <Avatar url='https://i.pravatar.cc/300' />
      </div>
      <div className="border relative grow rounded-full">
        <form>
          <input
            className="block w-full p-3 px-4 overflow-hidden h-12 rounded-full focus:outline-none" placeholder="Leave a comment" />
        </form>
        <button className="absolute top-3 right-3 text-gray-400 text-[1.3rem]">
          <CiImageOn />
        </button>
      </div>
    </div>
  )
}

export default FormComment